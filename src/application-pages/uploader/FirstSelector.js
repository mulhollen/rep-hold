import React, { useContext } from 'react';
import styled from 'styled-components'
import { ProductContext} from '../../Context/Store'


const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;


    .title {

        margin: 36px 0 42px 0;

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

    .first-selector {
        display:flex;
        flex-direction:row;
        justify-content:center;

    }

    .left-column{
        margin-right: 204px;
    }

    .acrylic, .metal {
        height: 288px;
        width:288px;
        background-repeat: no-repeat;
        background-size: 288px 288px;


        display:flex;
        justify-content:center;
        align-items:flex-end;

        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 42px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.95;
        letter-spacing: normal;
        text-align: center;
        color: #2f2f2f;
    }

    .acrylic {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-acrylic-dot.jpg);     
    }


    .metal {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-metal-dot.jpg);
    }


    .description {
        height:72px;
        width: 288px;
        padding:0;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: justify;
        color: #000000;
    }

`

const FirstSelector = (props) => {

    const [Product, setProduct ] = useContext(ProductContext);


    return (
        <Container>
            <div className="title">
                pick your prints
            </div>
            <div className="first-selector">
                <div onClick={() => setProduct({...Product, Substrate:'Acrylic'})} className="left-column">
                    <div className="acrylic">
                        acrylic prints
                    </div>
                    <p  className="description">
                    This is for those of you who are drawn to the bold and vibrant. Acrylic prints, especially paired with our sleek mounts, pop from the wall with a bit of wow.
                    </p>
                </div>
                <div onClick={() => setProduct({...Product, Substrate:'Metal'})} className="right-column">
                    <div className="metal">
                        metal prints
                    </div>
                    <p className="description">
                    Metal prints are for those of you who like art a bit softer, more muted, and chic. Aluminum peeks out from behind your image sharpening the details in the art, creating a crisp look.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default FirstSelector;
