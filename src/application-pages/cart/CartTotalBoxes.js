import React from 'react';
import SignIn from '../../Shared/header/SignIn'
import MediaQuery from 'react-responsive';
//
// https://material-ui.com/api/modal/
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';



const Container = styled.div`

`

const Totals = styled.div`
    margin: 1rem auto;
    height: 224px;
    border-radius: 2px;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h5 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 0.89;
        color: #2f2f2f;
    }

    h6 {
        margin: 0;
        font-size: 18px;
        line-height: 0.89;
        color: #2f2f2f;
        font-weight: normal;
    }    

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    > div:nth-of-type(2) {
        margin-bottom: 1rem;

        > div {
            display: flex;
            align-items: flex-end;
    
            p {
                margin: 0 0 0 .2rem;
                font-size: 10px;
                font-weight: 600;
                color: #007479;
              }
            }
        }
    }

    > div:nth-of-type(3) {
        margin-bottom: .75rem;
    }

    > div:last-of-type {
        border-top: 1px solid #ccd8d4;
        padding-top: .75rem;
        margin: 0;
    }

    button {
        width: 248px;
        height: 40px;
        border-radius: 2px;
        background-color: #007479; 
        border: 1px solid #007479;
        margin: 1.5rem auto 0;
        
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        
        @media (min-width: 768px) {
            margin: 1.5rem .5rem 0 .75rem;
        }
        
        svg {
            width: 24px;
            height: 24px;
            object-fit: contain;
        }

        p {
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            text-decoration: none;
            margin: 0;
        }
    }

    button:hover {
        background-color: #fff;

        svg g path:last-of-type {
            fill: #007479;
        }

        p {
            color: #007479;
        }
    }

    .disabledButton {
        opacity: 0.4;
        pointer-events: none;
    }
`

const DiscountBox = styled.div`
    height: 108px;
    border-radius: 2px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 1rem;

    h3 {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 24px;
        font-weight: bold;
        line-height: 1;
        color: #2f2f2f;
        margin-bottom: .5rem;
    }

    div {
        padding-bottom: 2px;
        border-bottom: solid 1px #ccd8d4;
        display: flex;
        justify-content: space-between;

        input {
            width: 208px;
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
            color: #2f2f2f;
            border: none;
            padding: 0;
        }

        input:focus {
            outline: 0;
        }

        input::placeholder {
            color: #2f2f2f;
        }

        button {
            width: 52px;
            height: 24px;
            border-radius: 2px;
            background-color: #007479;
            border: 1px solid #007479;
            padding: 0;

            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: #fff;
          }
          }
        }
    }

    p {
        font-size: 10px;
        font-weight: 600;
        color: #007479;
    }
`

const ShippingEst = styled.div`
    height: 108px;
    border-radius: 2px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 1rem;

    h3 {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 24px;
        font-weight: bold;
        line-height: 1;
        color: #2f2f2f;
        margin: 0 0 .5rem 0;
    }

    p {
        font-size: 10px;
        font-weight: 600;
        color: #007479;
        margin: 0 0 .25rem 0;
    }

    div {
        padding-bottom: 2px;
        border-bottom: solid 1px #ccd8d4;
        display: flex;
        justify-content: space-between;

        input {
            width: 100%;
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
            color: #2f2f2f;
            border: none;
            padding: 0;
        }

        input:focus {
            outline: 0;
        }

        input::placeholder {
            color: #2f2f2f;
        }
`

const ModalSignIn = styled.div`
    width: 644px;
    height: 400px;
    border-radius: 1px;
    position: absolute;
    top: 20%;
    left: 18%;
`



var subtotal = 226.99
var shipping = 0.00
var salesTax = 0.00
var total = subtotal + shipping + salesTax


const CartTotalBoxes = (props) => {

   
    const [open, setOpen] = React.useState(false);

    const handleOpen = (page) => {
        page === "cart"
        ?
        setOpen(true)
        :
        console.log("checkout page place order")
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    return (
        <Container>
            <Modal
                open={open}
                onClose={handleClose}
            >   
                <ModalSignIn>
                    <SignIn modal={true} />
                </ModalSignIn>
            </Modal>
        
            <Totals>
                <div>
                    <h5>Subtotal:</h5>
                    <h5>${subtotal}</h5>
                </div>
                <div>
                    <div>
                        <h6>Shipping</h6>
                        <p>starting from</p>
                    </div>
                    {salesTax === 0
                    ?
                    <h6>calculate below</h6>
                    :
                    <h6>{salesTax}</h6>
                    }
                </div>
                <div>
                    <h6>Sales Tax</h6>
                    <h6>${salesTax}</h6>
                </div>
                <div>
                    <h5>Total:</h5>
                    <h5>${total}</h5>
                </div>
                {/* is the user authed?  */}
                {props.view === "cart"
                ?
                <button onClick={() => handleOpen(props.view)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"/>
                            <path d="M0 0h24v24H0z" opacity=".87"/>
                            <path fill="#FFF" fill-rule="nonzero" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                        </g>
                    </svg>
                    <p>BEGIN SECURE CHECKOUT</p>
                </button>
                :
                <button className="disabledButton" onClick={() => handleOpen(props.view)}>
                <p>PLACE ORDER</p>
            </button>
                }
            </Totals>
            {props.view === "cart"
            ?
            <DiscountBox>
                <h3>coupon/promo code</h3>
                <div>
                    <input type="text" id="couponPromoCode" placeholder="enter code here"></input>
                    <button id="couponPromoCode__button">APPLY</button>
                </div>
                <p>NOTE: Coupon &amp; Promo Codes can not be combined</p>
            </DiscountBox>
            :
            <></>
            }
            {props.view === "cart"
            ?
            <ShippingEst>
                <h3>estimate shipping</h3>
                <p>NOTE: Coupon &amp; Promo Codes can not be combined</p>
                <div>
                    <input type="text" id="zipCode" placeholder="enter zip code"></input>
                </div>
            </ShippingEst>
            :
            <></>
            }
        </Container>
    );
};

export default CartTotalBoxes;