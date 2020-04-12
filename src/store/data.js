let data = {
    cart: [],
    wishlist: [],
    vat: 16, //vat in percentage
    cartTotal: 0,
    orderSuccess: false,
    promoCode: [
        {
            code: 'TENPERCENT',
            percentage: 10
        },
        {
            code: 'FIVEPERCENT',
            percentage: 5
        }
    ],
    usedPromoCode: null,
    deliveryOptions: [
        {
            id: 1,
            name: 'standard',
            duration: '24 - 72 hours',
            cost: 300
        },
        {
            id: 2,
            name: 'fastest',
            duration: '1 - 24 hours',
            cost: 1000
        }
    ],
    productMaxShowModal: false,
    modalMessage: null,
    showSideNavigation: false,
    // used currency should load with the default currency name and rate
    usedCurrency: { "KES": 1, "symbol": "Ksh " },
    // exchange rates can be got from any api source
    exchangeRates: {
        "base": "KES",
        "date": "2019-01-29",
        "rates": {
            "KES": 1,
            "USD": 0.0099,
            "GBP": 0.0075,
            "EUR": 0.0087,
            "TZS": 22.92,
            "UGX": 36.33,
            "NGN": 3.59,
            "INR": 0.71
        }
    },
    // overkill but doing it for fun
    currencySymbols: {
        "KES": 'Ksh ',
        "USD": '$',
        "GBP": '£',
        "EUR": '€',
        "TZS": 'TSh ',
        "UGX": 'USh ',
        "NGN": '₦',
        "INR": '₹'
    },
    products: [
        {
            id: 1,
            name: 'men\'s analog quartz watch',
            slug: 'mens-analog-quartz-watch-547383',
            price: 500,
            discount_price: 2800,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'watch',
            quantity: 5,
            img: 'analog-quartz-watch.jpg',
            options: [1,2,3],
            fulfilled_by_duka: true,
            shipped_from_abroad: false,
            duka_approved: true,
            vendor: {
                id: 1,
                name: 'duka'
            }
        },
        {
            id: 2,
            name: 'singedani four set handbag',
            slug: 'singedani-four-set-handbag-647483',
            price: 1160,
            discount_price: 2320,
            category: 'women',
            subcategory: '',
            sale: false,
            article: 'handbag',
            quantity: 8,
            img: 'singedani-handbag.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: true,
            duka_approved: false,
            vendor: {
                id: 2,
                name: 'vendor two'
            }
        },
        {
            id: 3,
            name: 'Boys gray boxer set',
            slug: 'boys-gray-boxer-set-546488',
            price: 900,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: true,
            article: 'boxer',
            quantity: 3,
            img: 'boy_boxers.jpg',
            options: [2],
            fulfilled_by_duka: false,
            shipped_from_abroad: false,
            duka_approved: true,
            vendor: {
                id: 3,
                name: 'vendor three'
            }
        },
        {
            id: 4,
            name: 'Hiamok men leather belt',
            slug: 'hiamok-men-leather-belt-238192',
            price: 392,
            discount_price: 1098,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'belt',
            quantity: 10,
            img: 'belt.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: true,
            duka_approved: false,
            vendor: {
                id: 4,
                name: 'vendor four'
            }
        },
        {
            id: 5,
            name: 'vintage print flare dress',
            name: 'vintage-print-flare-dress-987426',
            price: 1720,
            discount_price: 5160,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'dress',
            quantity: 0,
            img: 'vintage-flare-dress.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: false,
            duka_approved: true,
            vendor: {
                id: 5,
                name: 'vendor five'
            }
        },
        {
            id: 6,
            name: 'capped sleeves red cotton dress',
            slug: 'capped-sleeves-red-cotton-dress-349824',
            price: 1100,
            discount_price: 1650,
            category: 'kids',
            subcategory: 'girls',
            sale: true,
            article: 'dress',
            quantity: 2,
            img: 'cotton-dress.jpg',
            options: [],
            fulfilled_by_duka: true,
            shipped_from_abroad: true,
            duka_approved: true,
            vendor: {
                id: 1,
                name: 'duka'
            }
        },
        {
            id: 7,
            name: 'gemch men casual running shoes',
            slug: 'gemch-men-casual-running-shoes-459123',
            price: 3020,
            discount_price: 3580,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'shoes',
            quantity: 6,
            img: 'gemch_shoes.jpg',
            options: [],
            fulfilled_by_duka: true,
            shipped_from_abroad: true,
            duka_approved: true,
            vendor: {
                id: 2,
                name: 'vendor one'
            }
        },
        {
            id: 8,
            name: 'Boho printed floral dress',
            slug: 'boho-printed-floral-dress-656623',
            price: 1999,
            discount_price: 2199,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'dress',
            quantity: 10,
            img: 'floral-dress.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: false,
            duka_approved: false,
            vendor: {
                id: 3,
                name: 'vendor three'
            }
        },
        {
            id: 9,
            name: 'Baby girl bowknot leather shoes',
            slug: 'baby-girl-bowknot-leather-shoes-312947',
            price: 493,
            discount_price: 502,
            category: 'kids',
            subcategory: 'girls',
            sale: false,
            article: 'dress',
            quantity: 9,
            img: 'leather-shoes.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: true,
            duka_approved: false,
            vendor: {
                id: 4,
                name: 'vendor four'
            }
        },
        {
            id: 10,
            name: 'men khaki trouser - navy blue',
            slug: 'men-khaki-trouser-navy-blue-537329',
            price: 1346,
            discount_price: 1347,
            category: 'men',
            subcategory: '',
            sale: false,
            article: 'shoes',
            quantity: 0,
            img: 'gsoft-khaki.jpg',
            options: [],
            fulfilled_by_duka: true,
            shipped_from_abroad: true,
            duka_approved: false,
            vendor: {
                id: 5,
                name: 'vendor five'
            }
        },
        {
            id: 11,
            name: 'Women printed bodycon dress',
            slug: 'women-printed-bodycon-dress-439618',
            price: 1554,
            discount_price: 1640,
            category: 'women',
            subcategory: '',
            sale: false,
            article: 'dress',
            quantity: 7,
            img: 'bodycon-dress.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: false,
            duka_approved: true,
            vendor: {
                id: 1,
                name: 'duka'
            }
        },
        {
            id: 12,
            name: 'girl princess lace dress',
            slug: 'girl-princess-lace-dress-123567',
            price: 1808,
            discount_price: 2350,
            category: 'kids',
            subcategory: 'girls',
            sale: true,
            article: 'dress',
            quantity: 4,
            img: 'princes-dress.jpg',
            options: [],
            fulfilled_by_duka: true,
            shipped_from_abroad: true,
            duka_approved: false,
            vendor: {
                id: 2,
                name: 'vendor one'
            }
        },
        {
            id: 13,
            name: 'men\'s formal slim fit suit',
            slug: 'mens-formal-slim-fit-suit-345987',
            price: 3627,
            discount_price: 6045,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'suit',
            quantity: 3,
            img: 'slim-fit-suit.jpg',
            options: [],
            fulfilled_by_duka: true,
            shipped_from_abroad: false,
            duka_approved: false,
            vendor: {
                id: 3,
                name: 'vendor three'
            }
        },
        {
            id: 14,
            name: 'Women\'s rome strappy gladiator loe flat flip',
            slug: 'womens-rome-strappy-gladiator-loe-flat-flip-230978',
            price: 876,
            discount_price: 987,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'sandals',
            quantity: 2,
            img: 'gladiator-flat-flip.jpg',
            options: [],
            fulfilled_by_duka: true,
            shipped_from_abroad: false,
            duka_approved: true,
            vendor: {
                id: 4,
                name: 'vendor four'
            }
        },
        {
            id: 15,
            name: 'navy long sleeved boys t-shirt',
            slug: 'navy-long-sleeved-boys-tshirt-786534',
            price: 960,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: false,
            article: 'dress',
            quantity: 0,
            img: 'boys-t-shirt.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: true,
            duka_approved: false,
            vendor: {
                id: 5,
                name: 'vendor five'
            }
        },
        {
            id: 16,
            name: '3 piece men\'s vest - white',
            slug: '3-piece-mens-vest-white-891267',
            price: 899,
            discount_price: 1800,
            category: 'men',
            subcategory: '',
            sale: true,
            article: 'suit',
            quantity: 8,
            img: 'vest.jpg',
            options: [],
            fulfilled_by_duka: true,
            shipped_from_abroad: true,
            duka_approved: false,
            vendor: {
                id: 1,
                name: 'duka'
            }
        },
        {
            id: 17,
            name: 'checkers faix leather wrist watch',
            slug: 'checkers-faix-leather-wrist-watch-120934',
            price: 341,
            discount_price: 443,
            category: 'women',
            subcategory: '',
            sale: true,
            article: 'watch',
            quantity: 4,
            img: 'quartz-wrist-watch.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: true,
            duka_approved: true,
            vendor: {
                id: 2,
                name: 'vendor two'
            }
        },
        {
            id: 18,
            name: 'boys black crew neck t-shirt',
            slug: 'boys-black-crew-neck-tshirt-784301',
            price: 890,
            discount_price: 1200,
            category: 'kids',
            subcategory: 'boys',
            sale: true,
            article: 'dress',
            quantity: 7,
            img: 'crew-neck-tshirt.jpg',
            options: [],
            fulfilled_by_duka: false,
            shipped_from_abroad: false,
            duka_approved: false,
            vendor: {
                id: 3,
                name: 'vendor three'
            }
        },
    ]
};

export default data;