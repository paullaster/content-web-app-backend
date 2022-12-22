import JWT from 'jsonwebtoken';

const verifyToken = (req, res) => {
    const bearerToken = req.headers('Authorization');
    if (bearerToken === ''){
        res.status(400).json( {
            status: 'error',
            error: 'Authorization required',
        })
        return;
    };

    const token = bearerToken.split(' ')[1];
};
export default verifyToken;