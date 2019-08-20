import React, {Component} from 'react';
//
import MaterialUIForm from 'material-ui-form'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const AddressHolder = styled.div`
    background: #f0f0f0;

    #newAddress {
        background-color: #fff;
        height: 72px;
        display: flex;
        justify-content: center; 
        align-items: center;

        button {
            width: 248px;
            height: 40px;
            border-radius: 2px;
            background-color: #007479;
            border: 1px solid #007479;

            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                margin-right: .25rem;
            }
          }

          button:hover {
            background-color: #fff;
            color: #007479;
          }
        
        }
    }


`

const Container = styled.div`
    width: 616px;
    height: 88px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-bottom: 1rem;

    > div:first-of-type {
        display: flex;
        align-items: center;
        margin-left: .5rem;

        > div {
            margin-left: 1rem;
        }

        h6 {
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 10px;
            font-weight: 600;
            line-height: 0.8;
            color: #007479;
            margin: 0 0 6px 0;
        }

        p {
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
            color: #2f2f2f;
            margin: 0;
        }
    }

    > div:last-of-type {
        margin-right: 1rem;
        align-self: center;
        cursor: pointer;
    }
`



class CompletedAddress extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            addressArray: [
                {
                    name: 'Arthur Smith',
                    address1: '1820 Tammany Drive',
                    address2: 'suite 3',
                    city: 'Tallmadge',
                    state: 'OH',
                    zip: '44278'
                },
                {
                    name: 'Mark Mulhollen',
                    address1: '472 Canterbury Way',
                    address2: '',
                    city: 'Nashville',
                    state: 'TN',
                    zip: '37216'
                },
            ]
        }
    }


    componentDidMount() {
        document.getElementById("0shippingAddress").checked = true;
    }


  render() {


    const iteratedAddress = this.state.addressArray.map((item, key) =>
       

                <Container id={key+"shippingAddress"}>
                    <div>
                        <input id="shipTo" type="radio"></input>
                        <div>
                            <h6>Shipping To:</h6>
                            <div>
                                <p>{item.name}</p>
                                {
                                !item.address2
                                ?
                                <p>{item.address1}</p>
                                :
                                <p>{item.address1}&nbsp;{item.address2}</p>
                                }
                                <p>{item.city},&nbsp;{item.state}&nbsp;{item.zip}</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => this.props.updateCheckout("edit address")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h24v24H0z"/>
                                <path fill="#CCD8D4" fill-rule="nonzero" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                            </g>
                        </svg>
                    </div> 
                </Container>
        );

    return (
        <div>
            <AddressHolder>
                {iteratedAddress}

                {this.props.location === "billing address"
                ?
                <></>
                :
                <div id="newAddress">
                    <button onClick={() => this.props.updateCheckout("shipping address")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h24v24H0z"/>
                                <path fill="#CCD8D4" fill-rule="nonzero" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                            </g>
                        </svg>
                        ADD NEW ADDRESS
                    </button>
                </div>
                }
            </AddressHolder>
        </div>
    )
  }
}

export default CompletedAddress;