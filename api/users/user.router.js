const { createUser, getUserById, getUsers, updateUser, deleteUser } = require("./user.controller");
const router = require("express").Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.patch("/users/:id", updateUser);  // Fixed endpoint URL
router.delete("/users/:id", deleteUser); // Fixed endpoint URL

module.exports = router;
