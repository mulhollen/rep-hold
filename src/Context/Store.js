import React, {useState} from 'react';
import {API_ROOT, siteID} from './api-context'





export const ApiUrlContext = React.createContext(API_ROOT);
export const SiteIDContext = React.createContext(siteID);
export const UserContext = React.createContext({
  "userID": 'guest',
  "pdf": '',
})
export const CustomerContext = React.createContext(
{
  customer: {
    first_name: "", 
    last_name: "",
    fbORG: false,
    create_new_user: false,
    email: "",
    password: "",
  }
})


export const ProductContext = React.createContext(
  {
      "Substrate": "print", 
      "Finish": "finish",
      "Size": "3-x-8",
      "Holes": ""
  })



const Store = ({children}) => {
  const [ API_URL ] = useState(API_ROOT)
  const [ SITE_ID ] =useState(siteID)
  const [ UserState, setUserState ] = useState({
    "userID": 'guest',
    "pdf": '',
  })
  const [Customer, setCustomer] = useState(
  {
      "first_name": "",
      "last_name": "",
      "fbORG": false,
      "create_new_user": false,
      "email": "",
      "password": "",
  })
  const [Product, setProduct ] = useState(
  {
      "Substrate": "print", 
      "Finish": "finish",
      "Size": "3-x-8",
      "Holes": ""
})

  return (
    <ApiUrlContext.Provider value={[API_URL]}>
      <SiteIDContext.Provider value={[SITE_ID]}>
        <UserContext.Provider value={[UserState,setUserState]}>
          <CustomerContext.Provider value={[Customer, setCustomer]}>
            <ProductContext.Provider value={[Product, setProduct]}>


             {children}
             

            </ProductContext.Provider>
          </CustomerContext.Provider>
        </UserContext.Provider>
      </SiteIDContext.Provider>
    </ApiUrlContext.Provider>
  );
};

export default Store;