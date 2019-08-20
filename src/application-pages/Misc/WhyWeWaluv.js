import React from "react"
import Styled from "styled-components"
import { Link } from 'react-router-dom'

  const Container = Styled.div`
     .hero-images {


    }
    .top-image {

    }
    .top-image img {
      width: 90%;
      height: 100%;
      margin: 10px 10px 0px 10px;
      padding: 10px 10px 0px 10px;
    }
    .bottom-image {

    }
    .bottom-image img {
      width: 90%;
      height: 100%;
      margin: 5px 10px 10px 8px;
      padding: 5px 10px 10px 8px;
    }
    .para {
      position: center;
      display: flex;
      margin: auto;
      flex-direction: column;
      justify-content: center;
      align-items:center;
    }
    .para h2 {
      width: 75%;
      font-family: ProximaNova;
      font-size: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      display:flex;
    }
    .heading {

    }
    .heading h2 {
      width: 75%;
      font-family: ProximaNova;
      font-size: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      display:flex;
    }
    .para p {
      width: 75%;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
    }
    .signature {
      margin-bottom: 15px;
      width: 75%;
      color: #870051;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
    }


  @media (min-width: 768px) {

    .hero-images{
        display:flex;
        justify-content:center;
    }

    .top-image img {
      width: 90%;
      height: 100%;
      margin: 15px 10px 0px 17px;
      padding: 15px 10px 0px 17px;
    }
    .bottom-image img {
      width: 90%;
      height: 100%;
      margin: 5px 10px 10px 13px;
      padding: 5px 10px 10px 13px;
    }
    .para {
      width: 500px;
      margin: 15px auto 15px auto;
      /* position: center; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
    }
    .para p {
      /* width: 75%; */
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
    }
  }
  @media (min-width: 1024px) {
    .hero-images {
      display: flex;
    }
    .top-image img {
      width: 400px;
      height: 200px;
      /* align-items: center;
      justify-content: center; */
      margin: 15px 10px 0px 17px;
      padding: 15px 10px 0px 17px;
    }
    .bottom-image img {
      width: 400px;
      height: 200px;
      /* align-items: center;
      justify-content: center; */
      margin: 15px 10px 10px 13px;
      padding: 15px 10px 10px 13px;
    }
    .para {
      width: 500px;
      margin: 15px 15px 15px 15px;
      /* position: center; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      margin: auto;
    }
    .para p {
      /* width: 75%; */
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
    }
  }
  @media (min-width: 1440px) {
    .hero-images {
      display: flex;
    }
    .top-image {
      display: inline-flex;

    }
    .top-image img {
      width: 400px;
      height: 200px;

    }
    .bottom-image {
      display: inline-flex;
    }
    .bottom-image img {
      width: 400px;
      height: 200px;

    }
    .para {
      /* width: 500px; */
      /* position: center; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      margin: auto;
    }
    .para p {
      /* width: 75%; */
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
    }
  }
  `
  const WhyWeWaluv = ()=>{
    return(
      <Container>
        <div>
          <div className="hero-images">
            <div className="top-image">
              <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-waluv-family-1.jpg" alt="Image no.1 of Waluv Team." />
            </div>
            <div className="bottom-image">
              <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-waluv-family-2.jpg" alt="Image no. 2 of Waluv Team." />
            </div>
          </div>
          <div className="para">
            <div className="heading"><h2>About</h2></div>
            <p>Once upon a time, there was this vibrant manufacturing company known for providing interior signs and visual décor to some of the world’s most recognized retail locations. One day, in a very long meeting with a very long table under some very bright lights, someone said, “Hey, what if we were to offer our signs and décor to people like us? Not just retailers, but individuals who also care about what their walls look like, and who want to get creative.” There was a long pause, followed by a lot of creaking and cracking as suits and ties shifted in their seats. “What does that look like, exactly?” someone finally said. (See below for what that looks like, exactly.)</p>
            <p>Then some shifting happened. Like, physical shifting, moving of cubicles and such. And then some building happened. Like, physical building, you should see the number of new desks we had to put together. HR got involved – they do that - and more and more people came to help. Young people, not-so-young people, people with degrees, drive, and desire, people with innovation, creativity, and very well-designed personal wall space. They shook hands, high-fived and became a team. A Dream Team.</p>
            <p>They had to build a brand. Easy. Then they had to think of a name. Oh man, a NAME. Hard. Late nights, pizza boxes, furrowed brows, pinched noses, sticky notes – so many sticky notes - thought circles, tossed pens over shoulders… And then one day, not a particularly notable day, it came. Simple and strong. A combination of walls and love.  waluv. From the moment it was uttered it was, well, loved. (And also spelled with a lowercase w.)</p>
            <p>“We can make anything to go in any space!” Okay, calm down, Senior Product Developer. We can’t do that, but we can fill any wall with love, craft moments and memories into art, and collaborate with anyone who wants to create. Create or look creative (we’ve got your back, too).</p>
            <p>So here we are. waluv is a real and living thing and we’re all in luv. Creating wall envy is a thing (except we spell it like “walenvy”) and making people happy in their space is another thing. We wouldn't put anything in your space that we wouldn't want in ours. Lucky for you we’ve got style – and so do you. So, let’s do this!</p>
            <h2>Let’s make luv – ahem - waluv, together.</h2>
            <div className="signature">-The waluv Dream Team</div>
          </div>

        </div>
      </Container>
    )
  }

  export default WhyWeWaluv;
