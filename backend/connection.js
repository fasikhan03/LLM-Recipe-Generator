import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
	"mongodb+srv://Group11:knowmyrecipe@recipedb.utuzlz9.mongodb.net/?retryWrites=true&w=majority&appName=RecipeDB";

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});
const connectDB = async () => {
	try {
		await client.connect();
		console.log("MongoDB is Connected...");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
export default connectDB;
