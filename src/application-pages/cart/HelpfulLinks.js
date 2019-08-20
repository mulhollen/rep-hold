import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
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
        margin: 0 0 1rem 0;
    }

    a {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        color: #007479;
        text-decoration: none;
        margin: 0 0 .5rem 0;
    }
`



const HelpfulLinks = () => {

    return (
        <Container>
            <h3>helpful links</h3>
            <a href="">Shipping &amp; Returns</a>
            <a href="">Privaxy Policy</a> 
        </Container>
    );
};

export default HelpfulLinks;