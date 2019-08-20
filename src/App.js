import React  from 'react';
import ShippingReturns from './application-pages/Misc/ShippingReturns'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
// Components
import Header from './Shared/header/Header'
import Faq from './application-pages/Misc/Faq'
import Footer from './Shared/footer/Footer'
import Home from './application-pages/Home/Home';
import Cart from './application-pages/cart/Cart'
import CheckoutShipping from './application-pages/Checkout/CheckoutShipping'
import CheckoutBilling from './application-pages/Checkout/CheckoutBilling'
import CheckoutReview from './application-pages/Checkout/CheckoutReview'
import WhyWeWaluv from './application-pages/Misc/WhyWeWaluv'
import Uploader from './application-pages/uploader/Uploader'
import PrivacyComponent from './application-pages/Misc/P&P'
import Metal from './application-pages/productpages/Metal'
import Acrylic from './application-pages/productpages/Acrylic'
import ContactUs from './application-pages/Misc/contactus'

const Container = styled.div`
    margin-top:84px;


    @media (min-width: 849px) {
      margin-top: 104px;
    }
`

const App = () => {



  return (
    <Router>
      <Header />

      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/CheckoutShipping" component={CheckoutShipping} />
          <Route path="/CheckoutBilling" component={CheckoutBilling} />
          <Route path="/CheckoutReview" component={CheckoutReview} />
          <Route path="/privacypolicy" component={PrivacyComponent} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/Shipping" component={ShippingReturns} />
          <Route exact path="/WhyWeWaluv" component={WhyWeWaluv} />
          <Route path="/FAQs" component={Faq} />
          <Route path="/Uploader" component={Uploader} />
          <Route path="/Metal" component={Metal} />
          <Route path="/Acrylic" component={Acrylic} />

        </Switch>
      </Container>


      <Footer />
    </Router>
  );
}

export default App;
