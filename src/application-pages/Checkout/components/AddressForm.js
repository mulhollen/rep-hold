import React, {Component} from 'react';
//
import MaterialUIForm from 'material-ui-form'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1.5rem auto;
    
    form {
        display: flex;
        flex-direction: column;
        width: 248px;

        div {
            display: flex;
            justify-content: space-between;
        }

        .multiRow {
            display: flex;
            flex-direction: row;

            * {
                width: 120px;
            }
        }

        .multiRow.checkboxRow {
            display: flex;
            align-items: center;

            span {
                width: 24px;
                height: 24px;
            }

            p {
                width: 220px;
            }
        }
    }
`


class AddressForm extends React.Component {
  submit = (values, pristineValues) => {
    // get all values and pristineValues on form submission
  }



  render() {
    return (
        <Container>
            <MaterialUIForm onSubmit={this.submit}>
                <div className="multiRow">
                    <TextField 
                        id="firstName" 
                        label="First Name"
                        type="text"
                        data-validators="isRequired"  />
            
                    <TextField 
                        id="lastName" 
                        label="Last Name"
                        type="text"
                        data-validators="isRequired"  />
                </div>
                <TextField 
                    id="company" 
                    label="Company"
                    type="text"  />

                <TextField 
                    id="address1" 
                    label="Address 1"
                    type="text" 
                    data-validators="isRequired" />
                
                <TextField 
                    id="address2" 
                    label="Address 2"
                    type="text"  /> 

                <TextField 
                    id="city" 
                    label="City"
                    type="text"
                    data-validators="isRequired"  />
                <div className="multiRow">
                    <Select name="state" data-validators="isRequired">
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Teens</MenuItem>
                        <MenuItem value={20}>Twenties</MenuItem>
                        <MenuItem value={30}>Thirties</MenuItem>
                        <MenuItem value="40+">Fourties +</MenuItem>
                    </Select>
                    <TextField 
                        id="zipCode" 
                        label="Zip Code"
                        type="text"
                        data-validators="isRequired"  />
                </div>
                <TextField 
                    id="phone" 
                    label="Phone"
                    type="tel"
                    data-validators="isRequired"  />
                <TextField 
                    id="email" 
                    label="Email"
                    type="email"
                    data-validators="isRequired"  />
                <div className="multiRow checkboxRow">
                    <Checkbox
                        id="newsletter"
                        checked="true" />
                    <p>Yes, I want to recieve waluv’s emails</p>
                </div>
                {this.props.form === "shipping address"
                ?
                <Button disabled="true" type="submit" onClick={() => this.props.updateCheckout("shipping method")} >CONTINUE TO SHIPPING OPTIONS</Button>                
                : this.props.form === "edit address"
                ?
                <Button disabled="true" type="submit" onClick={() => this.props.updateCheckout("shipping method")}>UPDATE ADDRESS</Button>
                :
                <Button disabled="true" type="submit">SUBMIT</Button>
                }
            </MaterialUIForm>
        </Container>
    )
  }
}

export default AddressForm;