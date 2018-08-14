import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import config from '../../config/app.config';
import AppLogo from "../../components/AppLogo/AppLogo";
import { connect } from 'react-redux';
import RegisterForm from "./RegisterForm";
import { StartupSelectors } from '../../Redux/StartupRedux';
import {CopyToClipboard} from "react-copy-to-clipboard";

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
    }

    onCopy = () => {
        this.setState({copied: true});
        setTimeout(() => {
            this.setState({copied: false});
        }, 2000)
    }
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div className="page page-register full-height" style={pageStyles}>
                            <div className="page-container d-flex flex-column full-height">
                                <AppLogo />
                                <h2 className="text-center text-capitalize">{ t('auth:register.title') }</h2>
                                <div className="form-container">
                                    <p className="text-secondary">{ t('auth:register.introText') }</p>
                                    <RegisterForm />
                                </div>
                                <div className="mt-auto d-flex align-items-baseline">
                                    <span className="text-secondary mr-2">{t('common:interface.diskSerial')}: </span><span>{this.props.disk_id}</span>
                                    <CopyToClipboard text={this.props.disk_id} className="btn" onCopy={this.onCopy}>
                                        <span>{t('common:interface.copy')}</span>
                                    </CopyToClipboard>
                                    { this.state.copied ? <span>{t('common:interface.copiedToCB')}</span> : null }
                                </div>


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
        disk_id: StartupSelectors.selectDiskSerial(state)
    };
};

export default connect(mapStateToProps, {})(Register);