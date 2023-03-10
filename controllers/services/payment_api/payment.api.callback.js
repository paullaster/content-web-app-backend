const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const db = require ("../../../utils/database.connection");
const paymentId = require ("../../../utils/create.paymentid");
const paymentApiCallBack = ( req, res) => {
    const callBackResultDescription = req.body.Body.stkCallback.ResultDesc;
    const callBackMetaData = req.body.Body.stkCallback.CallbackMetadata;
    if (!callBackMetaData) {
        res.status(404).json({
            status: 'ok',
            message: callBackResultDescription,
        });
        return;
    };
     const newTransaction = {
        paymentid: paymentId(),
        amount: callBackMetaData.Item[0].Value,
        mpesa_trans_id: callBackMetaData.Item[1].Value,
        mpesa_trans_date: callBackMetaData.Item[3].Value,
        phonenumber: callBackMetaData.Item[4].Value
     };
     const sql = 'INSERT INTO payments SET?';
     db.query(sql, newTransaction, (err, rows) => {
        if (err) {
            res.status(500).json({
                status: 'error',
                error: err.message,
            });
            return;
        };
        res.status(200).json({
            status: 'success',
            message: 'Payment was successfully added to database',
        });
     });
};
module.exports = paymentApiCallBack;