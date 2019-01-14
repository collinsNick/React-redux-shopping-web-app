import * as actionTypes from '../actions/shop';

const initialState = {
    cart: {},
    cartTotal: 0,
    sale: false,
    products: [
        {
            id:1,
            name: 'analog quartz watch',
            price: 500,
            discount_price: 2800,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'watch',
            img: 'analog-quartz-watch.jpg'
        },
        {
            id:2,
            name: 'singedani four set handbag',
            price: 1160,
            discount_price: 2320,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'handbag',
            img: 'singedani-handbag.jpg'
        },
        {
            id:3,
            name: 'Boy gray boxer set',
            price: 900,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: true,
            article: 'boxer',
            img: 'boy_boxers.jpg'
        },
        {
            id:4,
            name: 'Hiamok men leather belt',
            price: 392,
            discount_price: 1098,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'belt',
            img: 'belt.jpg'
        },
        {
            id:5,
            name: 'vintage print flare dress',
            price: 1720,
            discount_price: 5160,
            category: 'women',
            subcategory: '',
            sale: false,
            article: 'dress',
            img: 'vintage-flare-dress.jpg'
        },
        {
            id:6,
            name: 'capped sleeves red cotton dress',
            price: 1100,
            discount_price: 1650,
            category: 'kids',
            subcategory: 'girls',
            sale: false,
            article: 'dress',
            img: 'cotton-dress.jpg'
        },
        {
            id:7,
            name: 'gemch men casual running shoes',
            price: 3020,
            discount_price: 3580,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'shoes',
            img: 'gemch_shoes.jpg'
        },
        {
            id:8,
            name: 'Boho printed floral dress',
            price: 1999,
            discount_price: 2199,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'dress',
            img: 'floral-dress.jpg'
        },
        {
            id:9,
            name: 'Baby girl bowknot leather shoes',
            price: 493,
            discount_price: 502,
            category: 'kids',
            subcategory: 'girls',
            sale: true,
            article: 'dress',
            img: 'leather-shoes.jpg'
        },
        {
            id:10,
            name: 'men khaki trouser - navy blue',
            price: 1346,
            discount_price: 1347,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'shoes',
            img: 'gsoft-khaki.jpg'
        },
        {
            id:11,
            name: 'Women printed bodycon dress',
            price: 1554,
            discount_price: 1640,
            category: 'women',
            subcategory: '',
            sale: false,
            article: 'dress',
            img: 'bodycon-dress.jpg'
        },
        {
            id:12,
            name: 'girl princess lace dress',
            price: 1808,
            discount_price: 2350,
            category: 'kids',
            subcategory: 'girls',
            sale: false,
            article: 'dress',
            img: 'princes-dress.jpg'
        },
        {
            id:13,
            name: 'men\'s formal slim fit suit',
            price: 3627,
            discount_price: 6045,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'suit',
            img: 'slim-fit-suit.jpg'
        },
        {
            id:14,
            name: 'Women rome strappy gladiator loe flat flip',
            price: 876,
            discount_price: 987,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'sandals',
            img: 'gladiator-flat-flip.jpg'
        },
        {
            id:15,
            name: 'navy long sleeved boys t-shirt',
            price: 960,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: false,
            article: 'dress',
            img: 'boys-t-shirt.jpg'
        },
        {
            id:16,
            name: '3 piece men\'s vest - white',
            price: 899,
            discount_price: 1800,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'suit',
            img: 'vest.jpg'
        },
        {
            id:17,
            name: 'checkers faix leather wrist watch',
            price: 341,
            discount_price: 443,
            category: 'women',
            subcategory: '',
            sale: false,
            article: 'watch',
            img: 'gladiator-flat-flip.jpg'
        },
        {
            id:18,
            name: 'boys black  crew neck t-shirt',
            price: 890,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: false,
            article: 'dress',
            img: 'crew-neck-tshirt.jpg'
        },
    ]
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