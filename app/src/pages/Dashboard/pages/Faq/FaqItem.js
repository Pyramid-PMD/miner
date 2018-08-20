import React from 'react';
import {AccordionItem, AccordionItemBody, AccordionItemTitle} from "react-accessible-accordion";

const FaqItem = (props) => {
    const { faq } = props;
    return (
        <AccordionItem className="faq-item mb-3">
            <AccordionItemTitle>
                <h3>{ faq.head }</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p className="faq-body text-secondary">{ faq.body}</p>
            </AccordionItemBody>
        </AccordionItem>
    );
};

export default FaqItem;