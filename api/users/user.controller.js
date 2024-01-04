const createService = require("./user.service");
const { genSaltSync, hashSync } = require("bcrypt");

const createUser = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    createService.createUser(body, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        return res.status(200).json({
            success: 1,
            data: results,
        });
    });
};

module.exports = createUser;