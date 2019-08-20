import React from 'react';
import styled from 'styled-components';
import PriceIndicator from './ImageEditor/PriceIndicator';
import SizeSelector from './ImageEditor/SizeSelector';
import ImageUploader from './ImageEditor/ImageUploader';




const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    

    .title {
        margin: 108px 0 42px 0; 

        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.81;
        letter-spacing: normal;
        color: #2f2f2f;
    }   


    .context {
        display:flex;
        flex-direction:row;
        width: 650px;
        justify-content:space-between;

    }
`

const ThirdSelector = (props) => {
  
    return (
        props.Product.Finish === "finish"
        ?
        <>

        </>
        :
        <Container>
            <div className="title">
                select your size
            </div>
            <div className="context">
                <PriceIndicator
                    size={props.Product.Size}
                    price={props.price}
                />
                <SizeSelector
                    handleSelection={props.handleSelection}
                />
            </div>
            {props.Product.price !== ""
            ?
            <ImageUploader 
                OnChange={props.handleImageSelection}
            />
            :
            <>
            </>}
        </Container>
    );
};

export default ThirdSelector;