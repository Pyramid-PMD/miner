import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsForm from "./SettingsForm";
import SettingsActions , {SettingsSelectors, selectInitialValues} from "./SettingsRedux";

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


    render() {
        // if (this.props.loading) {
        //    return <div>Loading settings</div>;
        // }
        if (this.props.rates) {
            return (
                <div>
                    <SettingsForm
                        initialValues={ this.props.initialValues }
                        setDefaultSettings = { this.setDefaultSettings }
                        cancelChangedSettings = { this.cancelChangedSettings }
                        saveSettings={ this.props.saveSettings }
                        rates= { this.props.rates }
                        driveList={this.props.driveList}
                    />
                </div>
            );
        }
        return <div>Loading settings</div>;

    }
}


const mapStateToProps = (state) => {
    return {
        loading: SettingsSelectors.selectLoading(state),
        rates: SettingsSelectors.selectRates(state),
        driveList: SettingsSelectors.selectDriveList(state),
        initialValues: selectInitialValues(state)
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