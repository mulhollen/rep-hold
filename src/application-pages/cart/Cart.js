import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

//
import CartItems from './cart-item';
import CartTotalBoxes from './CartTotalBoxes';
import HelpfulLinks from './HelpfulLinks';

const Container = styled.div`

    background-color: #f0f0f0;
    height:100%;
    padding: 2px 0 40px 0;

 

    h1 {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 24px;
        font-weight: bold;
        line-height: 1;
        color: #2f2f2f;
        width: 940px;
        margin: 1rem auto 1.25rem;
    }

    .classTotal {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background-color: #fff;
        width: 100%;
        padding: 1rem 0;

        h3 {
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 32px;
            font-weight: bold;
            line-height: 0.81;
            margin: 0 0 0 1rem;

            :first-of-type {
                color: #2f2f2f;
                margin-right: 6px;
            }

            :last-of-type {
                color: #007479;
            }
        }
    }

    .pageContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 768px) {
            flex-direction: row;
            align-items: flex-start;

        }
    }
`

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const CartInfo = styled.div`
    width: 288px;

    @media (min-width: 768px) {
        margin-left: 1.25rem;
        width: 300px;
    }
`


var cartTotal = "$1,243.98"

const Cart = () => {

    return (
        <Container>
            <MediaQuery maxDeviceWidth={999}>
                <div className="classTotal">
                    <h3>cart total:</h3>
                    <h3>{cartTotal}</h3>
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={1000}>
                <h1>my cart</h1>
            </MediaQuery>
            <div className="pageContent">
                <Items>
                    <CartItems />
                </Items>
                <CartInfo>
                    <CartTotalBoxes view={"cart"} />
                    <HelpfulLinks />
                </CartInfo>
            </div>
        </Container>
    );
};

export default Cart;