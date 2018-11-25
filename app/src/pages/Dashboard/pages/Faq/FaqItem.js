import React from 'react';
import {AccordionItem, AccordionItemBody, AccordionItemTitle} from "react-accessible-accordion";

const FaqItem = (props) => {
    const { faq } = props;
    const imageContainerClass = `${faq.imageContainerClass}`;
    const renderImages = () => {
        if (faq.images && faq.images.length > 0) {
            return faq.images.map(image => {
                return (
                    <figure key={image.id} className="mt-4">
                        <img className="img-fluid mb-2" src={image.src} alt="Help item image"/>
                        {
                            image.caption ?
                            <figcaption className="text-center text-small text-secondary">{image.caption}</figcaption>
                            : null
                        }
                    </figure>
                )
            })
        }
    };
    return (
        <AccordionItem className="faq-item mb-3">
            <AccordionItemTitle>
                <h3>{ faq.head }</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <div className="faq-body text-secondary" dangerouslySetInnerHTML={{__html: faq.body}}>
                </div>
                <div className={imageContainerClass}>
                    {renderImages()}
                </div>

            </AccordionItemBody>
        </AccordionItem>
    );
};

export default FaqItem;