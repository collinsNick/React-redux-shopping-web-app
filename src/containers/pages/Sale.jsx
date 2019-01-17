import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ADD_TO_CART} from "../../store/actions/shop";
import ProductCard from "../../components/ProductCard";

class Sale extends Component {
    render() {

        let products = <div className={'shop-div p-4'}>
                            <h5>There are currently no products. Check back later</h5>
                        </div>

        if (this.props.productsProps) {
            products = this.props.productsProps
                .filter( product => product.sale === true)
                .map(product => {
                return (
                    <ProductCard
                        key={product.id}
                        productName={product.name}
                        productPrice={product.price}
                        productDiscountPrice={product.discount_price}
                        productSale={product.sale}
                        productImage={product.img}
                        productCategory={product.category}
                        productQuantity={product.quantity}
                        addToCart={() => this.props.addProductToCartProp(product.id)}
                    />
                )
            })
        }
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
         productsProps: state.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProductToCartProp: (productId) => dispatch({type: ADD_TO_CART, productId: productId})
    }
};

Sale.propTypes = {
    productsProps: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Sale);