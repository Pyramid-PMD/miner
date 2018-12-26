import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class Wallet extends Component {
    state = {
        copied: false
    };

    onCopy = () => {
        this.setState({copied: true});
        setTimeout(() => {
            this.setState({copied: false});
        }, 2000)
    }
    render() {
        const { address, balance } = this.props;

        return (
            <I18n>
                {
                    (t) => (
                        <section className="wallet has-separator margin-bottom-16">
                            <ul className="list-unstyled">
                                <li>
                                    <h2 className="text-secondary text-small">{ t('dashboard:transaction.walletAddress') }</h2>
                                    <div className="d-flex justify-content-between align-items-center text-secondary">
                                        <p>{ address }</p>
                                        <CopyToClipboard text={address} className="btn btn-link" onCopy={this.onCopy}>
                                            <p>{ t('common:interface.copy') }</p>
                                        </CopyToClipboard>


                                        {/*<button className="btn form-link">{ t('common:interface.copy') }</button>*/}
                                    </div>
                                    { this.state.copied ? <p>{t('common:interface.copiedToCB')}</p> : null }
                                </li>
                                <li>
                                    <h2 className="text-secondary text-small">{ t('dashboard:transaction.balance') }</h2>
                                    <p><span className="number number-big margin-right-4">{  balance }</span><span className="text-small">PMDC</span></p>
                                </li>
                            </ul>
                        </section>
                    )
                }
            </I18n>
        )
    }
}

export default Wallet;