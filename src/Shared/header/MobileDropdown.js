import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './SignIn';
import { UserContext, CustomerContext } from '../../Context/Store';
import CreateAccount from './CreateAccount';
import MyAccount from './MyAccount';


const Container = styled.div`
    position:absolute;
    width: 100vw;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    z-index:1;
    background-color: #ffffff;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3);

    .link{
        text-decoration:none;
        color: #007479;
    }

    .get-started{
        text-decoration:none;
        background-color:white;

        margin: 16px 0 16px 0;
        width: 288px;
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

    .menu-item{
        text-decoration:none;

        margin: 16px 0 16px 0;
        width: 288px;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-family: ProximaNova;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.81;
        letter-spacing: normal;
        color: #2f2f2f;

        .small-dropdown {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:flex-start;


            color: #007479;
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
            font-family: ProximaNova;
            font-size: 16px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 0.88;
            letter-spacing: normal;

            .small-dropdown-menu-items {
                margin: 20px 0 8px 16px;
            }
        }
    }

    @media screen and (min-width:415px) {
        height:100%;
        width: 320px;
    }

`
const HorizontalLine = styled.div `
    width: 288px;
    align-self:center;
    height:1px;
    background-color:#007479;
    opacity: .1;
`



const MobileDropdown = (props) => {

    const [shopState, setShopState] = useState(false);//UI state management for shop menu dropdown
    const [moreDropdown, setMoreDropdown] = useState(false);//UI state management for more... menu dropdown]
    // const [accountDropdown, setAccountDropdown] = useState(false);
    const [UserState, setUserState] = useContext(UserContext);
    const [Customer, setCustomer] = useContext(CustomerContext);//for customer data object



    const signOut = () => {
        setCustomer({...Customer, email:""})
        setUserState({...UserState, userID: 'guest'});
    }

    return (
        <Container>
            <button onClick={props.onClick} className="get-started">
                <Link to="/Uploader" className="link">Get Started</Link>
            </button>

            <HorizontalLine />

            <div onClick={() => setShopState(!shopState)} className="menu-item">
                shop
            {shopState
            ?
            <div className="small-dropdown">
                <Link onClick={props.onClick} to="/Metal" className="link small-dropdown-menu-items">metal prints</Link>
                <Link onClick={props.onClick} to="/Acrylic" className="link small-dropdown-menu-items">acrylic prints</Link>
            </div>
            :
            <div></div>
            }
            </div>

            <HorizontalLine />


            {UserState.userID === 'guest'
            ?
            <>
                <div  className="menu-item">
                    <SignIn />
                </div>
                
                <HorizontalLine />

                <div className="menu-item">
                    <CreateAccount />
                </div>
            </>
            :
            <>
                <div className="menu-item">
                    <MyAccount
                        signOut={signOut}
                        onClick={props.onClick}
                    />
                </div>
            </>}





            <HorizontalLine />

            <Link onClick={props.onClick} to="/WhyWeWaluv" className="menu-item">
                why we waluv
            </Link>

            <HorizontalLine />

            <div onClick={() => setMoreDropdown(!moreDropdown)} className="menu-item">
                more...
                {moreDropdown
                ?
                <div className="small-dropdown">
                    <Link onClick={props.onClick} to="/contact" className="link small-dropdown-menu-items">contact us</Link>
                    <Link onClick={props.onClick} to="/FAQs" className="link small-dropdown-menu-items">FAQs</Link>
                    <Link onClick={props.onClick} to="/inspiration" className="link small-dropdown-menu-items">inspiration</Link>
                    <Link onClick={props.onClick} to="/shipping-&amp;-returns" className="link small-dropdown-menu-items">shipping &amp; returns</Link>
                </div>
                :
                <div></div>
            }
            </div>

            <HorizontalLine />


        </Container>
    );
};

export default MobileDropdown;
