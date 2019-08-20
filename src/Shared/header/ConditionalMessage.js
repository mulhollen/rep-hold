import React from 'react';
import styled from 'styled-components';


const Container = styled.div `

    .title {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.81;
        letter-spacing: normal;
        color:#2f2f2f;
    }

    .text {
        margin: 36px 20px 40px 20px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.29;
        letter-spacing: normal;
        color:#007479;
    }

    .button-container{
        display:flex;
        flex-direction:row;
        justify-content: space-between;

        button {
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-family: ProximaNova;
            font-size: 12px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.17;
            letter-spacing: normal;
            text-align: center;   
            color: #007479;
        }
        
    }

`

const ConditionalMessage = (props) => {
    return (
        props.data === "Email does not exist"
        ?
        <Container>
            <div className="title">
                oops!
            </div>
            <div className="text">
            Hmm, we don't recognize an account associated with that address. Try another email address or quickly signup for an account.
            </div>
            <div className="button-container">
                <div>
                    <button onClick={props.onClick}>Back to Sign In</button>
                </div>
                <div>
                    <button>Create Account</button>
                </div>
            </div>
        </Container>
        : props.data === "WRONG PASSWORD"   
        ?
        <Container>
            <div className="title">
                oops!
            </div>
            <div className="text">
            Hmm, we think your password was a little off. Try another password or easily reset it.
            </div>
            <div className="button-container">
                <div>
                    <button onClick={props.onClick}>Back to Sign In</button>
                </div>
                <div>
                    <button>Reset Password</button>
                </div>
            </div>
        </Container>
        :
        <Container>

        </Container>
    );
};

export default ConditionalMessage;