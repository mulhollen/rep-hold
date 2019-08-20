import React, { Component } from 'react';
import styled from 'styled-components';
// components
import InstaGrid from './instagram';

const InstaDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 64px auto;

    h3 {
        margin: 0 auto 12px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 32px;
        font-weight: bold;
        line-height: 0.81;
        letter-spacing: normal;
        color: #2f2f2f;
    }

    a {
      color: #2f2f2f;
      text-decoration: none;
    }

    a:hover {
        color: 
    }

    p {
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-size: 14px;
      font-weight: 500;
      line-height: 1.29;
      text-align: center;
      color: #302e2f;
      margin: 0 auto 30px;
    }

    > div {
        display: flex;
        justify-content: center;
    }

    .arrowPrev, 
    .arrowNext {
        background: #ffffff url(https://s3.amazonaws.com/e-commerce-assets/waluv/site%20assets/ic-arrow.png);
        background-size: 24px 24px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 24px;
        height: 140px;
        align-self: center;

        @media (max-width: 660px) {
            height: 100px;
            width: 32px;
            opacity: 0.8;
        }

        @media (max-width: 490px) {
            position: absolute;
        }
    }

    .arrowPrev {
        @media (max-width: 490px) {
            left: 0
        }
    }

    .arrowNext {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);

        @media (max-width: 490px) {
            right: 0
        }
    }
`

function updatePosition(direction){

    let currentPosition = this.state.position
    let newPosition
    var windowWidth = window.innerWidth
    let maxPosition

    windowWidth < 490 ? maxPosition = 7 : maxPosition = 3

    if(direction == "prev") {
        // limits the directions we can go in - we can only go back once
        currentPosition < 1
        ?
        newPosition = 0
        :
        newPosition = currentPosition - 1
        
        this.setState({position: newPosition})
        console.log("prev");
        moveInsta(newPosition);
    } else {
        currentPosition == maxPosition
        ?
        newPosition = maxPosition
        :
        newPosition = currentPosition + 1

        this.setState({position: newPosition})
        console.log("next");
        moveInsta(newPosition);
    }

}

function moveInsta(passedPosition) {
    // show correct images in passed position
    // hide other images 
    // move overflow position to show visible images
    // lower arrow opacity when in ending positions

    var qtyRange
    var imgQty = window.innerWidth
    var images = document.getElementsByClassName("singleInstaImg")
    var instaOverflow = document.getElementById("instagramOverflow")
    var arrowPrev = document.getElementsByClassName("arrowPrev")
    var arrowNext = document.getElementsByClassName("arrowNext")
    let max

    imgQty > 830 ? qtyRange = 5 
    : imgQty < 830 && imgQty > 490 ? qtyRange = 4
    : qtyRange = 3

    console.log("arrow", arrowPrev[0])    
    switch(passedPosition) {
        case 0 || 1:
            for (let i = 0; i < qtyRange; i++) {
                images[i].style.visibility = "visible";
            }
            for (let i = qtyRange; i < 13; i++) {
                images[i].style.visibility = "hidden";
            }

            qtyRange == 3 
            ? 
            instaOverflow.style.left = "52px"
            : 
            instaOverflow.style.left = "0"
            arrowPrev[0].style.opacity = "0.5"
            
            break;
        case 2:
            // 1-4
            if (qtyRange == 3) {
                for (let i = 1; i < 5; i++) {
                    images[i].style.visibility = "visible";
                }
                for (let i = 0; i < 1; i++) {
                    images[i].style.visibility = "hidden";
                }
                for (let i = 5; i > 13; i++ ) {
                    images[i].style.visibility = "hidden";
                }
            } else {
                for (let i = qtyRange; i < qtyRange*2 ; i++) {
                    images[i].style.visibility = "visible";
                }
                for (let i = 0; i < qtyRange; i++) {
                    images[i].style.visibility = "hidden";
                }
                for (let i = qtyRange*2 ; i > 13; i++ ) {
                    images[i].style.visibility = "hidden";
                }

                arrowPrev[0].style.opacity = "1"
                arrowNext[0].style.opacity = "1"

            }

            qtyRange == 5 ? instaOverflow.style.left = "-777px" 
            : qtyRange == 4 && imgQty > 660 ? instaOverflow.style.left = "-606px"
            : qtyRange == 4 && imgQty < 660 ? instaOverflow.style.left = "-420px"
            : instaOverflow.style.left = "-164px" 

            break;
        case 3:
            // 3-6

            qtyRange*3 > 13 ? max = 13 : max = qtyRange*3

            if (qtyRange == 3) {
                for (let i = 3; i < 7 ; i++) {
                    images[i].style.visibility = "visible";
                }
                for (let i = 0; i < 3; i++) {
                    images[i].style.visibility = "hidden";
                }
                for (let i = 7; i > 13; i++ ) {
                    images[i].style.visibility = "hidden";
                }
            } else {
                for (let i = qtyRange*2; i < max; i++) {
                    images[i].style.visibility = "visible";
                }
                for (let i = 0; i < qtyRange*2; i++) {
                    images[i].style.visibility = "hidden";
                }
                for (let i = max; i < max; i++) {
                    images[i].style.visibility = "hidden";
                }
                
                arrowNext[0].style.opacity = "0.5"

            }

            qtyRange == 5 ? instaOverflow.style.left = "-1557px" 
            : qtyRange == 4 && imgQty > 660 ? instaOverflow.style.left = "-1211px"
            : qtyRange == 4 && imgQty < 660 ? instaOverflow.style.left = "-841px"
            : instaOverflow.style.left = "-376px" 
            
            break;
        case 4:
            // 5-8
                for (let i = 5; i < 9; i++) {
                    images[i].style.visibility = "visible";
                }
                for (let i = 0; i < 5; i++) {
                    images[i].style.visibility = "hidden";
                }
                for (let i = 9; i > 13; i++ ) {
                    images[i].style.visibility = "hidden";
                }

                instaOverflow.style.left = "-596px" 
            break;
        case 5:
            // 7-10
                for (let i = 7; i < 11; i++) {
                    images[i].style.visibility = "visible";
                }
                for (let i = 0; i < 7; i++) {
                    images[i].style.visibility = "hidden";
                }
                for (let i = 11; i < 13; i++) {
                    images[i].style.visibility = "hidden";
                }

                instaOverflow.style.left = "-811px" 
            break;
        case 6:
            // 9-12
            for (let i = 9; i < 13; i++) {
                images[i].style.visibility = "visible";
            }
            for (let i = 0; i < 9; i++) {
                images[i].style.visibility = "hidden";
            }

            instaOverflow.style.left = "-1026px" 
            break;
        case 7:
            // 11-13
            for (let i = 11; i < 13; i++) {
                images[i].style.visibility = "visible";
            }
            for (let i = 0; i < 11; i++) {
                images[i].style.visibility = "hidden";
            }

            instaOverflow.style.left = "-1244px" 
            break;
        default: console.log ("instagram carousel error")
      }

}

class InstaCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 1,
        }
    }

    useEffect() {
        if(window.innerWidth < 830){
            document.getElementsByClassName("singleInstaImg")[5].style.visibility = "hidden";
        }
    }

    render() {   

        return (
            <InstaDiv>
                <h3><a href={`https://www.instagram.com/${this.props.account}/`} target="_blank">@{this.props.account}</a></h3>
                <p>Your daily dose of walenvy</p>
                <div>
                    <div className="arrowPrev" onClick={updatePosition.bind(this, "prev")}></div>
                    <InstaGrid account={this.props.account} numberOfMediaElements={this.props.numberOfMediaElements} />
                    <div className="arrowNext" onClick={updatePosition.bind(this, "next")}></div>
                </div>
            </InstaDiv>
        );
    }
}


export default InstaCarousel;
