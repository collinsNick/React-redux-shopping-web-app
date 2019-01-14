import * as actionTypes from '../actions/shop';

const initialState = {
    cart: {},
    cartTotal: 0,
    sale: false,
    product: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_TO_CART:
            return {
                ...state
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;