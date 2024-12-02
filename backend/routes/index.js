import express from "express";
import recipeRoutes from "./RecipeRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("API is working");
});

router.use("/recipes", recipeRoutes);

export default router;
