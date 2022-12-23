import db from "../../../utils/database.connection";
import paymentId from "../../../utils/create.paymentid";
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
     }
};
export default paymentApiCallBack;