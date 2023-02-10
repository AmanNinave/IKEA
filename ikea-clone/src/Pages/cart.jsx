import React from 'react'
import styles from "../Pages/cart.css"
// import myStore from '../Redux/Store'
import { BsFillCartPlusFill } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { myStore } from '../Redux/Store'


const Cart = () => {
  const cartproduct = [
    {
      "name": "FRIHETEN",
      "typeName": "Protective cover f corner so, right",
      "itemMeasureReferenceText": "",
      "mainImageUrl": "https://www.ikea.com/in/en/images/products/friheten-protective-cover-f-corner-so-right-vissle-grey__0801665_pe768268_s5.jpg",
      "pipUrl": "https://www.ikea.com/in/en/p/friheten-protective-cover-f-corner-so-right-vissle-grey-90468437/",
      "id": "90468437",
      "itemNoGlobal": "80482815",
      "onlineSellable": true,
      "lastChance": false,
      "gprDescription": {
        "numberOfVariants": 0,
        "variants": []
      },
      "colors": [
        {
          "name": "grey",
          "id": "10028",
          "hex": "949494"
        }
      ],
      "tag": "NONE",
      "quickFacts": [],
      "features": [],
      "availability": [],
      "itemNo": "90468437",
      "itemType": "ART",
      "salesPrice": {
        "currencyCode": "INR",
        "numeral": 6000.0,
        "current": {
          "prefix": "Rs.",
          "wholeNumber": "6,000",
          "separator": "",
          "decimals": "",
          "suffix": "",
          "isRegularCurrency": true
        },
        "isBreathTaking": false,
        "discount": "",
        "tag": "NONE"
      },
      "contextualImageUrl": "https://www.ikea.com/in/en/images/products/friheten-protective-cover-f-corner-so-right-vissle-grey__0801664_pe768269_s5.jpg",
      "mainImageAlt": "FRIHETEN Protective cover f corner so, right, Vissle grey",
      "businessStructure": {
        "homeFurnishingBusinessName": "Living room seating",
        "homeFurnishingBusinessNo": "01",
        "productAreaName": "Sofa beds.",
        "productAreaNo": "0113",
        "productRangeAreaName": "Sofas",
        "productRangeAreaNo": "011"
      },
      "categoryPath": [
        {
          "name": "Furniture",
          "key": "fu001"
        },
        {
          "name": "Sofas \u0026 Sofa-beds",
          "key": "fu003"
        },
        {
          "name": "Sofa-beds",
          "key": "10663"
        },
        {
          "name": "Sofa-beds",
          "key": "20874"
        }
      ],
      "heroBackoffData": {}
    },
    {
      "name": "ÄPPLARYD",
      "typeName": "4-seat sofa with chaise longue",
      "itemMeasureReferenceText": "",
      "mainImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-lejde-light-grey__1010450_pe828073_s5.jpg",
      "pipUrl": "https://www.ikea.com/in/en/p/aepplaryd-4-seat-sofa-with-chaise-longue-lejde-light-grey-s19429539/",
      "id": "s19429539",
      "itemNoGlobal": "79429522",
      "onlineSellable": true,
      "lastChance": false,
      "gprDescription": {
        "numberOfVariants": 3,
        "variants": [
          {
            "id": "s89429526",
            "pipUrl": "https://www.ikea.com/in/en/p/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-dark-blue-s89429526/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-dark-blue__1010447_pe828072_s5.jpg",
            "imageAlt": "ÄPPLARYD 4-seat sofa with chaise longue, Djuparp dark blue",
            "quickFacts": [
              {
                "type": "FIRMNESS",
                "id": "47473",
                "name": "Medium firm",
                "typeName": "Firmness"
              }
            ],
            "availability": [],
            "name": "ÄPPLARYD",
            "typeName": "4-seat sofa with chaise longue",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-dark-blue__1010447_pe828072_s5.jpg",
            "mainImageAlt": "ÄPPLARYD 4-seat sofa with chaise longue, Djuparp dark blue",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-dark-blue__1023723_pe833237_s5.jpg",
            "itemNoGlobal": "09429525",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "89429526",
            "itemType": "SPR",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 129990.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "1,29,990",
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
            "id": "s19429520",
            "pipUrl": "https://www.ikea.com/in/en/p/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-red-brown-s19429520/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-red-brown__1010448_pe828075_s5.jpg",
            "imageAlt": "ÄPPLARYD 4-seat sofa with chaise longue, Djuparp red/brown",
            "quickFacts": [
              {
                "type": "FIRMNESS",
                "id": "47473",
                "name": "Medium firm",
                "typeName": "Firmness"
              }
            ],
            "availability": [],
            "name": "ÄPPLARYD",
            "typeName": "4-seat sofa with chaise longue",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-red-brown__1010448_pe828075_s5.jpg",
            "mainImageAlt": "ÄPPLARYD 4-seat sofa with chaise longue, Djuparp red/brown",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-djuparp-red-brown__1023724_pe833240_s5.jpg",
            "itemNoGlobal": "09429525",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "19429520",
            "itemType": "SPR",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 129990.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "1,29,990",
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
            "id": "s29429534",
            "pipUrl": "https://www.ikea.com/in/en/p/aepplaryd-4-seat-sofa-with-chaise-longue-lejde-grey-black-s29429534/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-lejde-grey-black__1010449_pe828074_s5.jpg",
            "imageAlt": "ÄPPLARYD 4-seat sofa with chaise longue, Lejde grey/black",
            "quickFacts": [
              {
                "type": "FIRMNESS",
                "id": "47473",
                "name": "Medium firm",
                "typeName": "Firmness"
              }
            ],
            "availability": [],
            "name": "ÄPPLARYD",
            "typeName": "4-seat sofa with chaise longue",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-lejde-grey-black__1010449_pe828074_s5.jpg",
            "mainImageAlt": "ÄPPLARYD 4-seat sofa with chaise longue, Lejde grey/black",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-lejde-grey-black__1023725_pe833239_s5.jpg",
            "itemNoGlobal": "09429525",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "29429534",
            "itemType": "SPR",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 111990.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "1,11,990",
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
        ]
      },
      "colors": [
        {
          "name": "grey",
          "id": "10028",
          "hex": "949494"
        }
      ],
      "tag": "NONE",
      "quickFacts": [
        {
          "type": "FIRMNESS",
          "id": "47473",
          "name": "Medium firm",
          "typeName": "Firmness"
        }
      ],
      "features": [],
      "availability": [],
      "itemNo": "19429539",
      "itemType": "SPR",
      "salesPrice": {
        "currencyCode": "INR",
        "numeral": 111990.0,
        "current": {
          "prefix": "Rs.",
          "wholeNumber": "1,11,990",
          "separator": "",
          "decimals": "",
          "suffix": "",
          "isRegularCurrency": true
        },
        "isBreathTaking": false,
        "discount": "",
        "tag": "NONE"
      },
      "contextualImageUrl": "https://www.ikea.com/in/en/images/products/aepplaryd-4-seat-sofa-with-chaise-longue-lejde-light-grey__1023726_pe833238_s5.jpg",
      "mainImageAlt": "ÄPPLARYD 4-seat sofa with chaise longue, Lejde light grey",
      "businessStructure": {
        "homeFurnishingBusinessName": "Living room seating",
        "homeFurnishingBusinessNo": "01",
        "productAreaName": "Sofas",
        "productAreaNo": "0111",
        "productRangeAreaName": "Sofas",
        "productRangeAreaNo": "011"
      },
      "categoryPath": [
        {
          "name": "Furniture",
          "key": "fu001"
        },
        {
          "name": "Sofas \u0026 Sofa-beds",
          "key": "fu003"
        },
        {
          "name": "Fabric sofas",
          "key": "10661"
        },
        {
          "name": "Modular fabric sofas",
          "key": "15358"
        }
      ],
      "heroBackoffData": {}
    },
    {
      "name": "VRETSTORP",
      "typeName": "3-seat sofa-bed",
      "itemMeasureReferenceText": "",
      "mainImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-hallarp-beige__0818764_pe774597_s5.jpg",
      "pipUrl": "https://www.ikea.com/in/en/p/vretstorp-3-seat-sofa-bed-hallarp-beige-s19320110/",
      "id": "s19320110",
      "itemNoGlobal": "39320114",
      "onlineSellable": true,
      "lastChance": false,
      "gprDescription": {
        "numberOfVariants": 4,
        "variants": [
          {
            "id": "s29320119",
            "pipUrl": "https://www.ikea.com/in/en/p/vretstorp-3-seat-sofa-bed-totebo-light-beige-s29320119/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-totebo-light-beige__0818776_pe774608_s5.jpg",
            "imageAlt": "VRETSTORP 3-seat sofa-bed, Totebo light beige",
            "quickFacts": [
              {
                "type": "FIRMNESS",
                "id": "47473",
                "name": "Medium firm",
                "typeName": "Firmness"
              }
            ],
            "availability": [],
            "name": "VRETSTORP",
            "typeName": "3-seat sofa-bed",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-totebo-light-beige__0818776_pe774608_s5.jpg",
            "mainImageAlt": "VRETSTORP 3-seat sofa-bed, Totebo light beige",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-totebo-light-beige__0925104_pe788715_s5.jpg",
            "itemNoGlobal": "49320123",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "29320119",
            "itemType": "SPR",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 55790.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "55,790",
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
            "id": "s09320115",
            "pipUrl": "https://www.ikea.com/in/en/p/vretstorp-3-seat-sofa-bed-hallarp-grey-s09320115/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-hallarp-grey__0818760_pe774593_s5.jpg",
            "imageAlt": "VRETSTORP 3-seat sofa-bed, Hallarp grey",
            "quickFacts": [
              {
                "type": "FIRMNESS",
                "id": "47473",
                "name": "Medium firm",
                "typeName": "Firmness"
              }
            ],
            "availability": [],
            "name": "VRETSTORP",
            "typeName": "3-seat sofa-bed",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-hallarp-grey__0818760_pe774593_s5.jpg",
            "mainImageAlt": "VRETSTORP 3-seat sofa-bed, Hallarp grey",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-hallarp-grey__0818758_pe774592_s5.jpg",
            "itemNoGlobal": "39320128",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "09320115",
            "itemType": "SPR",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 64990.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "64,990",
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
            "id": "s99320125",
            "pipUrl": "https://www.ikea.com/in/en/p/vretstorp-3-seat-sofa-bed-remmarn-light-grey-s99320125/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-remmarn-light-grey__0818768_pe774600_s5.jpg",
            "imageAlt": "VRETSTORP 3-seat sofa-bed, Remmarn light grey",
            "quickFacts": [
              {
                "type": "FIRMNESS",
                "id": "47473",
                "name": "Medium firm",
                "typeName": "Firmness"
              }
            ],
            "availability": [],
            "name": "VRETSTORP",
            "typeName": "3-seat sofa-bed",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-remmarn-light-grey__0818768_pe774600_s5.jpg",
            "mainImageAlt": "VRETSTORP 3-seat sofa-bed, Remmarn light grey",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-remmarn-light-grey__0818766_pe774586_s5.jpg",
            "itemNoGlobal": "59320113",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "99320125",
            "itemType": "SPR",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 61990.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "61,990",
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
            "id": "s29320124",
            "pipUrl": "https://www.ikea.com/in/en/p/vretstorp-3-seat-sofa-bed-totebo-dark-turquoise-s29320124/",
            "imageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-totebo-dark-turquoise__0818772_pe774604_s5.jpg",
            "imageAlt": "VRETSTORP 3-seat sofa-bed, Totebo dark turquoise",
            "quickFacts": [
              {
                "type": "FIRMNESS",
                "id": "47473",
                "name": "Medium firm",
                "typeName": "Firmness"
              }
            ],
            "availability": [],
            "name": "VRETSTORP",
            "typeName": "3-seat sofa-bed",
            "itemMeasureReferenceText": "",
            "mainImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-totebo-dark-turquoise__0818772_pe774604_s5.jpg",
            "mainImageAlt": "VRETSTORP 3-seat sofa-bed, Totebo dark turquoise",
            "contextualImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-totebo-dark-turquoise__0818770_pe774602_s5.jpg",
            "itemNoGlobal": "59320108",
            "onlineSellable": true,
            "lastChance": false,
            "itemNo": "29320124",
            "itemType": "SPR",
            "salesPrice": {
              "currencyCode": "INR",
              "numeral": 55790.0,
              "current": {
                "prefix": "Rs.",
                "wholeNumber": "55,790",
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
        ]
      },
      "colors": [
        {
          "name": "beige",
          "id": "10003",
          "hex": "f4f3d7"
        }
      ],
      "tag": "NONE",
      "quickFacts": [
        {
          "type": "FIRMNESS",
          "id": "47473",
          "name": "Medium firm",
          "typeName": "Firmness"
        }
      ],
      "features": [],
      "availability": [],
      "itemNo": "19320110",
      "itemType": "SPR",
      "salesPrice": {
        "currencyCode": "INR",
        "numeral": 64990.0,
        "current": {
          "prefix": "Rs.",
          "wholeNumber": "64,990",
          "separator": "",
          "decimals": "",
          "suffix": "",
          "isRegularCurrency": true
        },
        "isBreathTaking": false,
        "discount": "",
        "tag": "NONE"
      },
      "contextualImageUrl": "https://www.ikea.com/in/en/images/products/vretstorp-3-seat-sofa-bed-hallarp-beige__0818761_pe774594_s5.jpg",
      "mainImageAlt": "VRETSTORP 3-seat sofa-bed, Hallarp beige",
      "businessStructure": {
        "homeFurnishingBusinessName": "Living room seating",
        "homeFurnishingBusinessNo": "01",
        "productAreaName": "Sofa beds.",
        "productAreaNo": "0113",
        "productRangeAreaName": "Sofas",
        "productRangeAreaNo": "011"
      },
      "categoryPath": [
        {
          "name": "Furniture",
          "key": "fu001"
        },
        {
          "name": "Sofas \u0026 Sofa-beds",
          "key": "fu003"
        },
        {
          "name": "Fabric sofas",
          "key": "10661"
        },
        {
          "name": "Three-seat sofas",
          "key": "10670"
        }
      ],
      "heroBackoffData": {}
    }
  ]
  //  const{dispatch, getState}=myStore;
  const cartdata = useSelector((store) => {
    return store.cartReducer
  })
  console.log(cartproduct)
  return (
    <div>
      <div className="cart-container">
        <div className='cart-container-inner'>
          <div className='cartheading'>
            <h1>Shopping bag</h1>
            <h2>...</h2>
          </div>

          <div className="cartdiv">
            {
              cartproduct.length > 0 &&
              cartproduct.map((ele) => {
                return (
                  <div className="cartdivmain">
                    <div className="cartimg">
                      <img src={ele.contextualImageUrl} alt="" />
                      <span>{ele.id}</span>
                    </div>
                    <div className="cartdetails">
                      <div className='cartdetailsinner'>
                        <h4>{ele.name}</h4>
                        <p>{ele.typeName}</p>
                        <div>
                        {ele.colors.length>0 && 
                        ele.colors.map((c)=>{
                            return(
                              c.name
                              )
                        })
                        }
                        </div>
                      </div>
                      <h5>{ele.salesPrice.current.prefix} {ele.salesPrice.numeral}</h5>
                      <div className='cartproduct'>
                       <button onClick={()=>increment(id)}>+</button>
                       <button>{qty}</button>
                       <button>-</button>
                        <button>Remove product</button>
                        <button>Save for later</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="order-summary">
          <div>Order summary</div>
          <div className='cartdelivery'>
            <span>Total delivery cost</span>
            <span>This subtotal doesn’t include the delivery cost</span>
          </div>
          <div className='carthr'></div>
          <div className='cartotal'>
            <span>Subtotal</span>
            <h2>Rs.13,990.00</h2>
          </div>
          <div className="deliveryEstimate">
            Delivery estimates will be available on the next page.
          </div>
          <div className="viewdelivery">
            <button> delivery and pickup options <span></span></button>
          </div>
          <div className="cartreturnpolicy">
            <span><i className=""></i></span>
            <a href="">Our Return Policy</a>
          </div>
          <div className="cartreturnpolicy">
            <span><i className=""></i></span>
            <a href="">Secure shopping with SSL data encryption</a>
          </div>
        </div>
      </div>
      <div className="bagempty">
        {
          
        }
      <div className="cartempty">
        <div class="cartemptyinner">
          <h2>Your bag is empty</h2>
          <button type="button" class="" aria-label="Open context menu for shopping bag" data-testid="context_menu">...</button>
        </div>
      </div>
      <div className="cartemptygo">
        <div class="cartemptyinnergo">
          <div>
            <h2>Have an account?</h2>
            <span><a href="">Join or log in</a>for a smoother checkout</span>
          </div>
          <span><i className=""></i></span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
