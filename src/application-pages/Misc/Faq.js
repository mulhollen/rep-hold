import React from "react"
import Styled from "styled-components"
import { Link } from 'react-router-dom'

  const Container = Styled.div`

      .FAQHeadingImage{
        background: URL(http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/img_dots_faq.png);
        background-size: 288px 227px;
        background-repeat: no-repeat;
        background-position: 65% 35%;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        height: 488px;
        width: 100%;
        object-fit: contain;
      }
      .FAQHeadingText1{
        width: 288px;
        height: 94px;
        margin: 15px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.28;
        letter-spacing: normal;
      }
      .FAQHeadingText2{
        width: 256px;
        height: 177px;
        margin: 15px;
        padding-top: 50px;
        color: #007479;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.28;
        letter-spacing: normal;
        text-align: right;
        align-self: flex-end;
      }
      .FAQTextHead{
        width: 288px;
        height: 37px;
        padding: 20px 10px 20px 10px;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-family: ProximaNova;
        font-size: 42px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.1;
        letter-spacing: normal;
        text-align: center;
        color: #007479;
      }
      .Qs{
        padding: 30px 16px 24px 16px;
        font-family: ProximaNova;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.11;
        letter-spacing: normal;
        color: #000000;
        display: flex;
        flex-direction: row;
      }
      .As{
        padding: 0px 16px 24px 16px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.29;
        letter-spacing: normal;
        color: #000000;
        display: flex;
        flex-direction: row;
      }
      .As span {
        font-family: ProximaNova;
        font-size: 24px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.83;
        letter-spacing: normal;
        color: #007479;
      }
      .Qs span {
        font-family: ProximaNova;
        font-size: 24px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.83;
        letter-spacing: normal;
        color: #2f2f2f;
      }
      .As p {
        margin: 0px 0px 0px 10px;
      }
      .Qs p {
        margin: 0px 0px 0px 10px;
      }
      .FAQCardSet1{
        width: 100vw;
        display:flex;
        justify-content:center;
        background-color: #f0f0f0;
      }
      .FAQCardSet1Text{
        width: 320px;
        flex-direction: column;
      }
      .FAQCardSet2{
        width: 100vw;
        background-color: #ffffff;
        display:flex;
        justify-content:center;
      }
      .FAQCardSet2Text{
        width: 320px;
        flex-direction: column;
      }
      .More-Button {
        width: 248px;
        height: 40px;
        margin:0 36px 24px 36px;
        box-shadow: -5px 2px 10px 0 rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        border-color: #870051;
        display: inline-flex;
        text-align: center;
        background-color: #870051;
      }
      .More-Button:active {
        width: 248px;
        height: 40px;
        margin:0 36px 24px 36px;
        box-shadow: -5px 2px 10px 0 rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        border-color: #870051;
        display: inline-flex;
        background: transparent;
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
        text-align: right;
        color: #ffffff;
        text-decoration: none;
      }
      a:active {
        margin:auto;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #870051;
        font-family: ProximaNova;
        text-decoration: none;
      }
      .Tables {
        width: 288px;
        margin: 24px 16px 24px 16px;
        text-align: left;
      }
      caption {
        width: 150px;
        height: 20px;
        font-family: ProximaNova;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
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
        background-color: #ffffff;
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

    @media (min-width: 768px) {
      .FAQHeadingImage{
        background-size: 550px 300px;
      }
      .FAQHeadingText1 {
        margin: 30px 0px 0px 150px;
      }
      .FAQHeadingText2 {
        margin: 120px 0px 10px 30px;
      }
      .FAQCardSet1{
        background-color: #f0f0f0;
      }
      .FAQCardSet2{
        background-color: #ffffff;
      }
    }
    @media (min-width: 1024px) {
      .FAQHeadingImage{
        background-size: 780px 550px;
      }
      .FQACardSet {
        height: 600px;
      }
      .FAQHeadingText1 {
        margin: 30px 0px 0px 150px;
      }
      .FAQHeadingText2 {
        margin: 120px 30px 10px 30px;
      }
      .FAQCardSet1{
        background-color: #f0f0f0;
      }
      .FAQCardSet2{
        background-color: #ffffff;
      }
      .FAQCardSet1Text{
        width: 500px;
      }
      .FAQCardSet2Text{
        width: 500px;
      }
    }
    @media (min-width: 1440px) {
      .FAQHeadingImage{
        background-size: 780px 550px;
      }
      .FQACardSet {
        height: 600px;
      }
      .FAQHeadingText1 {
        margin: 30px 0px 0px 150px;
      }
      .FAQHeadingText2 {
        margin: 120px 30px 10px 30px;
      }
      .FAQCardSet1{
        background-color: #f0f0f0;
      }
      .FAQCardSet2{
        background-color: #ffffff;
      }
      .FAQCardSet1Text{
        width: 500px;
      }
      .FAQCardSet2Text{
        width: 500px;
      }
    }
  `

const Faq = ()=>{
  return(
    <Container>
        <div className="FAQCardSet">
          <div className="FAQHeading">
            <div className="FAQHeadingImage">
              <div className="FAQHeadingText1">do you have questions?</div>
              <div className="FAQHeadingText2">we've got answers... & if we don't we will find them.</div>
            </div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="FAQTextHead">FAQ</div>
            <div className="Qs"><span>Q:</span> <p>What is a Metal Print?</p></div>
            <div className="As"><span>A:</span> <p>Metal printing involves the pressing of ink onto durable, high-quality sheets of aluminum. It generally consists of printing a photo onto metal with a special kind of ink and drying process - making your prints look crisp and rich in color on a more matte-looking finish.</p></div>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>Why Metal Prints Are the Future for Printed Photography?</p></div>
            <div className="As"><span>A:</span> <p>Picture frames are so yesterday. Metal prints represent a new frontier of decorative photography. Recent advancements in technology have made it possible to print photographs onto metal, giving your favorite pictures a vivid, defined look that will give others, well, what we call - "walenvy." Hanging metal prints on your wall, especially with our chrome barrel standoffs, gives your memories the display they deserve.</p></div>
            <button className="More-Button"><Link to='/metal'>More</Link></button>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>How Thick is Metal or Acrylic Prints?</p></div>
            <div className="As"><span>A:</span> <p>Both waluv’s aluminum metal and acrylic glass prints are 1/8”  or 3mm thick. </p></div>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>What Type of Printing is used on Both Metal and Acrylic Prints?</p></div>
            <div className="As"><span>A:</span> <p>waluv’s photo printing is UV ink and is printed directly on the metal and acrylic material.</p></div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>Am I able to Print on Both Sides of the Metal or Acrylic Material?</p></div>
            <div className="As"><span>A:</span> <p>For best results, waluv’s photo prints are printed on one side. </p></div>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>Are Custom Sizes Available in Metal or Acrylic Prints?</p></div>
            <div className="As"><span>A:</span> <p>Absolutely! waluv’s team worked hard to offer you several sizes to fit any print. You can choose from: 3X8, 4X6, 5X7, 6X24, 5X8, 6X6, 8X10, 12X18 , 18X24 , 18X27, 24X36 </p></div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>How Do I Mount My Metal or Acrylic Prints?</p></div>
            <div className="As"><span>A:</span> <p>You have options! We have two types of waluv customers - those who prefer to hang their prints on the wall with adhesive strips or barrel standoffs.<br/>Adhesive strips are the best option for customers who like their prints flat on the wall, with no accessories interfering. Chrome barrel standoffs are for the best option for customers who love the flair of a modern-looking accessory, and like their art to pop off the wall.<br/>If you choose waluv's chrome barrel
             standoffs, waluv will pre-drill the holes for free in your print. Each hole is drilled X" from each corner.<br/>Additionally, some of our customers don't hang their prints at all. Instead, they creatively lean their metal or acrylic prints on shelves or desks. Since we know customers like to shake up their space, we throw in command strips for free. When you do feel like hanging your art on the wall, you'll have the adhesive strips.<br/>Mounting instructions will be included in your order.</p></div>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>What is the Size of the Metal Standoffs?</p></div>
            <div className="As"><span>A:</span> <p>waluv’s durable standoffs are ½ inch round. </p></div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>Can Your Photo Prints Be Hung Outside?</p></div>
            <div className="As"><span>A:</span> <p>We get that you want to put your photos everywhere (we do, too!), but for keeping your print in the best condition, we recommend your metal and acrylic prints stay indoors.</p></div>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>Brushed Metal vs White Metal Prints</p></div>
            <div className="As"><span>A:</span> <p>Brushed aluminum metal gives you a metallic look on non-printed areas, while white coated aluminum metal provides a matte finish. </p></div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>What is an Acrylic Print?</p></div>
            <div className="As"><span>A:</span> <p>Both metal prints and acrylic prints offer a gorgeous way to display your photographs, but they differ greatly when it comes to their unique benefits. Acrylic photo printing involves printing onto photographic paper and then your print is infused onto a clear or frosted acrylic glass. Aluminum standoffs can be used to attach the acrylic frame to the wall, giving it visual depth.</p></div>
            <button className="More-Button"><Link to='/acrylic'>More</Link></button>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>What is the Difference Between Frosted and Clear Acrylic?</p></div>
            <div className="As"><span>A:</span> <p>Frosted acrylic prints have a matte finish on one side which has a similar appearance of sandblasted glass. The clear acrylic print is completely see through offering a shiny surface.</p></div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>How Do I Clean a Metal or Acrylic Print?</p></div>
            <div className="As"><span>A:</span> <p>Simply use a simple solution of dishwater and soap. And wala!</p></div>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>How can I contact customer support?</p></div>
            <div className="As"><span>A:</span> <p>We’re here for you! You can live chat, email or call waluv. Here’s our info: customerservice@waluv.com | (800)-421-7585</p></div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>What should you know about shipping?</p></div>
            <div className="As"><span>A:</span> <p>waluv has 48-hour turnaround times. That means that if you submit an order on a Monday before 4 pm, then your order will be shipped and on it's way to you on Wednesday before 4 pm.</p></div>
          </div>
        </div>
        <div className="FAQCardSet2">
          <div className="FAQCardSet2Text">
            <div className="Qs"><span>Q:</span> <p>What is the return policy?</p></div>
            <div className="As"><span>A:</span> <p>For custom products where you upload your photo, we are happy to offer a store credit, valid for one year, for the amount of the original sale. We do not accept returns of personalized/customized items because - well, not everyone likes your photo as much as you, especially if you're in it. [Insert a friendly waluv smile.]</p></div>
          </div>
        </div>
        <div className="FAQCardSet1">
          <div className="FAQCardSet1Text">
            <div className="Qs"><span>Q:</span> <p>What is the Weight of Metal and Acrylic Prints?</p></div>
            <div className="As"><span>A:</span>
              <div className="Tables">
                <table id="BMW">
                  <caption>Brush Metal</caption>
                  <tbody>
                      <tr>
                        <th>Dimensions</th>
                        <th>Weight in Ounces</th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>3 x 8 in</td>
                        <td>2 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>4 x 6 in</td>
                        <td>3 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>5 x 7 in</td>
                        <td>4 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>5 x 8 in</td>
                        <td>5 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>6 x 6 in</td>
                        <td>6 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>8 x 10 in</td>
                        <td>7 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>6 x 24 in</td>
                        <td>8 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>12 x 18 in</td>
                        <td>9 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>18 x 24 in</td>
                        <td>10 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>18 x 27 in</td>
                        <td>11 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>24 x 36 in</td>
                        <td>12 oz.</td>
                      </tr>
                    </tbody>
                </table>
                <table id="WMW">
                  <caption>White Metal</caption>
                    <tbody>
                      <tr>
                        <th>Dimensions</th>
                        <th>Weight in Ounces</th>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>3 x 8 in</td>
                        <td>2 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>4 x 6 in</td>
                        <td>3 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>5 x 7 in</td>
                        <td>4 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>5 x 8 in</td>
                        <td>5 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>6 x 6 in</td>
                        <td>6 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>8 x 10 in</td>
                        <td>7 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>6 x 24 in</td>
                        <td>8 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>12 x 18 in</td>
                        <td>9 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>18 x 24 in</td>
                        <td>10 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>18 x 27 in</td>
                        <td>11 oz.</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>24 x 36 in</td>
                        <td>12 oz.</td>
                      </tr>
                    </tbody>
                </table>
                <table id="FAW">
                  <caption>Frosted Acrylic</caption>
                  <tbody>
                    <tr>
                      <th>Dimensions</th>
                      <th>Weight in Ounces</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>3 x 8 in</td>
                      <td>2 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>4 x 6 in</td>
                      <td>3 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>5 x 7 in</td>
                      <td>4 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>5 x 8 in</td>
                      <td>5 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>6 x 6 in</td>
                      <td>6 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>8 x 10 in</td>
                      <td>7 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>6 x 24 in</td>
                      <td>8 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>12 x 18 in</td>
                      <td>9 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>18 x 24 in</td>
                      <td>10 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>18 x 27 in</td>
                      <td>11 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>24 x 36 in</td>
                      <td>12 oz.</td>
                    </tr>
                  </tbody>
                </table>
                <table id="CAW">
                  <caption>Clear Acrylic</caption>
                  <tbody>
                    <tr>
                      <th>Dimensions</th>
                      <th>Weight in Ounces</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>3 x 8 in</td>
                      <td>2 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>4 x 6 in</td>
                      <td>3 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>5 x 7 in</td>
                      <td>4 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>5 x 8 in</td>
                      <td>5 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>6 x 6 in</td>
                      <td>6 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>8 x 10 in</td>
                      <td>7 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>6 x 24 in</td>
                      <td>8 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>12 x 18 in</td>
                      <td>9 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>18 x 24 in</td>
                      <td>10 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>18 x 27 in</td>
                      <td>11 oz.</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>24 x 36 in</td>
                      <td>12 oz.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </Container>
  )
}

export default Faq;
