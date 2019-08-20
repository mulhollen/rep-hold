import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

// components
import NewsletterBox from '../social/NewsletterBox';

const FullFooter = styled.div`
    width: 100%;
    max-width: 870px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;



    #newsletterFloater {
        display: none;

        @media (min-width: 1000px) {
            display: flex;
            position: relative;
            bottom: 37px;
            background: #fff;
            left: 63px;
        }
    }
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;

    @media (min-width: 1000px) {
        padding: 2.25rem 0 1.5rem;
    }
`

const FooterTop = styled.div`
    width: 100%;
    padding: 1rem 0 0 0;

    .mobile-menu-divider {
        height: 0.5px;
        border-bottom: solid 0.5px #ccd8d4;
        width: 100%;
        margin: .75rem auto 1rem;
    }

    @media (min-width: 1000px) {
        display: flex;
        margin: 0;

        .mobile-menu-divider {
            display: none;
        }
    }
`

const Accordion = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 0 1.25rem;

    p {
        margin: 0;
        font-size: .875rem;
        font-weight: bold;
        color: #007479;

    }
    @media (min-width: 1000px) {
        margin: 0;

        svg {
            display: none;
        }
    }
`

const Panel = styled.div`
    display: none;
    flex-direction: column;

    a {
        margin: 1rem 1rem 1rem 3rem;
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: .75rem;
        font-weight: 600;
        line-height: 1.17;
        color: #000000;
        text-decoration: none;
    }

    @media (min-width: 1000px) {
        display: flex;
        width: 8rem;

        a {
            margin: 1rem 1.25rem 1rem .75rem;
        }
    }
`

const FooterBottom = styled.div`
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .socialIcons {
        margin: 1.5rem 0;
        flex-direction: row;
        justify-content: center;
        
        a {
            margin: 0 .75rem;
        }
    }

    .footerLogo {
        align-self: center;
        margin: 0;
    }

    p {
        margin: .5rem auto 1rem auto;
        font-size: .75rem;
        line-height: 1.5;
        text-align: center;
        color: #007479;
      }

      @media (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        width: 100%;

            .socialIcons {
                margin: 1.5rem 0 0;
            }
        
            div {
                width: unset;
            }

            p {
                margin: .5rem 3.75rem 0 0;
            }
      }
    
`

var acc = document.getElementsByClassName("accordion");
var i;

function accordionListener () {

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
            
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "flex") {
                panel.style.display = "none";
            } else {
                panel.style.display = "flex";
            }
            if (this.children[1]) {
                if (this.children[1].style.transform === "rotate(180deg)") {
                    this.children[1].style.transform = "rotate(0deg)";
                } else {
                    this.children[1].style.transform = "rotate(180deg)";
                }
            }
            
        });
    }
}

class Footer extends React.Component {


    componentDidMount() {
        if(window.innerWidth < 1000) {
            accordionListener();
        }
    }

  

    render() {     

    return (
        <FullFooter>
            <Container>
                <FooterTop>
                    <div>
                        <Accordion className="accordion">
                            <p>Company</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                                <path fill="#CCD8D4" fillRule="evenodd" d="M11.295.705a.998.998 0 0 0-1.412 0L6 4.58 2.117.706A.997.997 0 0 0 .705.705c-.39.39-.382 1.028.007 1.417l4.576 4.576a1.01 1.01 0 0 0 1.424 0l4.576-4.576a1 1 0 0 0 .007-1.417z" />
                            </svg>
                        </Accordion>
                        
                        <Panel className="panel">
                            <a href="/WhyWeWaluv" id="footer_whyWeWaluv">why we waluv</a>
                            <a href="/Contact" id="footer_contactUs">contact us</a>
                        </Panel>
                        <div className="mobile-menu-divider"></div>
                    </div>
                    <div>
                        <Accordion className="accordion">
                            <p>Products</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                                <path fill="#CCD8D4" fillRule="evenodd" d="M11.295.705a.998.998 0 0 0-1.412 0L6 4.58 2.117.706A.997.997 0 0 0 .705.705c-.39.39-.382 1.028.007 1.417l4.576 4.576a1.01 1.01 0 0 0 1.424 0l4.576-4.576a1 1 0 0 0 .007-1.417z" />
                            </svg>
                        </Accordion>
                        
                        <Panel className="panel">
                            <a href="/metalprints" id="footer_metalPrints">metal prints</a>
                            <a href="/acrylicprints" id="footer_acrylicPrints">acrylic prints</a>
                        </Panel>
                        <div className="mobile-menu-divider"></div>
                    </div>
                    <div>
                        <Accordion className="accordion">
                            <p>Customer Care</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                                <path fill="#CCD8D4" fillRule="evenodd" d="M11.295.705a.998.998 0 0 0-1.412 0L6 4.58 2.117.706A.997.997 0 0 0 .705.705c-.39.39-.382 1.028.007 1.417l4.576 4.576a1.01 1.01 0 0 0 1.424 0l4.576-4.576a1 1 0 0 0 .007-1.417z" />
                            </svg>
                        </Accordion>
                        <Panel className="panel">
                            <a href="/FAQs" id="footer_faqs">FAQs</a>
                            <a href="/Shipping" id="footer_shippingAndReturns">shipping &amp; returns</a>
                            <a href="/privacypolicy" id="footer_privacyPolicy">privacy policy</a>
                        </Panel>
                    </div>
                </FooterTop>
                <FooterBottom>
                    <MediaQuery minDeviceWidth={1000}>
                        <div>
                            <a href="/" className="footerLogoDesktop">
                                <svg xmlns="http://www.w3.org/2000/svg" width="126" height="30" viewBox="0 0 126 30">
                                    <g fill="none" fillRule="evenodd">
                                        <path fill="#CCD8D4" d="M4.5 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M15 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M20.25 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M20.25 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M20.25 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0" />
                                        <path fill="#007479" d="M4.5 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M4.5 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M4.5 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M15 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M15 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M13.25 19.667a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM18.5 25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5z" />
                                        <path fill="#FCB61A" d="M43.018 9v12.868c0 3.687 2.467 5.49 4.973 5.49 2.466 0 4.973-1.803 4.973-5.49V9H54.5v12.868c0 4.507-2.91 6.965-6.51 6.965-3.031 0-4.89-1.393-5.7-3.81h-.08c-.809 2.417-2.669 3.81-5.701 3.81-3.598 0-6.509-2.458-6.509-6.965V9h1.536v12.868c0 3.687 2.507 5.49 4.973 5.49 2.507 0 4.973-1.803 4.973-5.49V9h1.536zM75.131 28.432v-9.515c0-4.417-3.191-8.472-7.797-8.472-3.88 0-7.718 3.574-7.718 8.472s3.839 8.471 7.718 8.471c2.545 0 4.322-1.044 5.98-2.77v1.807c-1.173.963-3.031 2.408-5.98 2.408-5.213 0-9.334-4.175-9.334-9.916C58 13.175 62.121 9 67.334 9c5.211 0 9.333 4.175 9.333 9.917v9.515H75.13zM82 29h1.5V1H82zM90.517 9v11.638c0 4.057 2.754 6.72 6.066 6.72 3.313 0 6.067-2.663 6.067-6.72V9h1.517v11.842c0 4.795-3.353 7.991-7.584 7.991-4.23 0-7.583-3.196-7.583-7.99V9h1.517zM124.667 9l-7.475 18.81c-.289.696-.826 1.023-1.859 1.023-.99 0-1.569-.327-1.858-1.024L106 9h1.818l6.937 17.375c.248.574.372.82.578.82.248 0 .372-.246.579-.82L122.85 9h1.817z" />
                                    </g>
                                </svg>
                            </a>
                            <p>&copy; 2018-{(new Date().getFullYear())} Waluv. All rights reserved.</p>
                        </div>
                    </MediaQuery>
                    <div className="socialMobile">
                        <div>
                            <div className="socialIcons">
                                <a href="https://www.facebook.com/waluvofficial" target="_blank" rel="noopener noreferrer" id="footer_facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                        <path fill="#007479" fillRule="evenodd" d="M28.333 0H1.667C.747 0 0 .746 0 1.667v26.666C0 29.253.746 30 1.667 30h14.358V18.4h-3.896v-4.542h3.896v-3.333c0-3.875 2.367-5.988 5.833-5.988a32.275 32.275 0 0 1 3.492.18V8.75h-2.392c-1.879 0-2.245.896-2.245 2.208v2.892h4.495l-.583 4.542h-3.913V30h7.621c.92 0 1.667-.746 1.667-1.667V1.667C30 .747 29.254 0 28.333 0z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/waluvofficial/" target="_blank" rel="noopener noreferrer" id="footer_instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                        <path fill="#007479" fillRule="evenodd" d="M28.333 0H1.667C.747 0 0 .746 0 1.667v26.666C0 29.253.746 30 1.667 30h14.358V18.4h-3.896v-4.542h3.896v-3.333c0-3.875 2.367-5.988 5.833-5.988a32.275 32.275 0 0 1 3.492.18V8.75h-2.392c-1.879 0-2.245.896-2.245 2.208v2.892h4.495l-.583 4.542h-3.913V30h7.621c.92 0 1.667-.746 1.667-1.667V1.667C30 .747 29.254 0 28.333 0z" />
                                    </svg>
                                </a>
                                <a href="https://www.pinterest.com/waluvofficial/" target="_blank" rel="noopener noreferrer" id="footer_pinterest">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                        <path fill="#007479" fillRule="evenodd" d="M28.333 0H1.667C.747 0 0 .746 0 1.667v26.666C0 29.253.746 30 1.667 30h14.358V18.4h-3.896v-4.542h3.896v-3.333c0-3.875 2.367-5.988 5.833-5.988a32.275 32.275 0 0 1 3.492.18V8.75h-2.392c-1.879 0-2.245.896-2.245 2.208v2.892h4.495l-.583 4.542h-3.913V30h7.621c.92 0 1.667-.746 1.667-1.667V1.667C30 .747 29.254 0 28.333 0z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/waluvofficial" target="_blank" rel="noopener noreferrer" id="footer_twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M0 0h30v30H0z" />
                                            <path fill="#007479" d="M9.413 27c11.328 0 17.522-9.236 17.522-17.24 0-.264 0-.528-.013-.779A12.506 12.506 0 0 0 30 5.84a12.66 12.66 0 0 1-3.538.955A6.074 6.074 0 0 0 29.17 3.44a12.595 12.595 0 0 1-3.908 1.47A6.176 6.176 0 0 0 20.766 3C17.37 3 14.61 5.714 14.61 9.057c0 .477.052.942.167 1.382A17.567 17.567 0 0 1 2.082 4.106a6.003 6.003 0 0 0-.83 3.04 6.007 6.007 0 0 0 2.745 5.04 6.125 6.125 0 0 1-2.784-.755v.076c0 2.94 2.12 5.378 4.943 5.943-.511.138-1.06.214-1.622.214-.396 0-.78-.038-1.162-.113.779 2.412 3.052 4.159 5.747 4.21a12.51 12.51 0 0 1-7.65 2.588c-.498 0-.984-.025-1.469-.088C2.695 25.995 5.939 27 9.413 27" />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <MediaQuery maxDeviceWidth={767}>
                            <a href="/" className="footerLogo" id="footer_logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="126" height="30" viewBox="0 0 126 30">
                                    <g fill="none" fillRule="evenodd">
                                        <path fill="#CCD8D4" d="M4.5 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M15 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M20.25 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M20.25 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M20.25 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0" />
                                        <path fill="#007479" d="M4.5 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M4.5 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M4.5 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M25.5 21.417a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M9.75 26.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M15 10.75a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M15 16.083a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M13.25 19.667a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM18.5 25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5z" />
                                        <path fill="#FCB61A" d="M43.018 9v12.868c0 3.687 2.467 5.49 4.973 5.49 2.466 0 4.973-1.803 4.973-5.49V9H54.5v12.868c0 4.507-2.91 6.965-6.51 6.965-3.031 0-4.89-1.393-5.7-3.81h-.08c-.809 2.417-2.669 3.81-5.701 3.81-3.598 0-6.509-2.458-6.509-6.965V9h1.536v12.868c0 3.687 2.507 5.49 4.973 5.49 2.507 0 4.973-1.803 4.973-5.49V9h1.536zM75.131 28.432v-9.515c0-4.417-3.191-8.472-7.797-8.472-3.88 0-7.718 3.574-7.718 8.472s3.839 8.471 7.718 8.471c2.545 0 4.322-1.044 5.98-2.77v1.807c-1.173.963-3.031 2.408-5.98 2.408-5.213 0-9.334-4.175-9.334-9.916C58 13.175 62.121 9 67.334 9c5.211 0 9.333 4.175 9.333 9.917v9.515H75.13zM82 29h1.5V1H82zM90.517 9v11.638c0 4.057 2.754 6.72 6.066 6.72 3.313 0 6.067-2.663 6.067-6.72V9h1.517v11.842c0 4.795-3.353 7.991-7.584 7.991-4.23 0-7.583-3.196-7.583-7.99V9h1.517zM124.667 9l-7.475 18.81c-.289.696-.826 1.023-1.859 1.023-.99 0-1.569-.327-1.858-1.024L106 9h1.818l6.937 17.375c.248.574.372.82.578.82.248 0 .372-.246.579-.82L122.85 9h1.817z" />
                                    </g>
                                </svg>
                            </a>
                        <p>&copy; 2018-{(new Date().getFullYear())} Waluv. All rights reserved.</p>
                        </MediaQuery>     
                        </div>
                </FooterBottom>
            </Container>
            <MediaQuery minDeviceWidth={1000}>
                <div id="newsletterFloater" >
                    <NewsletterBox />
                </div>
            </MediaQuery>
        </FullFooter>
    );
    }
};

export default Footer;