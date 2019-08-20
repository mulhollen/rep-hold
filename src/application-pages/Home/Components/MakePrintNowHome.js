import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background: #fcb61a;
    display: flex;
    flex-direction: column;
    padding: 2.25rem 0;

    h4 {
        font-size: 24px;
        font-weight: bold;
        line-height: 1;
        text-align: center;
        color: #2f2f2f;
        margin: 0 auto;
        
        @media(min-width: 768px) {
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 42px;
            font-weight: bold;
            line-height: 0.86;
            text-align: center;
            color: #302e2f;
        }
    }

    a {
        width: 248px;
        height: 40px;
        margin: 1.5rem auto 0;
        border: 1px solid #2f2f2f;
        border-radius: 2px;
        background: #2f2f2f;
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        color: #ffffff;
    }

        a:hover {
            background: #fff;
            color: #2f2f2f;
        }   
`

const MakePrintNowHome = () => {


    return (
        <Container>
            <h4>your walls will thank you</h4>
            <a href="" >MAKE A PRINT NOW</a>
        </Container>
    );
};

export default MakePrintNowHome;
