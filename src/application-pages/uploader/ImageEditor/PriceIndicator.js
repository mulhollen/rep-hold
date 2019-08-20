import React from 'react';
import styled from 'styled-components'


const Container = styled.div`

    .img-container {
        height: 225px;
        width: 288px;

    }
    img {
        height: 225px;
        width: 288px;
    }

    .size {
        font-family: ProximaNova;
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.83;
        letter-spacing: normal;
        text-align: center;
        color: #2f2f2f;
        margin: 12px 0 8px 0;
    }

    .price{
        font-family: ProximaNova;
        font-size: 16px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
    }
`

const PriceIndicator = (props) => {
    return (
        <Container>
            <div className="img-container">
                <img src={`http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-${props.size}.png`} alt="demonstration-picture" />
            </div>
            <div>
                <div className="size">
                    {props.size} in
                </div>
                <div className="price">
                    {props.price}
                </div>
            </div>

        </Container>
    );
};

export default PriceIndicator;
