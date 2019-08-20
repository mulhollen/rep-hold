import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin-left: 32px;
    width: 100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-content:flex-start;


    button {
        margin: 6px 6px 6px 6px;
        width: 88px;
        height: 40px;
        border-radius: 2px;
        border: solid 1px #000000;
        background-color: #ffffff;
        font-family: ProximaNova;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #000000;

    }

    button:hover, button:focus, button:active {
        background-color: #007479;
        color:#ffffff;
    }

`

const SizeSelector = (props) => {
    return (
        <Container>
            <button onClick={props.handleSelection} value="$24.00" name="3-x-8">
                3x8 in
            </button>
            <button onClick={props.handleSelection} value="$24.00" name="4-x-6">
                4x6 in
            </button>
            <button onClick={props.handleSelection} value="$28.00" name="5-x-7">
                5x7 in
            </button>
            <button onClick={props.handleSelection} value="$28.00" name="5-x-8">
                5x8 in
            </button>
            <button onClick={props.handleSelection} value="$28.00" name="6-x-6">
                6x6 in
            </button>
            <button onClick={props.handleSelection} value="$48.00" name="8-x-10">
                8x10 in
            </button>
            <button onClick={props.handleSelection} value="$56.00" name="6-x-24">
                6x24 in
            </button>
            <button onClick={props.handleSelection} value="$67.00" name="12-x-18">
                12x18 in
            </button>
            <button onClick={props.handleSelection} value="$96.00" name="18-x-24">
                18x24 in
            </button>
            <button onClick={props.handleSelection} value="$98.00" name="18-x-27">
                18x27 in
            </button>
            <button onClick={props.handleSelection} value="$172.00" name="24-x-36">
                24x36 in
            </button>
        </Container>
    );
};

export default SizeSelector;