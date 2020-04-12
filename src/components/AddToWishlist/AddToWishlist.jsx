import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toogleItemInWishList} from '../../store/actions/shop';
import { Heart } from '../UI/Icons/Icons.jsx';

class AddToWishlist extends Component {

    toogleWishlistItem = (event) => {
        this.props.addRemoveItemInWishlist(this.props.productId);
    };

    wished = () => {
        return this.props.wishlistItems.find(productId => productId === this.props.productId ) ? 'wished' : null
    };

    render() {
        return (
            <span
                className={`${this.props.classStyleName} ${this.wished()}`}
                title={this.props.title}
                onClick={this.toogleWishlistItem}
                >
                <Heart/>
            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        wishlistItems: state.wishlist,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addRemoveItemInWishlist: (productId) => dispatch(toogleItemInWishList(productId)),
    }
};

AddToWishlist.prototypes = {
    productId: PropTypes.number.isRequired,
    classStyleName: PropTypes.string,
    title: PropTypes.string,
}

export default connect(mapStateToProps,mapDispatchToProps)(AddToWishlist);