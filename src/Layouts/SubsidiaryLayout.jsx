import React, {Component} from 'react';

class SubsidiaryLayout extends Component {
    render() {
        return (
            <div className="container shop-container py-4">
                <div className={'p-4 shop-div'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default SubsidiaryLayout;