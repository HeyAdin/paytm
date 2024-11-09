const jwt = require('jsonwebtoken');
function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(403).json({
            msg : "unauthorised user"
        })
    }
    const token  = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        if(decoded){
            req.userId = decoded.userId;
            next();
        }
        else{
            res.status(403).json({
                msg : "user not authorized"
            })
        }
    }
    catch(err){
        res.status(403).json({msg : "error found in try catch"})
    }
}

module.exports = {
    authMiddleware
}