import React from "react"
import Styled from "styled-components"
import { Link } from 'react-router-dom'

  const Container = Styled.div`
    .ShippingReturnsPage {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .ShippingReturnsHeader {
      margin-top: 100px;
    }
    .ShippingReturnsHeader h2 {
      text-align: center;
      color: #007479;
      font-family: ProximaNova;
      font-size: 36px;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
    }
    .ShippingPara {
      position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;

    }
    .ShippingPara h3 {
      width: 75%;
      font-family: ProximaNova;
      font-size: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;

    }
    .ShippingPara p {
      width: 75%;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;

    }
    .ReturnsPara {
      position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
    }
    .ReturnsPara h3 {
      width: 75%;
      font-family: ProximaNova;
      font-size: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      display:flex;

    }
    .ReturnsPara p {
      width: 75%;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      display:flex;

    }
    .ContactUs {
      position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    /* .ContactUs:hover {
      color: #ffffff; */
    }
    .button {
      width: 248px;
      height: 40px;
      margin:0 36px 24px 36px;
      box-shadow: -5px 2px 10px 0 rgba(0, 0, 0, 0.2);
      border: 2px solid #000000;
      display: inline-flex;
      text-align: center;
      background-color: #302E30;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button:hover {
      border-radius: 2px solid #000000;
      background-color: #ffffff;
    }
     a {
      margin:auto;
      font-family: ProximaNova;
      font-size: 16px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
      text-decoration: none;
    }
     a:hover {
      color: #302E30;
    }
    @media (min-width: 768px) {
      .ShippingReturnsPage {
        width: 75%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .ShippingPara {

        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
      .ReturnsPara {

        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
    }
    @media (min-width: 1024px) {
      .ShippingReturnsPage {
        width: 75%;
        margin: auto;
        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
      .ShippingPara {

        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
      .ReturnsPara {

        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
    }
    @media (min-width: 1440px) {
      .ShippingReturnsPage{
        width:75%;
        margin: auto;
        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
      .ShippingPara {

        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
      .ReturnsPara {

        position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
    }
  `

  const ShippingReturns = ()=>{
    return(
      <Container>
          <div className="ShippingReturnsPage">
            <div className="ShippingReturnsHeader">
              <h2>shipping & returns</h2>
            </div>
            <div className="ShippingPara">
              <h3>shipping</h3>
              <p>waluv has 48-hour turnaround times. That means that if you submit an order on a Monday before 4 pm, then your order will be shipped and on it's way to you on Wednesday before 4 pm.</p>
              <p>waluv ships within the Continental United States.</p>
            </div>
            <div className="ReturnsPara">
              <h3>returns & exchanges</h3>
              <p>All our acrylic prints and metal prints are custom products. Every print is personalized with a picture that means a whole lot to you - and us!</p>
              <p>Due to this personalization, we don't accept returns of personalized or customized items. We care so much about providing you the best products and services, so if you find yourself having an experience with waluv that doesn't have you raving to others, please reach out to us for store credit valid for one year.</p>
            </div>
            <div className="ContactUs">
              <a href="/ContactUs" className="button">Contact Us</a>
            </div>
          </div>
      </Container>
    )
  }
  export default ShippingReturns;
