import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Banner from './Banner';
import SignIn from './SignIn';
import { UserContext, CustomerContext } from '../../Context/Store';
import MyAccount from './MyAccount';




const Container = styled.div`
    position: fixed;
    top: 0;
    z-index:2;;

    nav {
        display:flex;
        justify-content:space-between;
        align-items:center;


        width: 100vw;
        height: 72px !important;
        background-color: #ffffff;

        .menu {
            display:flex;
            justify-content:space-evenly;
            align-content:center;
            align-items:center;
            flex-grow: 2;
        }

        .menu-item {
            text-decoration:none;
            font-family: ProximaNova;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 0.88;
            letter-spacing: 0.4px;
            text-align: center;
            color: #007479;
        }

    }

    .small-dropdown {
        position:absolute;
        height: 30px;
        width: 113vw;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        z-index:1;
        background-color: #ffffff;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3);

        .dropdown-menu-items-container{
            width: 50vw;
            display:flex;
            justify-content:space-around;
            align-items:center;
        }


    }
        .link {
            text-decoration:none;
            color: #007479;
            font-family: ProximaNova;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 0.88;
            letter-spacing: 0.4px;
            text-align: center;

        }


        .get-started {
            text-decoration:none;
            width: 160px;
            height: 40px;
            background-color: #007479;

            margin: 0px 48px;
            border-radius: 2px;
            border: solid 1px #007479;

            font-family: ProximaNova;
            font-size: 14px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;

            .link {
                color: #ffffff;
            }

        }


        .page-links{
            display:flex;
            flex-direction: row;
            justify-content:space-evenly;
            align-content:center;
            align-items:center;
            flex-grow:3;
            width: 258px;
        }

        .icons {
            display:flex;
            flex-direction: row;
            justify-content:center;
            align-content:center;
            margin-right: 42px;

            .shoping-cart{
                margin-left: 24px;
            }
        }

        .account-container{
            width: 100%;
            display:flex;
            justify-content:flex-end;
        }


`

const DesktopMenu = (props) => {

    const [shopState, setShopState] = useState(false);//UI state management for the 'shop' button sub-menu
    const [moreDropdown, setMoreDropdown] = useState(false);//UI state management for the 'more' button menu sub-menu
    const [profile, setProfile] = useState(false);//UI state managment for the Profile icon in nav
    const [UserState, setUserState] = useContext(UserContext);//global context to set and detect if a user is logged in
    const [Customer, setCustomer] = useContext(CustomerContext);//global context of

    //toggles shopState and moreDropdown to opposite of current state
    const toggle = () => {
        setShopState(!shopState);
        setMoreDropdown(!moreDropdown)
    }

    //function that sets both sub-menu states to false for UI state manangment
    const falsy = () => {
        setMoreDropdown(false);
        setShopState(false);
    }

    //sign out function:
    const signOut = () => {
        //setCustomer sets the global Customer object email field to an empty string to ensure the CreateAccount or SignIn components do not use cache to constantly sign user back in.
        setCustomer({ ...Customer, email: "" })

        //setUserState sets global user context to false for rendering of user non-spefic components and the hiding of user specifc components
        setUserState({...UserState, userID:'guest'});
    }


    return (
        <Container>
            <Banner
                open={false}
                promo={"Free Shipping with $99 purchase"}
            />
            <nav>
                <Link to="/" className="logo">
                    <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-nav-logo.png" alt="logo" width="126px" height="28px" />
                </Link>

                <div className="menu">
                    <div className="page-links">
                        <div onClick={shopState === false && moreDropdown === true ? toggle : () => setShopState(!shopState)} className="menu-item">
                            shop
                        </div>
                        <Link to="/WhyWeWaluv" onClick={falsy} className="menu-item">
                            why we waluv
                        </Link>
                        <div onClick={moreDropdown === false && shopState === true ? toggle : () => setMoreDropdown(!moreDropdown)} className="menu-item">
                            more
                        </div>
                    </div>
                    <button onClick={props.onClick} className="get-started">
                        <Link to="/Uploader" className="link">Get Started</Link>
                    </button>
                    <div className="icons">
                        <button onClick={() => setProfile(!profile)} className="account-profile">
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/ic-account.png" alt="profile-icon" width="24px" height="24px" />
                        </button>
                        <Link to="/cart" className="shoping-cart">
                            <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/ic-cart.png" alt="cart-icon" width="24px" height="24px" />
                        </Link>
                    </div>
                </div>
            </nav>
            {shopState//if 'shop' in the nav is clicked, shopState is set to true and renders the shop sub-menu, if 'shop' is clicked again or not at all, shopState is set to false, rendering an empty div.
                ?
                <div className="small-dropdown">
                    <div className="dropdown-menu-items-container">
                        <Link onClick={() => setShopState(false)} to="/Metal" className="link small-dropdown-menu-items">metal prints</Link>
                        <Link onClick={() => setShopState(false)} to="/Acrylic" className="link small-dropdown-menu-items">acrylic prints</Link>
                    </div>
                </div>
                :
                <div></div>}
            {moreDropdown//if 'more' in the nav is clicked, moreDropdown is set to true and the 'more' sub-menu is rendered. If it is clicked again, or has not been clicked at all, moreDropdown is false, and renders an empty div
                ?
                <div className="small-dropdown">
                    <div className="dropdown-menu-items-container">
                        <Link onClick={() => setMoreDropdown(false)} to="/contact" className="link small-dropdown-menu-items">contact us</Link>
                        <Link onClick={() => setMoreDropdown(false)} to="/FAQs" className="link small-dropdown-menu-items">FAQs</Link>
                        <Link onClick={() => setMoreDropdown(false)} to="/inspiration" className="link small-dropdown-menu-items">inspiration</Link>
                        <Link onClick={() => setMoreDropdown(false)} to="/shipping-&amp;-returns" className="link small-dropdown-menu-items">shipping &amp; returns</Link>
                    </div>
                </div>
                :
                <div></div>
            }

            {profile//if the profile icon is clicked, profile is set to true, and renders either the SignIn component or the MyAccount component. If the profile icon is clicked while one of these components are rendered, or if the profile state is set on false, an empty div is rendered
                ?
                <div>
                    {UserState.userID === 'guest'//if a user is not detected, UserState is set to false and renders the SignIn component. Otherwise the MyAccount component is rendered.
                        ?
                        <div className="account-container">
                            <SignIn />
                        </div>
                        :
                        <div className="account-container">
                            <MyAccount
                                signOut={signOut}
                                onClick={props.onClick}
                            />
                        </div>}
                </div>
                :
                <div></div>
            }

        </Container>
    );
};

export default DesktopMenu;
