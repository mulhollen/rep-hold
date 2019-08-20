import React from 'react';
import styled from 'styled-components'




const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;


    button {
        padding:0px;
        text-decoration:none;
        background-color: white;
        border:none;
    }
    img {
        padding:0px;
    }


`

const MobileMenu = (props) => {
    return (
        !props.open
            ?
            <Container>
                <button onClick={props.onClick}>
                    <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/ic-nav.png" alt="Hamburger" width="24px" height="24px" />
                </button>
            </Container>
            :
            <Container>
                <button onClick={props.onClick} >
                    <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/ic-close-nav.png" alt="ex" width="24px" height="24px" />
                </button>
            </Container>
    );
};



export default MobileMenu;
