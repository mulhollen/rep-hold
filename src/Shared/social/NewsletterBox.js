import React, { useContext } from 'react';
import { ApiUrlContext, SiteIDContext, UserContext } from '../../Context/Store';
import axios from 'axios';
import styled from 'styled-components';

// emoji cheat sheet
// ************** NOT EVERY EMOJI WORKS DOUBLE CHECK B4 LIVE **************
// https://www.webfx.com/tools/emoji-cheat-sheet/
let emojis = require('emojis')


const NewsletterContainer = styled.div `
    width: 296px;
    height: 267px;
    padding: 1.5rem;
    background-color: #fff;
    box-shadow: -5px 2px 10px 0 rgba(0, 0, 0, 0.2);

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 20px;
        font-weight: bold;
        line-height: 1.2;
        color: #870051;
        margin-bottom: 2.25rem;
    }

    input {
        width: 248px;
        height: 16px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: normal;
        color: #870051;
        border: none;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 1.5rem;
    }
        input::placeholder {
            color: #870051;
        }

        input:focus {
            border-bottom: 1px solid #ccd8d4;
            outline: none;
        }

        button {
            width: 248px;
            height: 40px;
            object-fit: contain;
            border-radius: 2px;
            background-color: #870051;
            border: 1px solid #870051;
            boder-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: #fff;
        }

            button:hover {
                color: #870051;
                background-color: #fff;
            }

    #newsletterSubmitted {
        display: none;
        height: 100%;
        
        p {
            font-size: 42px;
            margin: 0;
        }
    }
   
`

const NewsletterBox = () => {

    const [ API_URL ] = useContext(ApiUrlContext);//for base URL of api calls
    const [ SITE_ID ] = useContext(SiteIDContext);//for site ID of api calls
    const [ UserState, setUserState ] = useContext(UserContext);//to set the user context to true for other components     


    function postEmail() {
        var email = document.getElementById("emailInput").value
       
        axios.post(`${API_URL}:8080/api/${SITE_ID}/customer`, {"customer": {"email": email}} )
            .then(res => {
                document.getElementById("newsletterUNSubmitted").style.display = "none";
                document.getElementById("newsletterSubmitted").style.display = "flex";
            })
            .catch(err => {
                console.log("error posting newsletter email",err);
            });
    }

    console.log("USER STATE", UserState)
        return (
            UserState.userID === "guest"
            ?
            <NewsletterContainer>
                <div id="newsletterUNSubmitted">
                    <p>We've got plans. And free shipping is a part of it. Sign up to receive free shipping on future products.</p>
                    <input id="emailInput" type="text" placeholder="Email"></input>
                    <button onClick={postEmail}>SUBSCRIBE</button>
                </div>
                <div id="newsletterSubmitted">
                    <p>ttyl {emojis.unicode(`${'heart_eyes'}`)}</p>
                </div>
            </NewsletterContainer>
            :
            <></>
        );
}


export default NewsletterBox;