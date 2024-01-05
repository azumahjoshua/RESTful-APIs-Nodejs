const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createUser, getUserById, getUsers, updateUser, deleteUser, login } = require("./user.controller");


router.post("/users",createUser);
router.get("/users",getUsers);
router.get("/users/:id", getUserById);
router.patch("/users/:id", updateUser);  // Fixed endpoint URL
router.delete("/users/:id", deleteUser); // Fixed endpoint URL
router.post("/users/login",login)
// router.post("/users", checkToken, (req, res) => createUser(req, res));
// router.get("/users", checkToken, (req, res) => getUsers(req, res));
// router.get("/users/:id", checkToken, (req, res) => getUserById(req, res));
// router.patch("/users/:id", checkToken, (req, res) => updateUser(req, res));
// router.delete("/users/:id", checkToken, (req, res) => deleteUser(req, res));
// router.post("/users/login", (req, res) => login(req, res));
module.exports = router;
