import React, { Component } from 'react';
import styled from 'styled-components';


import MaterialUIForm from 'material-ui-form'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



const BillingContainer = styled.div `
flex-direction: column;

    >div {
    
        width: 100%;
    }

    > div:first-of-type {
        margin-bottom: 1rem;
    }


    .upperCard {
        form {

            .MuiTextField-root {
                width: 256px;
            }

            .MuiInputBase-root {
                width: 80px;
            }

        }
    }

    // this is the gift store credit
    >div:last-of-type {
        dislay: flex;
    }
   
`

class PaymentMethod extends Component {

    constructor(props) {
        super(props);
        this.state = {

            name: 'Arthur Smith',
            address1: '1820 Tammany Drive',
            address2: 'suite 3',
            city: 'Tallmadge',
            state: 'OH',
            zip: '44278'
              
        }
    }



      render() {        
        


        return (
            <BillingContainer>
                <div>
                    <div className="upperCard">
                        <MaterialUIForm onSubmit={this.submit}>
                                <TextField 
                                    id="ccNumber" 
                                    label="Credit/Debit Card Number #"
                                    type="text"
                                    data-validators="isRequired"  />
                                    <div>
                                        <Select name="month" data-validators="isRequired">
                                            <MenuItem value="Exp Month"></MenuItem>
                                            <MenuItem value={1}>01</MenuItem>
                                            <MenuItem value={2}>02</MenuItem>
                                            <MenuItem value={3}>03</MenuItem>
                                            <MenuItem value={4}>04</MenuItem>
                                            <MenuItem value={5}>05</MenuItem>
                                            <MenuItem value={6}>06</MenuItem>
                                            <MenuItem value={7}>07</MenuItem>
                                            <MenuItem value={8}>08</MenuItem>
                                            <MenuItem value={9}>09</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={11}>11</MenuItem>
                                            <MenuItem value={12}>12</MenuItem>
                                        </Select>
                                        <Select name="year" data-validators="isRequired">
                                            <MenuItem value="Exp Year"></MenuItem>
                                            <MenuItem value={2019}>2019</MenuItem>
                                            <MenuItem value={2020}>2020</MenuItem>
                                            <MenuItem value={2021}>2021</MenuItem>
                                            <MenuItem value={2022}>2022</MenuItem>
                                            <MenuItem value={2023}>2023</MenuItem>
                                            <MenuItem value={2024}>2024</MenuItem>
                                            <MenuItem value={2025}>2025</MenuItem>
                                            <MenuItem value={2026}>2026</MenuItem>
                                            <MenuItem value={2027}>2027</MenuItem>
                                            <MenuItem value={2028}>2028</MenuItem>
                                            <MenuItem value={2029}>2029</MenuItem>
                                            <MenuItem value={2030}>2030</MenuItem>
                                        </Select>
                                        <TextField 
                                            id="ccv" 
                                            label="CCV"
                                            type="text"
                                            data-validators="isRequired"  />
                                    </div>
                        </MaterialUIForm>
                        <button onClick={() => this.props.updateCheckout("billing address")}>USE THIS CARD</button>
                    </div>
                    <div className="lowerCard">
                        <div>
                            <h6>Billing Address</h6>
                            <p>{this.state.name}</p>
                            {
                            !this.state.address2
                            ?
                            <p>{this.state.address1}</p>
                            :
                            <p>{this.state.address1}&nbsp;{this.state.address2}</p>
                            }
                            <p>{this.state.city},&nbsp;{this.state.state}&nbsp;{this.state.zip}</p>
                        </div>

                        <div onClick={() => this.props.updateCheckout("billing address")}>
                            Change Address
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h24v24H0z"/>
                                    <path fill="#CCD8D4" fill-rule="nonzero" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </g>
                            </svg>
                        </div> 
                    </div>
                </div>
                <div>
                    <div>
                        <h3>add gift card/store credit</h3>
                        <TextField 
                            id="giftCard" 
                            label="enter code here"
                            type="text"
                              />
                    </div>
                    <button>APPLY CREDIT</button>
                </div>
                <div>
                    <a href="/CheckoutReview">CONTINUE TO REVIEW</a>
                </div>

            </BillingContainer>
        );
    }
}


export default PaymentMethod;