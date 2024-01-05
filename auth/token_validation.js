const { verify } = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    let token = req.get('authorization');

    if (token) {
        // Remove 'Bearer ' from the token string
        token = token.slice(7);

        verify(token, process.env.KEY, (err, decoded) => {
            if (err) {
                res.json({
                    success: 0,
                    message: "Invalid token"
                });
            } else {
                next();
            }
        });
    } else {
        res.json({
            success: 0,
            message: "Access Denied. Unauthorized user."
        });
    }
};

module.exports = checkToken;
