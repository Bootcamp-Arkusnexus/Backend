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
router.post("/users", createUser); // Create users
router.get("/users", getUsers); // Read list of users
router.get("/users/:userID", getUserByID); // Read just one user with ID
router.put("/users/:userID", updateUser); // Update user using user ID
router.delete("/users/:userID", deleteUser); //Delete User

export default router;
