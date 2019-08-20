import React, {useState, useEffect} from "react"
import Styled from "styled-components"
import {Link} from "react-router-dom"

  const Container = Styled.div`
    .crispy-acrylic {
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
      font-family: ProximaNova;
      font-size: 48px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.08;
      letter-spacing: normal;
      text-align: center;
      color: #fcb61a;
      padding-bottom: 50px;
      }

      .product-details {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 48px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.08;
        letter-spacing: normal;
        text-align: center;
        color: #870051;
      }

      .metal-prints-pricing {
        padding-top:24px;
        position: absolute;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-family: ProximaNova;
        font-size: 48px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.21;
        letter-spacing: normal;
        text-align: center;
        color: #007479;
      }

      .mount-options {
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-family: ProximaNova;
        font-size: 48px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
      }

      .About-our-Acrylic-Pr {
        /* width: 466px; */
        padding-top: 24px;
        font-family: ProximaNova;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.11;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
      }

      .para {
        text-align: left;
        width: 460px;
        margin: auto;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.29;
        letter-spacing: normal;
        color: #000000;
        padding-bottom: 33px;
      }

      .background-product {
        background-color: #f0f0f0;
        text-align:center;
        padding-bottom: 48px;
        padding-top: 46px;
      }

      .get-started-button {
        color: white;
        width: 248px;
        height: 40px;
        border-radius: 2px;
        background-color: #870051;
      }

      .metalprintspricingbackground {
        height: 533px;
        display:flex;
        justify-content:center;
      }

      .chart {
        width: 50%;
        height: 533px;
        display: flex;
        justify-content: center;
      }

      .img {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img-couch-green.jpg);
        background-size: 100% 533px;
        background-repeat: no-repeat;
        height: 533px;
        width: 50%;
      }

      .strips-container{
        display:flex;
        flex-direction: row;
        justify-content:center;
        margin: 36px 0;
        margin-bottom: 60px;
      }

      .command-strips {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/commandstrips.png);
        background-size: 100%;
        background-repeat: no-repeat;
        margin-right: 32px;
        width: 288px;
        height: 154px;
      }
      .stand-offs {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/standoffs.png);
        background-size: 100%;
        background-repeat: no-repeat;
        width: 288px;
        height: 154px;
      }

      .background-mount {
        height: 533px;
        background-color: #f0f0f0;
        padding-top:48px;
        text-align:center;
      }

      .Displaying-your-Meta {
        padding-top: 16px;
        font-family: ProximaNova;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.11;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
      }

      .Weve-got-options-to {
        padding-top: 11px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
      }

      .get-started-button-mount {
        text-decoration:none;
        color:#ffffff;
        font-family:ProximaNova;
        padding: 12px 80px 12px 80px;
        border-radius: 2px;
        background-color: #000000;
      }

      .background-crispy{
        padding-top:48px;
        padding-bottom:80px;
      }

      .wrapper{
        display:flex;
        flex-direction: row;
        justify-content:center;
        text-align: center;
      }
      .pic {
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/friends.png);
        background-size: 100%;
        background-repeat: no-repeat;
        margin-right: 84px;
        width: 346px;
        height: 225px;
      }

      .reviews {
        display:none;
        background-image: url(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/reviews.png);
        background-size: 90%;
        background-repeat: no-repeat;
        width: 200px;
        height: 35px;
      }

      .acrylic-prints {
        width: 346px;
        height: 225px;
        text-align: left;
      }

      .Acrylic-Prints {
        font-family: ProximaNova;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.11;
        letter-spacing: normal;
        color: #870051;
      }

      .Acrylic-prints-are-f {
        margin-bottom: 60px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.29;
        letter-spacing: normal;
        color: #000000;
        padding-bottom: 24px;
      }

      .Tables {
        align-self: center;
        width: 340px;
        text-align: left;
        padding-top: 10%;
      }
      th {
        width: 64px;
        height: 20px;
        font-family: ProximaNova;
        font-size: 12px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: normal;
        color: #007479;
      }
      tbody:nth-child(odd) {
        background-color: #f0f0f0;
      }
      td {
        height: 28px;
        width: 144px;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #000000;
      }



      @media (max-width: 767px) {

        .metalprintspricingbackground {
          height: 1222px;
          display:flex;
          flex-direction: column-reverse;
          justify-content:center;
        }

        .para {
          width: 400px;
        }

          .metal-prints-pricing {
            width: 288px;
          }
          .img {
            display:flex;
            align-items:flex-start;
            justify-content:flex-end;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 768px;
            width: 100%;
          }

          .chart {
            width: 100%;
          }

          .wrapper {
            flex-direction: column;
            justify-content:center;
            align-items:center;

            .pic {
              margin:0;
            }

            .background-crispy{
              padding-top:28px;
              padding-bottom:40px;
            }

            .Acrylic-prints-are-f {
              margin-bottom: 20px;
            }

          }

          @media (max-width: 414px) {

            .Acrylic-prints-are-f {
              margin-bottom: 20px;
            }

            .Acrylic-Prints{
              text-align: center;
              margin: 21px 0 8px 0;
            }

            .pic {
              width: 306px;
            }

            .para {
              width: 300px;
            }

            .acrylic-prints{
              text-align:center;
              width: 306px;
            }

            .img {
              display:flex;
              align-items:flex-start;
              justify-content:flex-end;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              height: 375px;
              width: 100%;
            }

            .metal-prints-pricing {
              text-align: right;
              width: 288px;
            }

            .metalprintspricingbackground {
              height: 829px;

            }

            .chart {
              width: 100%;
            }

            .strips-container{
              flex-direction: column;
              justify-content: center;
              text-align: center;
              margin-bottom: 60px;
            }

            .background-mount {
              height: 659px;
            }

            .command-strips {
              margin: 0 auto;
              padding-bottom: 20px;
            }
            .stand-offs {
              margin: 0 auto;
            }

            .background-crispy{
              padding-top:28px;
              padding-bottom:40px;
            }


          }

      }



  `

const Acrylic = ()=>{

  const [width, setWidth] = useState(window.innerWidth);//to set width for render
  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      }
  })


  return(
    <Container>
    <div>
    <div className="background-crispy">
      <div className="crispy-acrylic">crispy acrylic</div>
      <div className="wrapper">
        <div className="pic">
        </div>
        <div className="acrylic-prints">
          <div className="Acrylic-Prints">Acrylic Prints</div>
          <div className="reviews"></div>
          <div className="Acrylic-prints-are-f">Acrylic prints are for those of you who like art a bit softer, more muted, and chic. Aluminum peeks out from behind your image sharpening the details in the art, creating a crisp look.</div>
          <Link to="/Uploader" className="get-started-button-mount">Get Started</Link>
        </div>
      </div>
      </div>
      <div className="background-product">
        <div className="product-details">product details</div>
        <div className="About-our-Acrylic-Pr">About our Acrylic Prints</div>
        <div className="para"><p>We’ve got options - frosted acrylic prints for a warm glossy and vibrant look or clear acrylic prints for a crisp, glossy feel that evokes all the details and clarity</p>
          <ul>
            <li>Tough, clear 3mm acrylic that looks like glass</li>
            <li>Drilled holes available for mounting</li>
            <li>Beveled edges for a smooth, professional look</li>
            <li>With Frosted or Crystal Clear finishes to choose from</li>
            <li>Available in 11 sizes, from 3" x 8" to 24" x 36"</li>
          </ul>
        </div>
        <Link to="/Uploader" className="get-started-button-mount">Get Started</Link>
      </div>

      <div className="metalprintspricingbackground">

        {width > 767
          ?
          <>
          <div className="metal-prints-pricing">acrylic prints pricing & sizes</div>
          <div className="chart">
            <div className="Tables">
            <table>
              <tbody>
                <tr>
                  <th>Dimensions</th>
                  <th>Price</th>
                  <th>w/Stand Offs</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3 x 8 in</td>
                  <td>$24.00</td>
                  <td>N/A</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>4 x 6 in</td>
                  <td>$24.00</td>
                  <td>$44.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>5 x 7 in</td>
                  <td>$28.00</td>
                  <td>$48.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>5 x 8 in</td>
                  <td>$28.00</td>
                  <td>$48.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>6 x 6 in</td>
                  <td>$28.00</td>
                  <td>$48.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>8 x 10 in</td>
                  <td>$48.00</td>
                  <td>$68.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>6 x 24 in</td>
                  <td>$56.00</td>
                  <td>$76.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>12 x 18 in</td>
                  <td>$67.00</td>
                  <td>$87.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>18 x 24 in</td>
                  <td>$74.00</td>
                  <td>$94.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>18 x 27 in</td>
                  <td>$76.00</td>
                  <td>$101.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>24 x 36 in</td>
                  <td>$141.00</td>
                  <td>$166.00</td>
                </tr>
              </tbody>
            </table>
           </div>
          </div>
          <div className="img">
          </div>
          </>
          :
          <>
          <div className="chart">
            <div className="Tables">
            <table>
              <tbody>
                <tr>
                  <th>Dimensions</th>
                  <th>Price</th>
                  <th>w/Stand Offs</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>3 x 8 in</td>
                  <td>$24.00</td>
                  <td>N/A</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>4 x 6 in</td>
                  <td>$24.00</td>
                  <td>$44.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>5 x 7 in</td>
                  <td>$28.00</td>
                  <td>$48.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>5 x 8 in</td>
                  <td>$28.00</td>
                  <td>$48.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>6 x 6 in</td>
                  <td>$28.00</td>
                  <td>$48.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>8 x 10 in</td>
                  <td>$48.00</td>
                  <td>$68.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>6 x 24 in</td>
                  <td>$56.00</td>
                  <td>$76.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>12 x 18 in</td>
                  <td>$67.00</td>
                  <td>$87.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>18 x 24 in</td>
                  <td>$74.00</td>
                  <td>$94.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>18 x 27 in</td>
                  <td>$76.00</td>
                  <td>$101.00</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>24 x 36 in</td>
                  <td>$141.00</td>
                  <td>$166.00</td>
                </tr>
              </tbody>
            </table>
           </div>
          </div>
          <div className="img">
            <div className="metal-prints-pricing">acrylic prints<br />pricing & sizes</div>
          </div>
          </>
        }

      </div>

      <div className="background-mount">
        <div className="mount-options">mount options</div>
        <div className="Displaying-your-Meta">Displaying your Acrylic Prints</div>
        <div className="Weve-got-options-to">We’ve got options to help you display your<br /> walworthy prints, but it’s up to you to choose!</div>
        <div className="strips-container">
          <div className="command-strips">
          </div>
          <div className="stand-offs">
          </div>
        </div>
          <Link to="/Uploader" className="get-started-button-mount">Get Started</Link>
      </div>



    </div>
    </Container>
  )
}

export default Acrylic;
