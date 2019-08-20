import React, { useContext } from 'react';
import styled from 'styled-components'
import { ProductContext } from '../../Context/Store'


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

    .first-selector {
        display:flex;
        flex-direction:row;
        justify-content:center;

    }

    .left-column{
        margin-right: 204px;
    }

    .crystal, .frosted, .white, .brushed {
        height: 288px;
        width:288px;
        background-repeat: no-repeat;
        background-size: 288px 192px;


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

    .crystal, .white {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-crystal-acrylic.jpg);     
    }


    .frosted, .brushed {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-frosted-acrylic.jpg);
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

const SecondSelector = (props) => {

    const [Product, setProduct ] = useContext(ProductContext);
   

    return (
        props.Substrate === "Acrylic"
        ?
        <Container>
            <div className="title">
                select your finish
            </div>
            <div className="first-selector">
                <div onClick={() => setProduct({...Product, Finish: 'Clear Acrylic'})} className="left-column">
                    <div className="crystal">
                        crystal acrylic
                    </div>
                    <p className="description">
                    This one’s easy. Crystal acrylic has a glossy and smooth finish. Think: a million tiny crushed crystals melted into a finish. The word “stunning” comes to mind.
                    </p>
                </div>
                <div onClick={() => setProduct({...Product, Finish: 'Frosted Acrylic'})}  className="right-column">
                    <div className="frosted">
                        frosted acrylic
                    </div>
                    <p className="description">
                    Another eye-catcher, frosted acrylic looks slightly milky and non-reflective, yet a perfect finish to enhance an abstract, moody, or peaceful image. We recommend adding a faux frame to this finish.
                    </p>
                </div>
            </div>
        </Container>
        : props.Substrate === "Metal"
        ?
        <Container>
            <div className="title">
                select your finish
            </div>
            <div className="first-selector">
                <div onClick={() => setProduct({...Product, Finish: 'Brushed Metal'})}  className="left-column">
                    <div className="brushed">
                        brushed metal
                    </div>
                    <p className="description">
                    When it comes to brushed metal, think: a painter showing off his strokes. While still sharp, your image gains texture with a brush metal finish, making tiny grains visible in a certain light.
                    </p>
                </div>
                <div onClick={() => setProduct({...Product, Finish: 'White Metal'})}  className="right-column">
                    <div className="white">
                        white metal
                    </div>
                    <p className="description">
                    When it comes to white metal prints, think: brushed metal with a light white coat. A smooth, angelic tone, this finish is best for whimsical or vintage looks.
                    </p>
                </div>
            </div>
        </Container>
        :
        <Container />
    );
};

export default SecondSelector;
