import React, { Component } from 'react';
import {connect} from 'react-redux';
import {I18n} from 'react-i18next';
import config from '../../config/app.config';
import AppLogo from "../../components/AppLogo/AppLogo";
import QrLoginActions, {QrCodeLoginSelectors} from '../../pages/QrCodeLogin/QrLoginRedux';
import {Link} from 'react-router-dom';

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class StartUp extends Component {
    componentDidMount() {
        // localStorage.clear();
        this.props.startAutLogin();
    }

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div className="page page-login full-height d-flex justify-content-center align-items-center" style={pageStyles}>
                            <div className="page-container">
                                <AppLogo />
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: QrCodeLoginSelectors.selectUser(state),
        loading: QrCodeLoginSelectors.selectLoading(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAutLogin: () => dispatch(QrLoginActions.startAutoLogin()),
    }
};
export default connect(null, mapDispatchToProps)(StartUp);