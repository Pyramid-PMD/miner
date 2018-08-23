import React from 'react';
import AppLogo from "../../../../components/AppLogo/AppLogo";


const MenuHeader = (props) => {
    return (
       <div className="main-menu-header text-center">
           <AppLogo />
           <p><span className="margin-right-4 number">{ props.balance }</span><span className="text-uppercase">PMD</span></p>
           <p><span className="margin-right-4 number">≈{ props.adjustedBalance }</span><span className="text-uppercase">{ props.currency ? props.currency.name : null }</span></p>
       </div>
    )
};

export default MenuHeader;