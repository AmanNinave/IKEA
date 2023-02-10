import * as actionTypes from "../Action/cartActiontypes"

const cartinitialData = {
    products: [
        {
            "id": "80473255",
            "pipUrl": "https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-blue-80473255/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-blue__0868912_pe781422_s5.jpg",
            "imageAlt": "GAMMALBYN 3-seat sofa, blue",
            "quickFacts": [],
            "availability": [],
            "name": "GAMMALBYN",
            "typeName": "3-seat sofa",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-blue__0868912_pe781422_s5.jpg",
            "mainImageAlt": "GAMMALBYN 3-seat sofa, blue",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-blue__0891063_pe782234_s5.jpg",
            "itemNoGlobal": "20544091",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "80473255",
            "itemType": "ART",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 20990.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "20,990",
                "separator": "",
                "decimals": "",
                "suffix": "",
                "isRegularCurrency": true
              },
              "isBreathTaking": false,
              "discount": "",
              "tag": "NONE"
            }
          },
          {
            "id": "70473265",
            "pipUrl": "https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-red-70473265/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-red__0868918_pe781428_s5.jpg",
            "imageAlt": "GAMMALBYN 3-seat sofa, red",
            "quickFacts": [],
            "availability": [],
            "name": "GAMMALBYN",
            "typeName": "3-seat sofa",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-red__0868918_pe781428_s5.jpg",
            "mainImageAlt": "GAMMALBYN 3-seat sofa, red",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-red__0868919_pe781429_s5.jpg",
            "itemNoGlobal": "60544094",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "70473265",
            "itemType": "ART",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 20990.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "20,990",
                "separator": "",
                "decimals": "",
                "suffix": "",
                "isRegularCurrency": true
              },
              "isBreathTaking": false,
              "discount": "",
              "tag": "NONE"
            }
          }
        ],
    cart: [],
    currentItem: null
}
const cartReducer = (state = cartinitialData, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const inCart=state.cart.find((item)=>item.id===action.payload.id ? true:false)
            return {
            cart: inCart ? state.cart.map(item=> item.id===action.payload.id ?{...item,qty:item.qty+1}:item):[...state.cart,{item, qty:1}],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {

            }
        case actionTypes.ADJUST_QTY:
            return {

            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {

        }
        default:
            return state
    }
}

export default cartReducer