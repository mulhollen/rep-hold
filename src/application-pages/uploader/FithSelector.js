import React from 'react';
import styled from 'styled-components'

const Container = styled.div `

    margin: 72px 0 0 0;



    .title{
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.81;
        letter-spacing: normal;
        color: #302E2f;
    }
    

    .button-container{
        display:flex;
        justify-content:center;
    }

`



const FithSelector = (props) => {
    return (
        <Container>
            <div className="title">select mount</div>
            <div className="button-container">
                <div>
                    <button onClick={props.handleMount} name="No Mount">command strips</button>
                </div>
                <div>
                    <button onClick={props.handleMount} name="Stand Offs">Stand Offs</button>
                </div>
            </div>
        </Container>
    );
};

export default FithSelector;