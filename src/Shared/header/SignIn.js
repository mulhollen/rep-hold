import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import { ApiUrlContext, SiteIDContext, UserContext, CustomerContext } from '../../Context/Store';
import ConditionalMessage from './ConditionalMessage';
import {Link} from 'react-router-dom'

const ModalHolder = styled.div`
    display: flex;
    height: 400px;

    .columnRight {
        width: 324px;
        border-radius: 1px;
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        align-items: center;
    
        button:first-of-type {
            position: absolute;
            right: 1rem;
            top: 1rem;
            border: none;
            background-color: #f0f0f0;
        }
        
        button:first-of-type:hover {
            background-color: #f0f0f0;
        }

        h3 {
            font-size: 24px;
            font-weight: bold;
            line-height: 1.25;
            color: #2f2f2f;
            margin: 36px auto 137px;
        }

        button:last-of-type {
            border: none;
            width: 248px;
            height: 40px;
            margin-bottom: 1.5rem;
            padding: 0;

        }

        button:last-of-type a {
            height: 40px;
            border-radius: 2px;
            background-color: #2f2f2f;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #2f2f2f;

            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            text-decoration: none;

        }

        button:hover a {
            background-color: #fff;

            color: #2f2f2f;

        }

        p {
            margin: 0 38px;
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 14px;
            font-weight: 600;
            line-height: 1.29;
            text-align: center;
            color: #2f2f2f;
        }
        
    }
`

const Container = styled.div`

    .signIn h3 {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.81;
        letter-spacing: normal;
        color: #2f2f2f;
        margin: 0;
    }

    .signIn-dropdown{
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
    }

    input {
        width: 248px;
        height: 40px;
        border: none;
        border-bottom: 1px solid #ccd8d4;
    }

    input[type=submit] {
        height: 40px;
    }
    input[type=text] {
        height: 16px;
        padding-top: 24px;
    }

    input::placeholder {
        color: #007479;
    }

    input:focus {
        outline: none;
        border-bottom: 1px solid #007479;

    }

    .form {
        margin: 30px 0 0 18px;
    }

    .form.mediaSpecific {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px 0 0 0;
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


    .signin-button.modalSpecific {
        background-color: #007479;
        color: #fff;
    }

    .signin-button.modalSpecific:hover {
        background-color: #fff;
        color: #007479;
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

    .socialAuth {
        display: flex;
        flex-direction: column;
    }

    .socialAuth.modalSpecific {

        p {
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            color: #2f2f2f;
            margin-top: 0;
        }

        >div {
            display: flex;
        }

        .my-facebook-button {
            width: 124px;
            height: 40px;
        }

        .my-google-button {
            width: 124px;
            height: 40px;
            margin: 0 0 0 1rem;
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
        background-color: #4267b2;

    }

    .my-google-button {
        width: 248px;
        border-radius: 2px;
        margin: 16px 0 50px 0;
    }

    .button-container{
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        margin:0 36px 24px 36px;

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

    .button-container.modalSpecific {
        margin: 0;
        align-self: flex-start;

        button {
            border: none;
            padding-left: 0px;
        }
    }

    @media screen and (min-width:849px) {
        height:100%;
        width: 320px;
        background-color: #ffffff;
        box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.1);
        left: 0px;

        .signIn h3 {
            padding: 16px 0 0 16px;
        }


        .signIn h3.modalSpecific {
            font-size: 24px;
            font-weight: bold;
            line-height: 1.25;
            color: #2f2f2f;
            margin: 0;
            text-align: center;
            padding: 36px 0 0 0;
        }

        .signIn-dropdown {
            padding: 0 0 0 16px;
        }

        .signIn-dropdown.modalSpecific {
            padding: 0;
        }
    }
    

`

const SignIn = (props) => {

    const [signIn, setSignIn] = useState(false);//UI state to drop down sign in menu
    const [inputObject, setInputObject] = useState({
        email: "",
        password: ""
    })
    const [errMessage, setErrMessage] = useState('')

    const [API_URL] = useContext(ApiUrlContext);//for base URL of api calls
    const [SITE_ID] = useContext(SiteIDContext);//for site ID of api calls
    const [UserState, setUserState] = useContext(UserContext);//to set the user context to true for other components
    const [Customer, setCustomer] = useContext(CustomerContext);//for customer data object



    const [width, setWidth] = useState(window.innerWidth);//to set width for render
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })




    const responseSocial = (response) => {
        setCustomer({
            ...Customer,
            "fbORG": true,
            "email": response.profileObj ? response.profileObj.email : response.email || Customer.email,
            "password": response.profileObj ? response.googleId : response.id || Customer.metafields[0].value,
        })
    }

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'email':
                setInputObject({ ...inputObject, email: e.target.value })
                break;
            case 'password':
                setInputObject({ ...inputObject, password: e.target.value })
                break;
            default:
                console.log('random stuff');
        }
    }

    const handleSubmit = () => {
        setCustomer({
            ...Customer,
            "fbORG": false,
            "create_new_user": false,
            "email": inputObject.email || Customer.email,
            "password": inputObject.password || Customer.password,
        })
    }

    useEffect(() => {
        if (Customer.email !== "")
            console.log({ "customer": Customer })
            axios.post(`${API_URL}:8080/api/${SITE_ID}/customer/auth`, { "customer": Customer })
                .then(res => {
                    console.log(res);
                    if (res.data.id) {
                        setUserState({...UserState, userID:res.data.id})
                    } else {
                        setErrMessage(res.data)
                    }
                })
                .catch(err => {
                    console.log("this is the err message from whatever",err);
                });
    }, [Customer, API_URL, SITE_ID, setUserState])

    return (
        width <= 849
            ?
            <Container>
                {errMessage === ""
                ?
                <>
                    <div onClick={() => setSignIn(!signIn)} className="signIn">
                        sign in
                    </div>
                    {signIn
                        ?
                        <div className="signIn-dropdown">
                            <label className='form'>
                                <input
                                    onChange={handleInput}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    type="text"
                                />
                                <input
                                    onChange={handleInput}
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    type="text"
                                />
                            </label>
                            <input type="submit" value="SIGN IN" onClick={handleSubmit} className="signin-button" />

                            <div className="mid-section">
                                <div className="mid-bars"></div>
                                <div>OR</div>
                                <div className="mid-bars"></div>
                            </div>
                            <FacebookLogin
                                appId="586513698541237"
                                fields="id,name,email"
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
                        <div></div>}
                    </>
                :
                <div>
                    <ConditionalMessage
                        data={errMessage}
                        onClick={() => setErrMessage("")}
                    />
                </div>
                }
            </Container>
            :
            <div>
            {/* desktop is modal or is it not */}
                {!props.modal
                ?
                <Container>
                    <div className="signIn">
                        <h3>sign in</h3>      
                    </div>
                    <div className="signIn-dropdown">
                        <label className='form'>
                            <input
                                onChange={handleInput}
                                name="email"
                                placeholder="email"
                                type="text"
                            />
                            <input
                                onChange={handleInput}
                                name="password"
                                placeholder="password"
                                type="text"
                             />
                        </label>
                        <input type="submit" value="SIGN IN" onClick={handleSubmit} className="signin-button" />
                        <div className="mid-section">
                            <div className="mid-bars"></div>
                            <div>OR</div>
                            <div className="mid-bars"></div>
                        </div>
                        <div className="socialAuth">
                            <FacebookLogin
                                appId="586513698541237"
                                fields="id,name,email"
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
                        
                    </div>
                    <div className="button-container">
                        <div>
                            <button onClick={props.onClick}>Forgot Password?</button>
                        </div>
                        <div>
                            <button>Create Account</button>
                        </div>
                    </div>
                </Container>
                :
                <ModalHolder>
                    <Container>
                        <div className="columnLeft">
                            <div className="signIn">
                                <h3 className="modalSpecific">returning customers</h3>
                            </div>
                            <div className="signIn-dropdown modalSpecific">
                                <div>
                                    <label className='form mediaSpecific'>
                                        <input
                                            onChange={handleInput}
                                            name="email"
                                            placeholder="email"
                                            type="text"
                                        />
                                        <input
                                            onChange={handleInput}
                                            name="password"
                                            placeholder="password"
                                            type="text" 
                                        />
                                    </label>
                                    <div className="button-container modalSpecific">
                                        <div>
                                            <button onClick={props.onClick}>Forgot Password?</button>
                                        </div>
                                    </div>
                                </div>   
                                <input type="submit" value="SIGN IN &amp; CHECKOUT" onClick={handleSubmit} className="signin-button modalSpecific" />
                                <div className="mid-section">
                                    <div className="mid-bars"></div>
                                    <div>OR</div>
                                    <div className="mid-bars"></div>
                                </div>
                                <div className="socialAuth modalSpecific">
                                    <p>Login with</p>
                                    <div>
                                        <FacebookLogin
                                            appId="586513698541237"
                                            fields="id,name,email"
                                            scope="public_profile"
                                            callback={responseSocial}
                                            cssClass="my-facebook-button"
                                            textButton="FACEBOOK"
                                            />


                                        <GoogleLogin
                                            clientId="863450477667-p4fp5j8ehd1pop5qtob0h8l1f2grfpoa.apps.googleusercontent.com"
                                            buttonText="GOOGLE"
                                            onSuccess={responseSocial}
                                            onFailure={responseSocial}
                                            className="my-google-button"
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <div className="columnRight">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fill-rule="nonzero">
                                    <path d="M0 0h24v24H0z"/>
                                    <g transform="translate(3 3)">
                                        <rect width="21.5" height="1" x="-1.75" y="9.104" fill="#CDD9D5" rx=".5" transform="rotate(135 9 9.604)"/>
                                        <rect width="21.5" height="1" x="-1.396" y="8.75" fill="#CDD9D5" rx=".5" transform="rotate(45 9.354 9.25)"/>
                                        <rect width="21.5" height="1" x="-1.75" y="8.396" fill="#00757A" rx=".5" transform="rotate(135 9 8.896)"/>
                                        <rect width="21.5" height="1" x="-2.104" y="8.75" fill="#00757A" rx=".5" transform="rotate(45 8.646 9.25)"/>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <h3>quick checkout</h3>
                        <button>
                            <Link to="/CheckoutShipping">CHECKOUT AS GUEST</Link>
                        </button>
                        <p>You'll have the option to create an account after checkout.</p>
                    </div>
                </ModalHolder>
                }
        </div>
    );
};

export default SignIn;