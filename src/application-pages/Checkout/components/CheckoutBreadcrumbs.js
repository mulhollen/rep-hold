import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
//



const Container = styled.div`
    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        height: 36px;
        border-radius: 2px;
        background-color: #fff;
        padding: 11px 1rem;
    }


    .active {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 14px;
        font-weight: bold;
        line-height: 0.93;
        text-align: center;
        color: #007479;
        text-decoration: none;
    }

    .disabled {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 14px;
        line-height: 0.93;
        text-align: center;
        color: #ccd8d4;
        text-decoration: none;
        pointer-events: none;
    }
   
    hr {
        width: 25px;
        height: 0.5px;
        opacity: 0.3;
    }
`

const CheckoutBreadcrumbs = (props) => {

    return (
        <Container>
            {props.crumbLocation === "payment"
            ?
            <div>
                <a href="/CheckoutShipping" className="active">Shipping</a>
                <hr></hr>
                <a href="/CheckoutBilling" className="active">Payment</a>
                <hr></hr>            
                <a href="/CheckoutReview" className="disabled">Review</a>
            </div>
            : props.crumbLocation === "review"
            ?
            <div>
                <a href="/CheckoutShipping" className="active">Shipping</a>
                <hr></hr>
                <a href="/CheckoutBilling" className="active">Payment</a>
                <hr></hr>            
                <a href="/CheckoutReview" className="active">Review</a>
            </div>
            :
            <div>
                <a href="/CheckoutShipping" className="active">Shipping</a>
                <hr></hr>
                <a href="/CheckoutBilling" className="disabled">Payment</a>
                <hr></hr>            
                <a href="/CheckoutReview" className="disabled">Review</a>
            </div>
            }
        </Container>
    );
};

export default CheckoutBreadcrumbs;