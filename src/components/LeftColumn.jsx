import React from 'react';
import PromoCodes from './PromoCodes';
import CurrencyConverter from './CurrencyConverter';

const leftColumn = () => {
    return (
        <div className={'container shop-left-column py-2'}>
            <PromoCodes showText>
                {/*shown only if there are no promocodes set*/}
                <div>
                    <h5>New Stock!</h5>
                    <p>We have just restocked. Shop now fot the latest trends in fashion.</p>
                </div>
            </PromoCodes>
            <hr/>
            <div>
                <CurrencyConverter
                showLabel/>
            </div>
            <hr/>
            <div>
                <h5>Contact Us</h5>
                <p>For enquiries, reach us through,<br/> (+254)-000-000-000</p>
            </div>
        </div>
    )
};


export default leftColumn;