import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UncontrolledAlert } from 'reactstrap';
import SettingsForm from "./SettingsForm";
import SettingsActions , {SettingsSelectors, selectInitialValues} from "./SettingsRedux";
import { I18n } from 'react-i18next';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.setDefaultSettings = this.setDefaultSettings.bind(this);
        this.cancelChangedSettings = this.cancelChangedSettings.bind(this);
    }
    componentDidMount() {
        this.props.loadDefaultSettings();
    }

    setDefaultSettings() {
        this.props.setDefaultAppSettings();
    }

    cancelChangedSettings() {
        this.props.cancelChangedSettings();
    }

    renderSaveFeedback(t) {
        if (this.props.success) {
            return <UncontrolledAlert>{ t('dashboard:settings.saveSettingsSuccess') }</UncontrolledAlert>;
        }
    }

    render() {
        console.log('settings', this.props.rates);
        return (
            <I18n>
                {
                    (t) => (
                        this.props.rates ?
                        <div>
                            { this.renderSaveFeedback(t) }
                            <SettingsForm
                                initialValues={ this.props.initialValues }
                                setDefaultSettings = { this.setDefaultSettings }
                                cancelChangedSettings = { this.cancelChangedSettings }
                                saveSettings={ this.props.saveSettings }
                                rates= { this.props.rates }
                                driveList={this.props.driveList}
                            />
                        </div> : <div>{ t('dashboard:settings.loading') }</div>
                    )
                }
            </I18n>

        );
    }
}


const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        loading: SettingsSelectors.selectLoading(state),
        rates: SettingsSelectors.selectRates(state),
        driveList: SettingsSelectors.selectDriveList(state),
        initialValues: selectInitialValues(state),
        success: SettingsSelectors.selectSaveSuccess(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getUserInfo: () => dispatch(SettingsActions.userInfoRequest()),
        loadDefaultSettings: () => dispatch(SettingsActions.loadDefaultSettings()),
        saveSettings: (settings) => dispatch(SettingsActions.saveSettingsRequest(settings)),
        setDefaultAppSettings: () => dispatch(SettingsActions.setDefaultAppSettings()),
        cancelChangedSettings: () => dispatch(SettingsActions.cancelSettingsChanges())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);