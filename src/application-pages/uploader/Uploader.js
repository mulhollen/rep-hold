import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import FirstSelector from './FirstSelector';
import SecondSelctor from './SecondSelctor';
import { ProductContext } from '../../Context/Store';
import ThirdSelector from './ThirdSelector';
import FourthSelector from './FourthSelector';
import FifthSelector from './FithSelector';
import { skuMaker } from '../../Context/sku'
import { ApiUrlContext, SiteIDContext, UserContext, CustomerContext } from '../../Context/Store';
import axios from 'axios'





const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    margin-bottom: 72px;

`

const Uploader = (props) => {
    const [Product, setProduct] = useContext(ProductContext);
    const [source, setSource] = useState();
    const [price, setPrice] = useState("$0.00");
    const [UserState, setUserState] = useContext(UserContext);//to set and detect global user context
    const [PDF, setPDF] = useState()




    const [API_URL] = useContext(ApiUrlContext);//for base URL of api calls
    const [SITE_ID] = useContext(SiteIDContext);//for site ID of api calls


    const handleSelection = (e) => {
        setProduct({
            ...Product,
            Size: e.target.name,
        })
        setPrice(e.target.value)
    }

    const handleMount = (e) => {
        setProduct({
            ...Product,
            Holes: e.target.name
        })
    }

    const handleImageSelection = (event) => {
        let image = URL.createObjectURL(event.target.files[0]);
        setSource(image)

    }


    const addToCart = () => {
        axios.get(`${API_URL}:8082/api/${SITE_ID}/products/bysku/${skuMaker(Product)}`)
            .then(res => {
                console.log("PDF", UserState.pdf)
                console.log(res)
                axios.post(`${API_URL}:8081/api/${SITE_ID}/createcart`, { "customer_id": UserState.userID, "variant_id": res.data.id }).then(res => {
                    console.log(UserState.pdf)
                    axios.post(`${API_URL}:8081/api/${SITE_ID}/image/${res.data.data.cartItems[0].cart_item_id}`, UserState.pdf)
                    .then(res => {
                        console.log("image past res", res)
                    })
                })
            }).catch(err => {
                console.log(err);
            });
    }




    return (
        <Container>

            <FirstSelector

            />
            <SecondSelctor
                Substrate={Product.Substrate}
            />

            <ThirdSelector
                Product={Product}
                price={price}
                handleImageSelection={handleImageSelection}
                handleSelection={handleSelection}
            />
            {source
                ?
                <>
                    <FourthSelector
                        src={source}
                        Product={Product}
                    />
                    <FifthSelector
                        handleMount={handleMount}
                    />
                </>
                : <></>}

            {Product.Holes === "" ? <></> : <button onClick={addToCart}>add to cart</button>}


        </Container>
    );
};

export default Uploader;