import React from "react"
import Styled from "styled-components"
import { Link } from 'react-router-dom'

  const Container = Styled.div`
    .contactusPage {
      height: 500px;
    }
    .header {
      padding: auto;
    }
    .header h2 {
      font-family: ProximaNova;
      font-size: 36px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.28;
      letter-spacing: normal;
      text-align: center;
      position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      color: #007479;
    }
    .para {
      position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
    }
    .para p {
      width: 272px;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.29;
      text-align:left;
      letter-spacing: normal;
      color: #000000;
    }
     a {
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      color: #000000;

    }
  @media (min-width: 768px) {

  }
  @media (min-width: 1024px) {
    /* .para {
      width: 50%;
      position: right;
      display:flex;
      flex-direction: column;
      justify-content: center;
      border: 2px solid red;
    } */
    .para p {
      width: 500px;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.29;
      letter-spacing: normal;
      color: #000000;
    }
    p:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 1440px) {

  }
  `
  const ContactUs = ()=>{
    return(
      <Container>
        <div className="contactusPage">
          <div className="header"><h2>contact us</h2></div>
          <div className="para">
            <p>Need help? Have a question? Want to talk about awesome wall art or what you had for lunch?</p>
            <p>Drop us a line. Shoot us an email.</p>
            <p>Our waluv customer care team is here for you and ready to respond with lightning speed.</p>
            <p>Mon - Fri 7am - 5pm CST | 800-374-1010 |
              <a href="mailto:customersupport@waluv.com"> customersupport@waluv.com</a>
            </p>
            <p>You're not alone. <a href="/Faqs">Here are some questions</a> we get asked now and then.</p>
          </div>
        </div>
      </Container>
    )
  }
  export default ContactUs;
