import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../Context/Store';



const Container = styled.div `
   
    canvas {
        border: 3px solid black;
        
    }

    button {
        width: 100px;
        height: 100px;
        background-color: black;
        color:white;
    }
    
`

const FourthSelector = (props) => {

    const [ UserState, setUserState ] = useContext(UserContext)
    
    const canvasRef = useRef(null)

    let canvasWidth;
    let canvasHeight;
    

    switch (props.Product.Size) {
        case "3-x-8":
            canvasWidth = 400;
            canvasHeight = 150;
            break;
        case "4-x-6":
            canvasWidth = 360;
            canvasHeight = 240;
            break;
        case "5-x-7":
            canvasWidth = 420;
            canvasHeight = 300;
            break;
        case "5-x-8":
            canvasWidth = 400;
            canvasHeight = 250;
            break;
        case "6-x-6":
            canvasWidth = 420;
            canvasHeight = 420;
            break;
        case "8-x-10":
            canvasWidth = 500;
            canvasHeight = 400;
            break;
        case "6-x-24":
            canvasWidth = 480;
            canvasHeight = 120;
            break;
        case "12-x-18":
            canvasWidth = 540;
            canvasHeight = 360;
            break;
        case "18-x-24":
            canvasWidth = 480;
            canvasHeight = 360;
            break;
        case "18-x-27":
            canvasWidth = 540;
            canvasHeight = 360;
            break;
        case "24-x-36":
            canvasWidth = 540;
            canvasHeight = 360;
            break;
        default:
    }



    const img = new Image();
    useEffect(() => {
        const canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        img.addEventListener('load', function() {
            ctx.drawImage(img, 0, 0,canvasWidth, canvasHeight); 
        });      
        img.src = props.src;
    }, [props.src])






    
    // const handleRotate = () => {
    //     let c = canvasRef.current;
    //     let ctx = c.getContext('2d');
    //     ctx.translate(img.width-1, img.height-1);
    //     ctx.rotate((Math.PI / 180) * 90);
    //     ctx.drawImage(img, 0, 0,canvasWidth, canvasHeight); 
    //     console.log('fucking rotate you BITCH!!!')
    // }


    // const clear = () => {
    //     let c = canvasRef.current;
    //     let ctx = c.getContext('2d');
    //     ctx.restore();
    // }


    // const upload = () => {
    //     let c = canvasRef.current;
    //     const imgData = c.toDataURL('image/*', 1.0)
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'JPEG', 0, 0);
    //     // let data = new FormData();
    //     // data.append('image', pdf)
    //     setUserState({...UserState, pdf: pdf})
    // }


    return (
        <Container>
            {props.src
            ?
            <>
                <canvas 
                    ref={canvasRef}
                    width={canvasWidth}
                    height={canvasHeight}
                />
            </>
            :
            <></>
            }
        </Container>
    );
};

export default FourthSelector;