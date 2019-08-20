let backendHost;
let ID = "devwaluv";//by default, staging, and development will use "devwaluv" for siteID


//this is api configuration for our app. to call our api for POST/GET, import ApiUrlContext from context/Store via the correct file path. 
//set the API_URL variable with "const [ API_URL ] = useContext(ApiUrlContext)" above the return statment in a component.


const hostname = window && window.location && window.location.hostname;
if (hostname === 'waluv.com') {
    //Production
    backendHost = 'https://73twycezic.execute-api.us-east-1.amazonaws.com';
    ID = "prodwaluv";
} else if (hostname === 'staging.waluv.com') {
    //Staging
    backendHost = 'https://ba113b24a6.execute-api.us-east-1.amazonaws.com';
} 
else if (hostname === 'localhost') {
    //local
    backendHost = 'http://localhost';
}
else {
    //development
    backendHost = "http://dev.waluv.com";
}




export const API_ROOT = backendHost;
export const siteID = ID;