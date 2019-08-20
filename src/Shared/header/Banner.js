import React from 'react';
import styled from 'styled-components'



const Container = styled.div `
    width: 100vw;
    height: 32px;

    display:flex;
    justify-content:center;
    align-items:center;
    
    background-color: #2f2f2f;
    color: white;
    font-family: ProximaNova;
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    
`

const Banner = props => {
    return (
        !props.open
        ?
        <Container> 
            {props.promo}
        </Container>
        :
        <div></div>
    );
};

export default Banner;  