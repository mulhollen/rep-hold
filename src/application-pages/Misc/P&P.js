import React from "react"
import Styled from "styled-components"

  const Container = Styled.div`

  .privacy-policy {
    padding-top: 48px;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    font-family: ProximaNova;
    font-size: 42px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.24;
    letter-spacing: normal;
    text-align: center;
    color: #007479;
    align-items: center;
  }

  .para {
    width: 300px;
    padding-top: 34px;
    margin:auto;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
    font-family: ProximaNova;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #2f2f2f;
    align-items: center;
    overflow: scroll;
  }

  @media (min-width: 768px) {
      .privacy-policy {
        padding-top: 48px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 42px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.24;
        letter-spacing: normal;
        text-align: center;
        color: #007479;
        align-items: center;
      }

      .para {
        width:640px;
        padding-top: 34px;
        margin:auto;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        letter-spacing: normal;
        color: #2f2f2f;
        align-items: center;
        overflow: scroll;
      }
    }

  `

const PrivacyComponent = ()=>{



  return(
    <Container>
      <div>
        <div className="privacy-policy">privacy policy</div>
        <div className="para">
            <p>Waluv is committed to protecting your privacy. The information that we receive from you on this web site is used to help us serve you better by quickly and efficiently processing your orders. We do not sell, barter, or trade any personal information from web site transactions, surveys, promotions, or any other type of response.</p>
            <p>We track information from you by the data that you provide through registration, data collected as a result of purchasing products, and tracking information based on the traffic on this web site.</p>
            <p>When You Place an Order we need to verify your profile. We need to know your name, title, facility/company, mailing address, billing address, account number, PO number, or credit card number, expiration date, shipping methods and contact information. This lets us efficiently process your order and notify you of the expected delivery date.</p>
            <p>Waluv is committed to protecting your personal customer information. We do not sell, barter, or trade any individual personal information from web site transactions, surveys, promotions, or any other type of response. If you would like to be excluded from any mailing lists, we will comply with your wishes.</p>
            <p>Waluv is always looking for ways to improve our service. By using our web site, you consent to the collection and use of this information. If we decide to change our privacy policy, we will post these changes so that you know what information we collect, how we use it, and under what circumstances we disclose it.</p>
        </div>
      </div>
    </Container>
  )
}

export default PrivacyComponent;
