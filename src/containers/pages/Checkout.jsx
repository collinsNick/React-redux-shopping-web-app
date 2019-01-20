import React, {Component} from 'react';
import SubsidiaryLayout from '../../Layouts/SubsidiaryLayout';

class Checkout extends Component {
    render() {
        return (
            <SubsidiaryLayout>
                <h5 className={'shop-checkout'}>
                    Thank you for shopping with us. Comeback again soon.
                </h5>
            </SubsidiaryLayout>
        )
    }
}

export default Checkout;