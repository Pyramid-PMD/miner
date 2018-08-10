import React, { Component } from 'react';
import { I18n } from 'react-i18next';
import ExchangeIndexItem from "./ExchangeIndexItem";
import ComingSoon from "./ComingSoon";




const ExchangeIndex = (props) => {
    const { exchangeIndex, currency  } = props;
    const renderExchangeList = () => {
        if (exchangeIndex && exchangeIndex.length > 0) {
            return exchangeIndex.map( index => <ExchangeIndexItem key={index.name} exchangeItem={ index } currency={currency}/>)
        }
    };

    return (
           <I18n>
               {
                   (t) => (
                       <section>
                           <h2 className="text-capitalize">{t('dashboard:overview.exchangeIndex')}</h2>
                           <ul className="exchange-list d-flex justify-content-start list-unstyled">
                               { currency ? renderExchangeList() : null }
                               <ComingSoon/>
                           </ul>
                       </section>
                   )
               }
           </I18n>
       );
}

export default ExchangeIndex;