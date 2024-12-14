const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
   const token = req.headers['authorization']?.split(' ')[1];
   if (!token) return res.status(403).send("A token is required for authentication");

   jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
       if (err) return res.status(401).send("Invalid Token");
       req.userId= decoded.id; // Save the decoded id for later usage in routes.
       next();
   });
};
