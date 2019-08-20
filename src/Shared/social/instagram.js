import * as React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
// https://material-ui.com/
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import compose from 'recompose/compose';



const InstaCarousel = styled.div`
    width: 782px;
    overflow-x: hidden;
    z-index: 0;

    @media (max-width: 830px) {
        width: 608px;
    }

    @media (max-width: 660px) {
        width: 424px;
    }

    @media (max-width: 490px) {
        width: 100vw;
        max-width: 320px;
    }
    
    > div {
        width: 260%;
        display: flex;
        justify-content: flex-start;
        position: relative;

        @media (max-width: 830px) {
            width: 324%;
        }

        @media (max-width: 490px) {
            width: 439%;
        }
    }
    
    #instagramOverflow {
        @media (max-width: 490px) { 
            left: 52px;
        }
    }
    
    .singleInstaImg {
        width: 140px;
        height: 140px;
        margin: 8px;
        justify-content: space-between;
        visibility: hidden;

        @media (max-width: 660px) {
            width: 100px;
            height: 100px;
            margin: 4px;
        }
    }
    
    .singleInstaImg img {
        object-fit: cover;
    }

    .singleInstaImg:nth-of-type(1),
    .singleInstaImg:nth-of-type(2),
    .singleInstaImg:nth-of-type(3),
    .singleInstaImg:nth-of-type(4),
    .singleInstaImg:nth-of-type(5) {
        display: flex;
        visibility: visible;
    }

    @media (max-width: 830px) {
        .singleInstaImg:nth-of-type(5) {
            visibility: hidden;
        }
    }

    @media (max-width: 490px) {
        .singleInstaImg:nth-of-type(4),
        .singleInstaImg:nth-of-type(5) {
            visibility: hidden;
        }
    }
    
    
    // text a
    #carouselIGLink {
        font-size: 42px;
        font-weight: bold;
        line-height: 0.86;
        text-align: left;
        color: #302e2f;
        
        a {
            position: relative;
            top: 55px;

            @media (max-width: 490px) {
                top: 25px;
            }
        }
    }

`

const styles = () => ({
  wrapper: {},
  image: {
    width: '100%',
    height: '100%',
  },
});

export type Props = {
  media?: Array<{
    displayImage: string,
    id?: string,
    postLink?: string,
    accessibilityCaption?: string,
  }>,
  account: "waluvofficial",
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: 'completed' | 'loading' | 'failed',
};

const InstaGrid = ({ classes, media, account, status}: Props) => {

    return (
        <InstaCarousel className="instagramHolder">
            <div id="instagramOverflow">
                {media &&
                    status === 'completed' &&
                    media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
                    <div className="singleInstaImg">
                        <a
                        href={postLink || `https://www.instagram.com/${account}/`} target="_blank"
                        >
                        <img
                            src={displayImage}
                            alt={accessibilityCaption || 'Instagram picture'}
                            className={classes.image}
                        />
                        </a>
                    </div>
                ))}
                {status === 'loading' && <p>loading...</p>}
                {status === 'failed' && <p>Check instagram here</p>}
                <div id="carouselIGLink" className="singleInstaImg">
                    <a href={`https://www.instagram.com/${account}/`} target="_blank">see more...</a>
                </div>
            </div>
        </InstaCarousel>
  );
};

InstaGrid.defaultProps = {
  media: undefined,
};


export default compose(
  withInstagramFeed,
  withStyles(styles),
)(InstaGrid);

 