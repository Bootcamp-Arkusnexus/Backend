import { Router } from "express";
import {
  getUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";

const router = Router();

// CRUD

// Create users
router.post("/users", createUser);

// Read list of users
router.get("/users", getUsers);
// SELECT FROM user name, email where id = 1;

// Route for users with id
// Read just one user with ID
router.get("/users/:userID", getUserByID);

// Update user using user ID
router.put("/users/:userID", updateUser);

//Delete User
router.delete("/users/:userID", deleteUser);

export default router;
