import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
//components
import Carousel from './Components/Carousel';
import Gifbar from './Components/Gifbar';
import MetalAcrylic from './Components/MetalAcrylic';
import Reviews from './Components/Reviews';
import InstaCarousel from '../../Shared/social/instagramcarousel';
import MakePrintNowHome from './Components/MakePrintNowHome';
import NewsletterBox from '../../Shared/social/NewsletterBox';


const BodyContent = styled.div`

    #newsletterFloater {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f0f0f0;
        padding: 1.5rem 0;
    }
`

class Home extends React.Component {


    componentDidMount() {
      
    }

  

    render() {     

    return (
       <BodyContent>
           <Carousel />
           <Gifbar />
           <MetalAcrylic />
           <Reviews />
           <InstaCarousel account="waluvofficial" numberOfMediaElements={12} />
           <MakePrintNowHome />
           <MediaQuery maxDeviceWidth={999}>
                <div id="newsletterFloater" >
                    <NewsletterBox />
                </div>
            </MediaQuery>
       </BodyContent>
    );
    }
};

export default Home;