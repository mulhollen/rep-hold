import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Container = styled.div `

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
    }
        .account-dropdown{
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

    @media screen and (min-width:849px) {
        height:100%;
        width: 320px;
        background-color: #ffffff;
        box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.1);
        left: 0px;

        .account-dropdown {
            padding: 16px 0 16px 16px;
        }
        
        .menu-item {
            padding: 16px 0 0 16px;
        }

        
    }

`

const MyAccount = (props) => {

    const [ accountState, setAccountState ] = useState(false);//UI state to drop down account menu

    const [width, setWidth] = useState(window.innerWidth);//to set width for render
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })



    return (
        width <= 849
        ?
        <Container>
            <div onClick={() => setAccountState(!accountState)} className="menu-item">
                my account
            </div>
            {accountState
            ?
            <div className="account-dropdown">
                <Link onClick={props.onClick} to="/my-info" className="link small-dropdown-menu-items">my info</Link>
                <Link onClick={props.onClick} to="/orders" className="link small-dropdown-menu-items">orders</Link>
                <Link onClick={props.signOut} to="/" className="link small-dropdown-menu-items">sign out</Link>
            </div>
            :
            <div>  </div>
            }
        </Container>
        :
        <Container>
            <div className="menu-item">
                my account
            </div>
            
            <div className="account-dropdown">
                <Link onClick={props.onClick} to="/my-info" className="link small-dropdown-menu-items">my info</Link>
                <Link onClick={props.onClick} to="/orders" className="link small-dropdown-menu-items">orders</Link>
                <Link onClick={props.signOut} to="/" className="link small-dropdown-menu-items">sign out</Link>
            </div>
        </Container>
    );
};

export default MyAccount;