import React from 'react';
import styled from 'styled-components';

const Container = styled.div `


    .fileContainer [type=file] {
        width: 248px;
        height: 40px;
        border-radius: 2px;
        background-color: #007479;

        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
    }

   

`

const ImageUploader = (props) => {

    

    return (
        <Container>
            <div className="fileContainer">
                <input type="file" onChange={props.OnChange} placeholder="UPLOAD YOUR IMAGE!"  className="input" accept="image/png, image/jpeg, image/jpg"/>
            </div>
        </Container>
    );
};

export default ImageUploader;