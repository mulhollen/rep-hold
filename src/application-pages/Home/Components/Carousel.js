import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

// This component uses this node module
// https://www.npmjs.com/package/react-responsive-carousel

const CarouselContainer = styled.div `

    .carousel .slide .legend {
        background: none;
        opacity: 1;
        bottom: 80px;
        padding: 0;
    }

    h1, h2 {
        text-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.5);
        font-size: 36px;
        font-weight: bold;
        line-height: 1.28;
        text-align: center;
        color: #fff;
        margin: 0 0 1.5rem 0;

        @media (min-width: 768px) {
            margin: 0 0 180px 0;
        }

        @media (min-width:1050px) {
            margin: 0 0 255px 0;
        }

    }

    .screenwidth-placeholder {
        width: 100%;
        height: 469px;
        position: absolute;
        top: 104px;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        @media (min-width: 768px) {
            height: 501px;
        }

        @media (min-width:1050px) {
            height: 625px;
        }
    }
`
const GetStarted = styled.div`

    height: 0;

    #get-started {
        width: 248px;
        height: 40px;
        border-radius: 2px;
        border: 1px solid #2f2f2f;
        background-color: #2f2f2f;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        position: relative;
        bottom: 5rem;

        @media (min-width: 768px) {
            bottom: 12rem;
        }

        @media (min-width: 1050px) {
            bottom: 16.5rem;
        }
    }
        #get-started:hover {
            color: #2f2f2f;
            background-color: #fff;
        }


`



class HomeCarousel extends Component {

    render() {


        return (
            <CarouselContainer>
                <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                    <div>
                        <MediaQuery maxDeviceWidth={767}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-mobile-acrylic.png" />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={768} maxDeviceWidth={1023}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-tablet-acrylic.png" />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={1024}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-desktop-acrylic.png" />
                        </MediaQuery>
                        <div className="legend">
                            <h2>we’re your guide to walenvy</h2>
                        </div>
                    </div>
                    <div>
                        <MediaQuery maxDeviceWidth={767}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-mobile-metal.png" />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={768} maxDeviceWidth={1023}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-tablet-metal.png" />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={1024}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-desktop-metal.jpg" />
                        </MediaQuery>
                        <div className="legend">
                            <h1>turn your photos into unique art</h1>
                        </div>
                    </div>
                    <div>
                        <MediaQuery maxDeviceWidth={767}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-mobile-scene.png" />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={768} maxDeviceWidth={1023}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-tablet-collection.png" />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={1024}>
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-hero-image-desktop-collection.jpg" />
                        </MediaQuery>
                        <div className="legend">
                            <h2>prints that get the oohs & ahhs</h2>
                        </div>
                    </div>
                </Carousel>
                <GetStarted>
                    <Link id="get-started" to="/Uploader">Get Started</Link>
                </GetStarted>
            </CarouselContainer>
        );
    }
}

export default HomeCarousel;
