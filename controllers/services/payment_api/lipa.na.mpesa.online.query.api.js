//DEPENDENCIES:
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//INTERNAL DEPENDENCIES:
const newPassword = require ("../../../utils/generate.mpesa.password");
const timeStamp = require ("../../../utils/timestamp");
const queryLipaNaMpesaOnline = (req, res) => {

    const statusQueryURI = 
    " https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query";

    //SENDING REQUEST TO SAFARICOM API:
    fetch (statusQueryURI, {

    })
    console.log ("req.body");
};
module.exports = queryLipaNaMpesaOnline;