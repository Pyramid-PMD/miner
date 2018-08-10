import React, { Component } from 'react';
import { connect } from 'react-redux';

import SettingsForm from "./SettingsForm";
import SettingsActions , {SettingsSelectors} from "./SettingsRedux";

class Settings extends Component {
    componentDidMount() {
        this.props.loadDefaultSettings();
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
                        saveSettings={ this.props.saveSettings }
                        rates= { this.props.rates }
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
        initialValues: {
            machine_name: SettingsSelectors.selectAlias(state),
            language: SettingsSelectors.selectLanguage(state),
            currency: SettingsSelectors.selectUserCurrency(state),
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getUserInfo: () => dispatch(SettingsActions.userInfoRequest()),
        loadDefaultSettings: () => dispatch(SettingsActions.loadDefaultSettings()),
        saveSettings: (settings) => dispatch(SettingsActions.saveSettingsRequest(settings)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);