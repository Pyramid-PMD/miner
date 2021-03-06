import React, { Component } from 'react';
import { connect } from 'react-redux';
import {I18n} from 'react-i18next';
import QrLoginActions, {QrCodeLoginSelectors} from './QrLoginRedux';
import config from '../../config/app.config';

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

class QrCodeLogin extends Component {
    componentDidMount() {
        this.props.generateQrCode();
    }
    render() {
        const {qrCode} = this.props;
        return (
            <I18n>
                {
                    (t) => (
                        <div className="page page-login full-height d-flex justify-content-center align-items-center" style={pageStyles}>
                            <div className="page-container d-flex flex-column align-items-center">
                                {qrCode ? <img src={qrCode} alt="Machine qr code" style={{width:'250px'}}/> :  null }
                                <p className="mt-4">Login PYRAMID</p>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}


const mapStateToProps = (state) => ({
    qrCode: QrCodeLoginSelectors.selectQrCode(state)
});

const mapDispatchToProps = (dispatch) => ({
    generateQrCode: () => dispatch(QrLoginActions.qrCodeRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(QrCodeLogin);