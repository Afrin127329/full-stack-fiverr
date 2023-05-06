import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) return next(createError(401, "Authentication Failed!"));

    jwt.verify(token, process.env.JWT_KEY, async (err, payload)=> {
        if(err) return next(createError(403, "Token is not Valid!"));

        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next();
    })
}

export default verifyToken;