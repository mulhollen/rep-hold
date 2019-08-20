import React, { Component } from 'react';
import styled from 'styled-components';

// node modules and their docs + cheat sheets

// react alice carousel doc
// https://www.npmjs.com/package/react-alice-carousel
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"
// https://underscorejs.org/
const _ = require("underscore")

// emoji cheat sheet
// ************** NOT EVERY EMOJI WORKS DOUBLE CHECK B4 LIVE **************
// https://www.webfx.com/tools/emoji-cheat-sheet/
let emojis = require('emojis')

const ReviewsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 316px;
    box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.1);

    h3 {
        text-shadow: 0 2px 5px rgba(255, 255, 255, 0.4);
        font-size: 42px;
        font-weight: bold;
        line-height: 1.1;
        color: #2f2f2f;
        margin: 0 auto 2.25rem;
    }

    .alice-carousel {
        width: 300px;
        margin: 0 auto;
    }

    .emoji {
        margin-bottom: .25em;
        vertical-align: middle;
    }

    .widthsetter {
        width: 25px;
    }

    .alice-carousel__prev-btn, 
    .alice-carousel__next-btn {
        display: none;
    }

    @media (min-width: 768px) {
        height: 232px;
        flex-direction: row;

        .alice-carousel {
            justify-self: flex-start;
            margin: 0
        }

        h3 {
            justify-self: flex-end;
            margin: 0 4.5rem 0 0;
            width: 178px;
            text-align: right;
        }
    }
 
`

const SingleReview = styled.div`
    text-align: center;

    .reviewEmoji {
        font-size: 1rem;
    }

    p {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.44;
        text-align: center;
        color: #302e2f;
        margin: .75rem auto .5rem;
    }

    h5 {
        text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        font-size: 12px;
        font-weight: bold;
        line-height: 1.5;
        text-align: center;
        color: #302e2f;
        margin: 0 auto;
    }

`

class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                {
                    stars: 5,
                    emojiType: '+1',
                    review: 'I am very happy with the craftsmanship & can’t wait to show these off to my friends & family',
                    reviewer: 'MOTHER NATURE',
                },
                {
                    stars: 4,
                    emojiType: 'star',
                    review: 'super cool totally different take on wall art',
                    reviewer: 'MICKEY MOUSE',
                },
                {
                    stars: 4,
                    emojiType: 'raised_hands',
                    review: 'My wedding pictures look so sleek. LOVE the acrylic look. Need tools to hang standoffs.',
                    reviewer: 'ERIN MAZZOACCO',
                },
                {
                    stars: 5,
                    emojiType: 'zap',
                    review: 'Making my concert pictures look like art. Seriously rocks. Pun Intended.',
                    reviewer: 'GEORGIA PEACHTREE',
                }
            ]
        }
    }

      render() {        
        



        const iteratedReviews = this.state.reviews.map((item, key) =>
            <SingleReview key={key}>
                <div className="reviewEmoji">
                    {
                        item.emojiType = ""
                        ?
                        _.times( item.stars, () => emojis.unicode(`${'heart'}`))
                        :
                        _.times( item.stars, () => emojis.unicode(`${item.emojiType}`))
                    }
                </div>
                <div>
                    <p>"{item.review}"</p>
                </div>
                <h5>-{item.reviewer}</h5>
            </SingleReview>
        );

        return (
            <ReviewsContainer>
                <h3>why waluv</h3>
                <AliceCarousel
                    items={iteratedReviews}
                    responsive={this.responsive}
                    autoPlayInterval={8000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    playButtonEnabled={false}
                    dotsDisabled={true}
                    disableAutoPlayOnAction={true}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                />    
            </ReviewsContainer>
        );
    }
}


export default Reviews;