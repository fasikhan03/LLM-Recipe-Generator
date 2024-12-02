import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
	recipe_id: { type: String },
	recipe_photo: { type: String },
	recipe_title: { type: String },
	recipe_likes: { type: Number },
	recipe_category: { type: String },
	ingredients: [{ type: String }],
	cooking_procedure: { type: String },
	estimated_time_to_cook: { type: String },
	cuisine: { type: String },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
