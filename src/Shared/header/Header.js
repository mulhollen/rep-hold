import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Banner from './Banner'
import { Link } from 'react-router-dom'
import MobileMenu from './MoblieMenu';
import MobileDropdown from './MobileDropdown';
import DesktopMenu from './DesktopMenu';




const Container = styled.div`

    .column-nav{

        position: fixed;
        top: 0;
        z-index:2;

    }


    .mobile-dropdown{
        background-color:white;
        width: 320px;
    }



    nav {

        display:flex;
        justify-content:space-evenly;
        align-items:center;


        width: 100vw;
        height: 52px;
        background-color: #ffffff;
    }

    .shoping_cart{
        display:flex;
        align-items: flex-end;
    }


    .logo{
        margin: 0 10% 0 10%;
    }



`

const Header = (props) => {


    const [open, setOpen] = useState(false)//simple UI state for the hamburger mobile menu

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
            <div className="column-nav">
                <Banner
                    open={false}
                    promo={"Free Shipping with $99 purchase"}
                />
                <nav>
                    <MobileMenu
                        open={open}
                        onClick={() =>setOpen(!open)}
                    />
                    <Link onClick={() =>setOpen(false)} to="/" className="logo">
                        <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/waluv-nav-logo.png" alt="logo" width="126px" height="28px"/>
                    </Link>
                    <Link onClick={() => setOpen(false)} to="/cart" className="shoping_cart">
                        <img src="http://d3oqjm9mexg0ob.cloudfront.net/waluv/site%20assets/ic-cart.png" alt="logo" width="24px" height="24px" />
                    </Link>
                </nav>

            </div>
            {open
            ?
            <div className="mobile-dropdown">
                <MobileDropdown
                    onClick={() =>setOpen(!open)}
                />
            </div>
            :
            <div></div>
            }
        </Container>
        :
        <Container>
            <DesktopMenu
                onClick={() =>setOpen(!open)}
            />
        </Container>
    );
};

export default Header;
