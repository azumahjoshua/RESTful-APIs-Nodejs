const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const userService = require("./user.service");
const { sign } = require("jsonwebtoken");

// Create User
const createUserController = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    userService.createUser(body, (err, results) => {
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

// Get All Users
const getUsersController = (req, res) => {
    userService.getUsers((err, results) => {
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

// Get User By Id
const getUserByIdController = (req, res) => {
    const id = req.params.id;
    userService.getUserById(id, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Record not found",
            });
        }
        return res.json({
            success: 1,
            data: results,
        });
    });
};

// Update User
const updateUserController = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const salt = genSaltSync(10);
    data.password = hashSync(data.password, salt);
    userService.updateUser(id, data, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        return res.status(200).json({
            success: 1,
            message: results.message,
        });
    });
};

// Delete User
const deleteUserController = (req, res) => {
    const identifier = req.params.id;
    userService.deleteUser(identifier, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        return res.status(200).json({
            success: 1,
            message: results.message,
        });
    });
};

// Login
const loginController = (req, res) => {
    const body = req.body;
    userService.getUserByEmail(body.email, (err, results) => {
        if (err) {
            console.log(err);
        }
        if (!results) {
            return res.json({
                success: 0,
                data: "Invalid email or password",
            });
        }
        const passwordMatch = compareSync(body.password, results.password); // Fixed variable name
        if (passwordMatch) {
            results.password = undefined;
            const jsontoken = sign({ results }, process.env.KEY, {
                expiresIn: '1h',
            });
            return res.json({
                success: 1,
                message: 'Login successful',
                token: jsontoken,
            });
        } else {
            return res.json({
                success: 0,
                data: "Invalid email or password",
            });
        }
    });
};

module.exports = {
    createUser: createUserController,
    getUsers: getUsersController,
    getUserById: getUserByIdController,
    updateUser: updateUserController,
    deleteUser: deleteUserController,
    login: loginController,
};
