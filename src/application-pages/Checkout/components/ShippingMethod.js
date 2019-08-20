import React, {Component} from 'react';
//

import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #f0f0f0;
    padding-top: 2.25rem;
    display: flex;
    flex-direction: column;

    .singleMethod {
            width: 288px;
            height: 72px;
            border-radius: 2px;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > div:first-of-type {
                p {
                    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 1;
                    color: #2f2f2f;
                    margin-bottom: .25rem;
                }
            }

            > div:last-of-type {
                p {
                    align-self: flex-start;
                    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 1;
                    color: #2f2f2f;
                }
            }
    }

    #iteratedMethods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .singleMethod {
        margin-bottom: 12px;

    }

    button {
        width: 248px;
        height: 40px;
        border-radius: 2px;
        background-color: #007479;
        border: 1px solid #007479;
        align-self: center;
        margin-top: 36px;

        font-size: 14px;
        font-weight: bold;
        text-align: center;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button:hover {
        background-color: #fff;
        color: #007479;
      }


`



class ShippingMethod extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            shippingMethodArray: [
                {
                    name: 'UPS Ground',
                    estDelivery: 'Mon Oct 29',
                    estPrice: '$13.65',
                },
                {
                    name: 'UPS Next Day Saver',
                    estDelivery: 'Fri Oct 26 by EOD',
                    eatPrice: '$38.65',
                },
                {
                    name: 'UPS 2-Day Air',
                    estDelivery: 'Mon Oct 29',
                    estPrice: '$30.66',
                },
                {
                    name: 'UPS Next Day Air',
                    estDelivery: 'Fri Oct 26 by 10:30am',
                    estPrice: '$48.16',
                }
            ],
            selectedMethod: [{
                name: 'UPS Ground',
                estDelivery: 'Mon Oct 29',
                estPrice: '$13.65',
            }]
        }
    }


    componentDidMount() {

        if(this.props.location != "review") {
            document.getElementById("0").checked = true
        }

    }


  render() {

    const iteratedMethods = this.state.shippingMethodArray.map((item, key) =>
                <div className="singleMethod" >
                    <input id={key} type="radio" name="shippingMethod"></input>
                    <div>
                        <p>{item.name}</p>
                        <p>Est. Delivery: {item.estDelivery}</p>
                    </div>
                    <div>
                        <p>{item.estPrice}</p>
                    </div>
                </div>
        );



    return (
        <Container>
            {this.props.location === "review"
            ?
            <div className="singleMethod" >
                <input type="radio" name="shippingMethod"></input>
                <div>
                    <p>{this.state.selectedMethod[0].name}</p>
                    <p>Est. Delivery: {this.state.selectedMethod[0].estDelivery}</p>
                </div>
                <div>
                    <p>{this.state.selectedMethod[0].estPrice}</p>
                </div>
            </div>
            :
            <div>
                <h2>shipping method</h2>
                <div id="iteratedMethods">
                    {iteratedMethods}
                </div>
                <a href="/checkoutBilling">CONTINUE TO PAYMENT</a>
            </div>
            }
            
        </Container>
    )
  }
}

export default ShippingMethod;