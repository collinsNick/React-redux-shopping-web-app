import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductCard from '../../components/ProductCard';

class Index extends Component {
    render() {

        let products = null;

        if (this.props.productsProps) {
            products = this.props.productsProps.map( product => {
                return (
                    <ProductCard
                        key = {product.id}
                        productName = {product.name}
                        productPrice = {product.price}
                        productDiscountPrice = {product.discount_price}
                        productSale = {product.sale}
                        productImage={product.img}
                        productCategory={product.category}
                        />
                )
            })
        } else {
            products = 'mimi'
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
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);