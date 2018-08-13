import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SettingsSelectors } from '../Settings/SettingsRedux';

import faqs from './faq.json';

import {
    Accordion
} from 'react-accessible-accordion';
import FaqItem from "./FaqItem";
// import 'react-accessible-accordion/dist/fancy-example.css';

class Faq extends Component {
    renderFaqItems() {
        const faqItems = faqs[this.props.language.code];
        return faqItems.map(item => <FaqItem faq={item} key={item.id} />)
    }
    render() {
        return (
            <Accordion className="faq-item">
                { this.renderFaqItems() }
            </Accordion>
        );
    }
}

const mapStateToProps = (state) => ({
    language: SettingsSelectors.selectLanguage(state)
});

export default connect(mapStateToProps)(Faq);