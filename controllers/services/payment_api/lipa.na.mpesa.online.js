import * as dotenv from 'dotenv';

import timeStamp from "../../../utils/timestamp";
const lipaNaMpesaOnline = ( req, res) => {
    const token = req.accessToken;
    const auth = 'Basic ' + token;
    const timestamp = timeStamp ();
    const apiUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    const businessShortCode = 
    res.json ({token, auth, timestamp});
};
export default lipaNaMpesaOnline;