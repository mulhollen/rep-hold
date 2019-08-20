import React, { Component } from 'react';
import styled from 'styled-components';

const MaxWidthDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #302e2f;
    padding: 1.5rem 5.5rem;
`

const GifBarContainer = styled.div `
    background: #302e2f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        h3 {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            color: #ffffff;
            margin: 1rem 0 0 0;
        }

        img:first-of-type {
            width: 60px;
            height 45px;
        }

        img:nth-of-type(2) {
            width: 55px;
            height: 41px;
        }

        img:last-of-type {
            width: 51px;
            height: 41px;
        }

    }

    div:first-of-type,
    div:nth-of-type(2),
    div:last-of-type {
        margin: 24px auto;
    }

        @media (min-width: 768px) {
            flex-direction: row;

            h3 {
                margin: 12px 0 0 0;
            }
        
            div:first-of-type {
                margin: 0 6px 0 0;
            }
        
            div:nth-of-type(2) {
                margin: 0 6px;
            }
        
            div:last-of-type {
                margin: 0 0 0 6px;
            }
        }

    @media (min-width: 1024px) {
        div:first-of-type {
            margin: 0 2rem 0 0;
        }
    
        div:nth-of-type(2) {
            margin: 0 2rem;
        }
    
        div:last-of-type {
            margin: 0 0 0 2rem;
        }
    
    }   
`


class GifBar extends Component {
    
    render() {


        return (
            <MaxWidthDiv>
                <GifBarContainer>
                    <div>
                        <img src="https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/1sec-BestLife.gif" />
                        <h3>live your best life</h3>
                    </div>
                    <div>
                        <img src="https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/1sec-Camera.gif" />
                        <h3>capture the moments</h3>
                    </div>
                    <div>
                        <img src="https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/1sec-Upload.gif" />
                        <h3>upload & display</h3>
                    </div>
                </GifBarContainer>
            </MaxWidthDiv>
        );
    }
}

export default GifBar;