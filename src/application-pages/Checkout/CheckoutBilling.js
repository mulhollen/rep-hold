import React, {useState} from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
//

import PaymentMethod from './components/PaymentMethod';
import CheckoutBreadcrumbs from './components/CheckoutBreadcrumbs';
import CartTotalBoxes from '../cart/CartTotalBoxes';
import HelpfulLinks from '../cart/HelpfulLinks';


const Container = styled.div`
    background: #f0f0f0;
    display: flex;
    justify-content: center;

    .fullDiv {
        width: 616px;
        display: flex;
        flex-direction: column;


        h1 {
            padding: 1rem 0;
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 24px;
            font-weight: bold;
            color: #2f2f2f;
            text-align: left;
            margin: 0;
        }

        > div {
            border-radius: 2px;
            background-color: #fff;
            display: flex;
            justify-content: czenter;
            align-items: center;
            margin-bottom: 2.25rem;
        }

    }
`

const ConstantBoxes = styled.div`
    width: 300px;
    margin: 4rem 0 0 1.5rem;

    > * {
        margin-bottom: 1rem;
    }
`



const CheckoutBilling = () => {

    const [location, setLocation] = useState("shipping address");

    function updateContent(passedProgress) {
        // location = passedProgress
        setLocation(passedProgress)
    }
    

    return (
        <Container>
            <div className="fullDiv">
                <h1>payment method</h1>
                <PaymentMethod />
            </div>
            <ConstantBoxes>
                <CheckoutBreadcrumbs crumbLocation="payment" />
                <CartTotalBoxes view={"checkout"} />
                <HelpfulLinks />
            </ConstantBoxes>
        </Container>
    );
};

export default CheckoutBilling;