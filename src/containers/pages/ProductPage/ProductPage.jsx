import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from '../../../components/UI/BreadCrumbs/BreadCrumbs'

class ProductPage extends Component {

    product = this.props.productProp;

    truncateProductName() {
        const productName = this.product.name;
        return productName.length > 45 ? `${productName.substring(0, 45)}...` : productName;
    }

    render() {
        return (
            <div className="container py-2">
                <BreadCrumbs
                    breadCrumbLinks={
                        [
                            {
                                label: this.product.category,
                                to: '/category/' + this.product.category
                            },
                            {
                                label: this.truncateProductName(),
                                to: null
                            }
                        ]
                    } />
                <div className="bg-white p-2">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1">
                                    <img
                                    src={require(`../../../assets/images/shop_images/${this.product.img}`)}
                                    alt={this.product.name}
                                     />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        productProp: state.products.find(product => product.slug === ownProps.match.params.productSlug),
        usedCurrencyProp: state.usedCurrency
    }
};

export default connect(mapStateToProps)(ProductPage);