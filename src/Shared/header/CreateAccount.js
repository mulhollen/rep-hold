import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import { ApiUrlContext, SiteIDContext, UserContext, CustomerContext } from '../../Context/Store'


const Container = styled.div`
    .create-account {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.81;
        letter-spacing: normal;
        color: #2f2f2f;
    }

    .create-account-dropdown{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
       
        color: #007479;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 20px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.88;
        letter-spacing: normal;
        border: none;
        border-bottom: 2px solid #007479;
    }

    input {
        width: 248px;
        height: 40px;
    }

    input::placeholder {
        color: #007479;
        border-bottom: 1px solid #ccd8d4;
    }

    .form {
        margin: 30px 0 0 18px;
    }


    .signin-button{
        text-decoration:none;
        background-color:white;

        margin: 16px 0 16px 0;
        width: 248px;
        height: 40px;
        border-radius: 2px;
        border: solid 1px #007479;

        font-family: ProximaNova;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #007479;

        align-self:center;
    }





    .mid-section {
        display:flex;
        justify-content: space-evenly;
        align-items:center;
        width:248px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #2f2f2f;

        margin:8px 0 24px 0;

        .mid-bars{
            width:108px;
            height:1px;
            background-color: #ccd8d4;
        }
    }


    .my-facebook-button {
        width: 248px;
        height: 40px;
        font-family: ProximaNova;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        border-radius: 2px;
        border:none;
        background-color: #4267b2 ;
    }

    .my-google-button {
        width: 248px;
        border-radius: 2px;
        margin: 16px 0 50px 0;
    }
    

`




const CreateAccount = () => {
    const [ createDropdown, setCreateDropdown ] = useState(false);//UI state management for create account dropdown
    
    const [inputObject, setInputObject] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password":""
    })
    
    
        
    const [ API_URL ] = useContext(ApiUrlContext);//context state for base URL of api calls
    const [ SITE_ID ] = useContext(SiteIDContext);//context state for site ID of api calls
    const [ UserState, setUserState ] = useContext(UserContext);//to set and detect global user context
    const [Customer, setCustomer] = useContext(CustomerContext);//to set and send global customer object



    const responseSocial = (response) => {
        setCustomer({
            ...Customer,
            "first_name": response.profileObj ? response.profileObj.givenName : response.first_name || Customer.first_name,
            "last_name": response.profileObj ? response.profileObj.familyName : response.last_name || Customer.last_name,
            "fbORG": true,
            "create_new_user": false,
            "email": response.profileObj ? response.profileObj.email : response.email || Customer.email,
            "password": response.profileObj ? response.googleId : response.id || Customer.metafields[0].value
        })    
    }



    //function to set the fields of inputObject with the input from user based on the name attribute of the input element. To avoid confusion, the name attribute and inputObject feild should always be the same. 
    const handleInput = (e) => {
        switch (e.target.name) {
            case 'first_name':
                setInputObject({...inputObject, first_name: e.target.value})
                break;
            case 'last_name':
                setInputObject({...inputObject, last_name: e.target.value})
                break;
            case 'email':
                setInputObject({...inputObject, email: e.target.value})
                break;
            case 'password':
                setInputObject({...inputObject, password: e.target.value})
                break;
            default:
          }
    }

    const handleSubmit = () => {
        setCustomer({
            ...Customer,
            "first_name": inputObject.first_name || Customer.first_name,
            "last_name": inputObject.last_name || Customer.last_name,
            "fbORG": false,
            "create_new_user": true,
            "email": inputObject.email || Customer.email,
            "password": inputObject.password || Customer.password,
        })
    }


    useEffect(() => {
        
        if (Customer.email !== "")
        axios.post(`${API_URL}:8080/api/${SITE_ID}/customer/auth`,  {"customer":Customer})
                .then(res => {
                    if(res.data.id) {setUserState({...UserState, userID:res.data.id})}
                })
                .catch(err => {
                    console.log(err);
                });
    }, [Customer, API_URL, SITE_ID, setUserState])

    




    return (
        <Container>
            <div onClick={() => setCreateDropdown(!createDropdown)} className="create-account">
                create account 
            </div>
            {createDropdown
                ?
                <div className="create-account-dropdown">
                    <label className='form'>
                        <input 
                            type="text" 
                            name="first_name"
                            placeholder="first name" 
                            onChange={handleInput}
                        />
                        <input 
                            type="text" 
                            name="last_name"
                            placeholder="last name" 
                            onChange={handleInput}
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="email" 
                            onChange={handleInput}
                        />
                        <input 
                            type="password" 
                            name="password"
                            placeholder="password" 
                            onChange={handleInput}
                        />
                    </label>
                    <input type="submit" value="SIGN UP"  onClick={handleSubmit} className="signin-button" />

                    <div className="mid-section">
                        <div className="mid-bars"></div>
                        <div>OR</div>
                        <div className="mid-bars"></div>
                    </div>

                    <FacebookLogin
                        appId="586513698541237"
                        autoLoad={false}
                        fields="id,email,last_name,address,first_name,location"
                        scope="public_profile"
                        callback={responseSocial}
                        cssClass="my-facebook-button"
                        textButton="CONNECT WITH FACEBOOK"
                    />


                    <GoogleLogin
                        clientId="863450477667-p4fp5j8ehd1pop5qtob0h8l1f2grfpoa.apps.googleusercontent.com"
                        buttonText="CONNECT WITH GOOGLE"
                        onSuccess={responseSocial}
                        onFailure={responseSocial}
                        className="my-google-button"
                    />

                </div>
                :
                <div></div>
            }
        </Container>
    );
};

export default CreateAccount;