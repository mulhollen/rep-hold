import React, { Component } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const MetalAcrylicContainer = styled.div`

    max-height: 816px;

    h2 {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 32px;
        font-weight: bold;
        line-height: 0.81;
        color: #2f2f2f;
        margin: 62px auto 0;
        text-align: center;


        @media (min-width: 768px) {
            font-size: 64px;
        }
    }
   
    .metalacrylic > div:first-of-type {
        display: flex;
        position: relative;
        z-index: -1;

        div {
            justify-self: center;
            align-self: center;

            @media (min-width: 1000px) {
                top: -55px;
            }
            
            h3 {
                margin: 0 1.25rem 1rem;
            }

            p {
                margin: .5rem 70px;

                @media (min-width: 768px) {
                    margin: .5rem 56px;
                }
            }
        }
    }

    .metalacrylic:first-of-type > div:first-of-type {
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
            position: relative;
            top: -80px;
        }
    }

    .metalacrylic:last-of-type > div:first-of-type {
        flex-direction: column;
        
        @media (min-width: 768px) {
            flex-direction: row-reverse;
            position: relative;
            top: -40px;
        }

        @media (min-width: 1050px) {
            top: -12px;
        }
    }

    .metalacrylic:first-of-type {
        position: relative;
        z-index: -1;
        top: -44px;

        // keeping the text not floating weird
        @media (min-width: 768px) {
            
           > div:first-of-type > div {
                position: relative;
                left: -70px;
            }
        } @media (min-width: 1280px) {
            > div:first-of-type > div {
                left: -15%;
            }
        } @media (min-width: 1280px) {
            > div:first-of-type > div {
                left: -20%;
            }
        }
    }

    .metalacrylic:last-of-type {
        position: relative;
        top: -64px;

        // keeping the text not floating weird
        @media (min-width: 768px) {
            position: relative;
            top: -225px;

           > div:first-of-type > div {
                position: relative;
                right: -70px;
            }
        } @media (min-width: 1280px) {
            > div:first-of-type > div {
                left: 15%;
            }
        } @media (min-width: 1280px) {
            > div:first-of-type > div {
                left: 20%;
            }
        }
    }

    .metalacrylic > div:last-of-type {
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 940px) {
            justify-content: space-between;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 248px;
            height: 40px;
            border-radius: 2px;
            background-color: #00757a;
            border: 1px solid #00757a;
            font-size: 14px;
            font-weight: bold;
            color: #ffffff;
            text-decoration: none;
            margin: 1rem auto 0; 
        }

        a:hover {
            background-color: #ffffff;
            color: #00757a;
        }
    }

    img {
        width: 273px;
        object-fit: cover;
    }

    #metalImage {
        height: 156px;
        align-self: flex-start;

        @media (min-width: 768px) {
            height: 448px;
            width: 517px;
        }
        
        @media (min-width: 893px) {
            height: 510px;
            width: 588px;
        }

        @media (min-width: 1050px) {
            width: 796px;
        }
    }

    #acrylicImage {
        align-self: flex-end;

        @media (min-width: 768px) {
            height: 389px;
            width: 467px;
        }
        
        @media (min-width: 893px) {
            height: 412px;
            width: 512px;
        }

        @media (min-width: 1050px) {
            height: 413px;
            width: 720px;
        }
    }

`


class MetalAcrylic extends Component {
    
    render() {


        return (
            <MetalAcrylicContainer>
                <div className="metalacrylic">
                    <h2>metal prints</h2>
                    <div>
                        <MediaQuery maxDeviceWidth={1049}>
                            <img id="metalImage" src="https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/waluv-metal-print-with-standoffs.jpg" />
                        </MediaQuery>    
                        <MediaQuery minDeviceWidth={1050}>
                            <img id="metalImage" src="https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/waluv_metal_print_golden_gate_bridge.jpg" />
                        </MediaQuery> 
                        <div>
                            <h3>...because your style is too good for paper.</h3>
                            <p>- matte-like softness</p>
                            <p>- textured appearance</p>
                            <p>- crisp details</p>
                            <div>
                                <a href="">LEARN MORE ABOUT METAL</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="metalacrylic">
                    <h2>acrylic prints</h2>
                    <div>
                        <MediaQuery maxDeviceWidth={1049}>
                            <img id="acrylicImage" src="https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/waluv-acrylic-print-with-standoffs.jpg" />
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={1050}>
                            <img id="acrylicImage" src="https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/waluv_acrylic_print_mountain_sunset.jpg" />
                        </MediaQuery>
                        <div>
                            <h3>...because your style deserves to pop off the wall.</h3>
                            <p>- rich depth</p>
                            <p>- vibrant colors</p>
                            <p>- glass-like finish</p>
                            <div>
                                <a href="">LEARN MORE ABOUT ACRYLIC</a>
                            </div>
                        </div>
                    </div>
                </div>
            </MetalAcrylicContainer>
        );
    }
}

export default MetalAcrylic;