import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const Item = styled.div`
    width: 288px;
    height: 96px;
    border-radius: 2px;
    background-color: #fff;
    margin: 12px auto;

    @media (min-width: 1000px) {
        width: 620px;
        height: 160px;
        border-radius: 2px;
        margin: 1rem auto;
    }

    .upperCart {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: .5rem;
        
        @media (min-width: 1000px) {
            justify-content: flex-start;
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 2px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            object-fit: contain;
            
            @media (min-width: 1000px) {
                margin: 1rem 0 1.37rem 1.5rem
            }
        }

        h3 {
            align-self: flex-start;
            font-size: 18px;
            font-weight: 600;
            line-height: 1.11;
            color: #2f2f2f;
            margin: 0 0 .75rem 0;
        }

        > div {
            width: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: .75rem;

            @media (min-width: 1000px) {
                width: 100%;
                flex-direction: row;
                justify-content: space-between;
                margin-left: 2.25rem;
                margin-right: 1rem;
                position: relative;
                top: -2rem;
            }
        }

        > div > div {
            width: 100%;
            display: flex;
            justify-content: space-between;

            @media (min-width: 1000px) {
                width: unset;
            }
        }

        // more info button
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: none;
            
            @media (min-width: 1000px) {
                display: none;
            }
        }

        p {
            font-size: 16px;
            font-weight: 600;
            line-height: 1;
            color: #2f2f2f;
            margin: 0;
        }

        button p {
            font-size: 12px;
            font-weight: 600;
            color: #007479; 
            margin-right: .25rem;
        }
    
        button svg {
            width: 14px;
            height: 14px;
            object-fit: contain;
        }

    }

    .lowerCart {
        display: none;
        flex-direction: column;

        @media (min-width: 1000px) {
            display: flex;
            position: relative;
            top: -5.125rem;
        }

        // itemFeatures group
        > div:first-of-type {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            margin: 6px auto 3px;

            @media (min-width: 1000px) {
                margin: 0 13.75rem .5rem 8.75rem;
            }

            // itemFeatures individual
            > div {
                width: 88px;
                margin: .25rem .5rem;
            }

            h5 {
                font-size: 10px;
                font-weight: 600;
                color: #007479;
                margin: 0;
            }

            p {
                font-size: 12px;
                line-height: 1;
                color: #000000;
                margin: 0;
            }
        }

        // edit panel
        .itemQtyUpdate {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: solid 1px #f0f0f0;
            padding: .5rem .75rem;

            button:first-of-type {
                width: 50px;
                height: 24px;
                border-radius: 2px;
                border: solid 1px #007479;
                background-color: #007479;
                display: flex;
                justify-content: center;
                align-items: center;

                color: #fff;
                font-size: 16px;
                font-weight: 600;
                line-height: 1;
            }

            button:first-of-type:hover {
                background-color: #fff;
                color: #007479;
            }

            button:last-of-type {
                width: 24px;
                height: 24px;
                object-fit: contain;
                margin-left: 2.25rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background: none;
                border: none;
                padding: 0;

                @media (min-width: 1000px) {
                    margin-left: 3.75rem;
                    width: 69px;
                }

                p {
                    font-size: 10px;
                    font-weight: 600;
                    color: #007479;
                }
            }

            // qty update div
            > div {
                display: flex;
                font-size: 16px;
                font-weight: 600;
                color: #007479;

                p {
                    margin: 0;
                }

                .itemSubtract {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    width: 32px;
                    height: 24px;
                    border-radius: 2px;
                    border: solid 1px #007479;
                    margin-right: .5rem;
                }

                .itemQty {
                    width: 32px;
                    height: 24px;
                    border-radius: 2px 0 0 2px;
                    border: solid 1px #007479;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    right: -1px;
                }

                .itemQty__inverted {
                    background-color: #007479;
                    color: #fff;
                    border-right: 1px solid #fff;
                }

                .itemAdd {
                    width: 56px;
                    height: 24px;
                    border-radius: 0 2px 2px 0;
                    border: solid 1px #007479;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .itemAdd__inverted {
                    width: 32px;
                    background-color: #007479;
                    color: #fff;
                }
            }
        }
    }
`

class CartItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    itemImg: "https://i.pinimg.com/originals/e6/ea/44/e6ea443b8249d0fdaaba7af2d5f1850d.png",
                    itemName: "Acrylic Print: 3 x 8 in",
                    itemPrice: "$14.99",
                    itemFeatures:{
                        Finish: "Brush Metal",
                        Mount: "Command Strips",
                        SKU: "AK23432",
                        Orientation: "Landscape"
                    },
                    itemQty: "2"
                },
                {
                    itemImg: "https://cdn.dicionariopopular.com/imagens/meme-do-pikachu-surpreso-og.jpg",
                    itemName: "Metal Print: 8 x 10 in",
                    itemPrice: "$79.99",
                    itemFeatures:{
                        Finish: "Crystal Acrylic",
                        Mount: "Stand Offs",
                        SKU: "KHJK324234",
                        Orientation: "Landscape"
                    },
                    itemQty: "1"
                }
            ]
        }
    }

    hideShowLower(id) {
        
        const item = document.getElementById("item"+id);
        const upper = document.getElementById(id+"upper");
        const lower = document.getElementById(id+"lower");

        if (lower.style.display === "flex") {
            lower.style.display = "none"
            upper.childNodes[1].style.transform = "rotate(0deg)"
            upper.childNodes[0].innerHTML = "more info"
            item.style.height = "96px"
        } else {
            lower.style.display = "flex"
            upper.childNodes[1].style.transform = "rotate(180deg)"
            upper.childNodes[0].innerHTML = "less info"
            item.style.height = "194px"
        }


    }

    render() {
    
        const iteratedCartProducts = this.state.items.map((item, key) => 
            <Item id={"item"+key}>
                <div className="upperCart">
                    <img src={item.itemImg} alt="product image" />
                    <div>
                        <h3>{item.itemName}</h3>
                        <div>
                            <p>{item.itemPrice}</p>
                            <button id={key+"upper"} onClick={() => this.hideShowLower(key)}>
                                <p>more info</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                                    <path fill="#007479" fill-rule="evenodd" d="M7.437.291A.755.755 0 0 0 6.38.284L3.81 2.85 1.237.284A.75.75 0 0 0 .18.291L.291.18A.754.754 0 0 0 .29 1.24l2.814 2.815a1 1 0 0 0 1.41 0L7.329 1.24A.752.752 0 0 0 7.326.18l.111.111z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lowerCart" id={key+"lower"}>
                    <div>
                        <div>
                            <h5>Finish</h5>
                            <p>{item.itemFeatures.Finish}</p>
                        </div>
                        <div>
                            <h5>Mount</h5>
                            <p>{item.itemFeatures.Mount}</p>
                        </div>
                        <div>
                            <h5>SKU</h5>
                            <p>{item.itemFeatures.SKU}</p>
                        </div>
                        <div>
                            <h5>Orientation</h5>
                            <p>{item.itemFeatures.Orientation}</p>
                        </div>
                    </div>
                    <div className="itemQtyUpdate">
                        <div>
                            <button>Edit</button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M0 0h24v24H0z"/>
                                        <path fill="#CCD8D4" fill-rule="nonzero" d="M16 19H8V9h8v10zm2-12H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7zm0-3h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/>
                                    </g>
                                </svg>
                                <MediaQuery minDeviceWidth={1000}>
                                    <p>Remove</p>
                                </MediaQuery>
                            </button>
                        </div>
                        {item.itemQty > 1
                        ?
                        <div>
                            <div className="itemSubtract"><p>-</p></div>
                            <div className="itemQty itemQty__inverted">{item.itemQty}</div>
                            <div className="itemAdd itemAdd__inverted"><p>+</p></div>
                        </div>
                        :
                        <div>
                            <div className="itemQty">{item.itemQty}</div>
                            <div className="itemAdd"><p>+ add</p></div>
                        </div>
                        }
                    </div>
                </div>
            </Item>
        );

        return (
            <div>
                {iteratedCartProducts}
            </div>
        );
    }
};

export default CartItems;