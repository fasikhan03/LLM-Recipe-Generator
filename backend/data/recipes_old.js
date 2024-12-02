import mongoose from "mongoose";
export const recipes = [
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S5",
		recipe_photo: "ravioli_mushroom.jpg",
		recipe_title: "Mushroom Ravioli",
		recipe_likes: 2021,
		recipe_category: "Veg",
		ingredients: [
			"1 lb ravioli stuffed with mushrooms",
			"2 tbsp olive oil",
			"1/2 cup cream",
			"1/4 cup grated Parmesan",
			"Salt",
			"Black pepper",
			"Fresh parsley",
		],
		cooking_procedure:
			"Cook ravioli, sauté in olive oil, add cream and cheese, garnish with parsley.",
		estimated_time_to_cook: "20 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S6",
		recipe_photo: "risotto_scallops.jpg",
		recipe_title: "Scallops Risotto",
		recipe_likes: 4821,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb Arborio rice",
			"1 lb scallops",
			"4 cups chicken broth",
			"1 onion, diced",
			"1/2 cup white wine",
			"1/4 cup grated Parmesan cheese",
			"2 tbsp butter",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Cook rice in broth, sear scallops, sauté onion, mix all with wine and cheese.",
		estimated_time_to_cook: "30 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S7",
		recipe_photo: "tiramisu.jpg",
		recipe_title: "Classic Tiramisu",
		recipe_likes: 9540,
		recipe_category: "Dessert",
		ingredients: [
			"1 lb mascarpone",
			"1 cup espresso",
			"3 large eggs",
			"1/2 cup sugar",
			"1 pack ladyfingers",
			"Cocoa powder",
		],
		cooking_procedure:
			"Whisk eggs and sugar, mix with mascarpone, dip ladyfingers in espresso, layer and top with cocoa.",
		estimated_time_to_cook: "240 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S8",
		recipe_photo: "gnocchi_pomodoro.jpg",
		recipe_title: "Gnocchi Pomodoro",
		recipe_likes: 2957,
		recipe_category: "Veg",
		ingredients: [
			"1 lb gnocchi",
			"2 cups tomato sauce",
			"1 basil bunch",
			"1/4 cup grated Parmesan",
			"2 cloves garlic",
			"Salt",
			"Olive oil",
		],
		cooking_procedure:
			"Cook gnocchi, sauté garlic, add tomato sauce and basil, combine with gnocchi, sprinkle Parmesan.",
		estimated_time_to_cook: "25 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S9",
		recipe_photo: "polenta_crostini.jpg",
		recipe_title: "Polenta Crostini",
		recipe_likes: 1782,
		recipe_category: "Veg",
		ingredients: [
			"1 lb polenta",
			"1 cup mushroom ragout",
			"1/4 cup crumbled gorgonzola",
			"Fresh thyme",
			"Salt",
			"Olive oil",
		],
		cooking_procedure:
			"Prepare polenta, cut into slices and grill, top with ragout and gorgonzola, garnish with thyme.",
		estimated_time_to_cook: "45 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S10",
		recipe_photo: "veal_saltimbocca.jpg",
		recipe_title: "Veal Saltimbocca",
		recipe_likes: 3338,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb veal cutlets",
			"8 slices prosciutto",
			"1 bunch sage leaves",
			"1/2 cup white wine",
			"2 tbsp butter",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Layer veal with prosciutto and sage, sear, deglaze with wine, finish with butter.",
		estimated_time_to_cook: "20 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S11",
		recipe_photo: "osso_bucco.jpg",
		recipe_title: "Osso Bucco",
		recipe_likes: 4427,
		recipe_category: "Non-Veg",
		ingredients: [
			"2 lb veal shanks",
			"1 cup dry white wine",
			"2 cups vegetable broth",
			"1 onion, chopped",
			"2 carrots, chopped",
			"2 celery stalks, chopped",
			"1 tomato, diced",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Brown veal, sauté vegetables, add wine and broth, simmer until tender.",
		estimated_time_to_cook: "120 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S12",
		recipe_photo: "bruschetta.jpg",
		recipe_title: "Tomato Bruschetta",
		recipe_likes: 2154,
		recipe_category: "Appetizer",
		ingredients: [
			"1 baguette, sliced",
			"4 tomatoes, diced",
			"1 bunch basil, chopped",
			"2 cloves garlic, minced",
			"Salt",
			"Black pepper",
			"Olive oil",
		],
		cooking_procedure:
			"Toast baguette slices, mix tomatoes with basil and garlic, top on bread, drizzle with oil.",
		estimated_time_to_cook: "15 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S13",
		recipe_photo: "calzone.jpg",
		recipe_title: "Spinach and Ricotta Calzone",
		recipe_likes: 3619,
		recipe_category: "Veg",
		ingredients: [
			"1 lb pizza dough",
			"1 cup ricotta cheese",
			"1 cup spinach, cooked",
			"1/2 cup mozzarella cheese",
			"Salt",
			"Black pepper",
			"Olive oil",
		],
		cooking_procedure:
			"Roll out dough, fill with cheeses and spinach, fold and seal, bake until golden.",
		estimated_time_to_cook: "30 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S14",
		recipe_photo: "minestrone_soup.jpg",
		recipe_title: "Minestrone Soup",
		recipe_likes: 4872,
		recipe_category: "Veg",
		ingredients: [
			"1 onion, chopped",
			"2 carrots, chopped",
			"2 celery stalks, chopped",
			"1 zucchini, chopped",
			"1 cup canned tomatoes",
			"1 cup kidney beans, drained",
			"1 cup pasta",
			"Vegetable broth",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Sauté vegetables, add tomatoes and broth, simmer, add pasta and beans, cook until tender.",
		estimated_time_to_cook: "45 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S15",
		recipe_photo: "cioppino.jpg",
		recipe_title: "Seafood Cioppino",
		recipe_likes: 5193,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb mixed seafood (shrimp, scallops, crab)",
			"1 cup tomato sauce",
			"1 onion, chopped",
			"1 bell pepper, chopped",
			"2 cloves garlic, minced",
			"1/2 cup white wine",
			"Salt",
			"Black pepper",
			"Olive oil",
		],
		cooking_procedure:
			"Sauté onion and bell pepper, add garlic, deglaze with wine, add tomato sauce, simmer, add seafood, cook until done.",
		estimated_time_to_cook: "30 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S16",
		recipe_photo: "caprese_salad.jpg",
		recipe_title: "Caprese Salad",
		recipe_likes: 6887,
		recipe_category: "Appetizer",
		ingredients: [
			"4 large ripe tomatoes, sliced",
			"1 lb fresh mozzarella, sliced",
			"Basil leaves",
			"Salt",
			"Black pepper",
			"Olive oil",
			"Balsamic glaze",
		],
		cooking_procedure:
			"Alternate layers of tomato and mozzarella, top with basil, season, drizzle with oil and glaze.",
		estimated_time_to_cook: "10 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S17",
		recipe_photo: "pizza_margherita.jpg",
		recipe_title: "Pizza Margherita",
		recipe_likes: 8413,
		recipe_category: "Veg",
		ingredients: [
			"1 lb pizza dough",
			"1 cup tomato sauce",
			"1 lb fresh mozzarella",
			"Basil leaves",
			"Salt",
			"Olive oil",
		],
		cooking_procedure:
			"Roll out dough, spread sauce, add mozzarella, bake until crust is golden, top with basil.",
		estimated_time_to_cook: "20 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S18",
		recipe_photo: "shrimp_scampi.jpg",
		recipe_title: "Shrimp Scampi",
		recipe_likes: 3054,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb shrimp, peeled and deveined",
			"1/2 cup butter",
			"4 cloves garlic, minced",
			"1/2 cup white wine",
			"1 lemon, juiced",
			"Parsley, chopped",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Sauté garlic in butter, add shrimp, deglaze with wine, finish with lemon juice and parsley.",
		estimated_time_to_cook: "15 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S19",
		recipe_photo: "baked_ziti.jpg",
		recipe_title: "Baked Ziti",
		recipe_likes: 7476,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb ziti pasta",
			"2 cups marinara sauce",
			"1 lb ground beef",
			"1 cup ricotta cheese",
			"1 cup mozzarella cheese",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Cook pasta and beef, mix with sauces and cheeses, bake until bubbly.",
		estimated_time_to_cook: "40 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S20",
		recipe_photo: "panna_cotta.jpg",
		recipe_title: "Panna Cotta",
		recipe_likes: 6685,
		recipe_category: "Dessert",
		ingredients: [
			"2 cups heavy cream",
			"1/4 cup sugar",
			"1 vanilla bean, split and scraped",
			"2 tsp gelatin, powdered",
			"1/4 cup cold water",
		],
		cooking_procedure:
			"Dissolve gelatin in water, heat cream with sugar and vanilla, combine with gelatin, chill until set.",
		estimated_time_to_cook: "240 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S21",
		recipe_photo: "antipasto_platter.jpg",
		recipe_title: "Antipasto Platter",
		recipe_likes: 3210,
		recipe_category: "Appetizer",
		ingredients: [
			"1/4 lb prosciutto",
			"1/4 lb salami",
			"1/4 lb marinated artichokes",
			"1/4 lb olives",
			"1/4 lb mozzarella cheese",
			"1/4 lb roasted peppers",
		],
		cooking_procedure: "Arrange all ingredients on a large platter.",
		estimated_time_to_cook: "10 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S22",
		recipe_photo: "carbonara_pizza.jpg",
		recipe_title: "Carbonara Pizza",
		recipe_likes: 8937,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb pizza dough",
			"1/2 lb pancetta, diced",
			"1 cup mozzarella cheese",
			"2 large eggs",
			"1/4 cup Parmesan cheese",
			"Black pepper",
			"Olive oil",
		],
		cooking_procedure:
			"Roll out dough, fry pancetta, spread on dough with mozzarella, bake, top with raw eggs and Parmesan, finish baking.",
		estimated_time_to_cook: "20 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S23",
		recipe_photo: "chicken_milanese.jpg",
		recipe_title: "Chicken Milanese",
		recipe_likes: 7641,
		recipe_category: "Non-Veg",
		ingredients: [
			"4 chicken breasts, pounded thin",
			"1 cup flour",
			"2 eggs, beaten",
			"2 cups breadcrumbs",
			"Salt",
			"Black pepper",
			"Olive oil",
		],
		cooking_procedure:
			"Dredge chicken in flour, dip in eggs, coat in breadcrumbs, fry until golden.",
		estimated_time_to_cook: "25 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S24",
		recipe_photo: "seafood_pasta.jpg",
		recipe_title: "Seafood Pasta",
		recipe_likes: 8594,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb pasta",
			"1 lb mixed seafood (shrimp, scallops, squid)",
			"1 cup tomato sauce",
			"1/2 cup white wine",
			"1 garlic clove, minced",
			"Parsley, chopped",
			"Salt",
			"Black pepper",
			"Olive oil",
		],
		cooking_procedure:
			"Cook pasta, sauté seafood and garlic, deglaze with wine, add tomato sauce, combine with pasta, garnish with parsley.",
		estimated_time_to_cook: "30 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S25",
		recipe_photo: "saffron_risotto.jpg",
		recipe_title: "Saffron Risotto",
		recipe_likes: 5231,
		recipe_category: "Veg",
		ingredients: [
			"1 lb Arborio rice",
			"1 pinch saffron threads",
			"4 cups chicken broth",
			"1 onion, diced",
			"1/2 cup white wine",
			"1/4 cup grated Parmesan cheese",
			"2 tbsp butter",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Infuse saffron in broth, cook rice with onion, add wine and saffron broth, finish with cheese and butter.",
		estimated_time_to_cook: "30 minutes",
		cuisine: "Italian",
	},

	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S26",
		recipe_photo: "meatball_subs.jpg",
		recipe_title: "Meatball Subs",
		recipe_likes: 2203,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb ground beef",
			"1/4 cup breadcrumbs",
			"1 egg",
			"1/4 cup grated Parmesan cheese",
			"2 cups marinara sauce",
			"4 sub rolls",
			"1 cup mozzarella cheese",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Mix beef, breadcrumbs, egg, Parmesan, form meatballs, cook in sauce, serve on rolls with mozzarella.",
		estimated_time_to_cook: "45 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S27",
		recipe_photo: "arancini.jpg",
		recipe_title: "Arancini",
		recipe_likes: 1685,
		recipe_category: "Appetizer",
		ingredients: [
			"2 cups cooked risotto",
			"1/2 cup mozzarella cubes",
			"1 cup breadcrumbs",
			"2 eggs, beaten",
			"Oil for frying",
		],
		cooking_procedure:
			"Form risotto into balls, insert mozzarella, dip in egg, coat in breadcrumbs, deep fry.",
		estimated_time_to_cook: "30 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S28",
		recipe_photo: "eggplant_parmesan.jpg",
		recipe_title: "Eggplant Parmesan",
		recipe_likes: 3910,
		recipe_category: "Veg",
		ingredients: [
			"2 eggplants, sliced",
			"2 cups marinara sauce",
			"1 cup grated Parmesan cheese",
			"2 cups mozzarella cheese",
			"1/2 cup flour",
			"2 eggs, beaten",
			"2 cups breadcrumbs",
			"Oil for frying",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Dredge eggplant in flour, egg, breadcrumbs, fry, layer with sauce and cheeses, bake.",
		estimated_time_to_cook: "60 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S29",
		recipe_photo: "italian_sausage_soup.jpg",
		recipe_title: "Italian Sausage Soup",
		recipe_likes: 2589,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb Italian sausage",
			"1 onion, chopped",
			"2 carrots, chopped",
			"2 celery stalks, chopped",
			"1 can cannellini beans",
			"4 cups chicken broth",
			"1 cup spinach leaves",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Brown sausage, add vegetables, cook, add broth and beans, simmer, add spinach before serving.",
		estimated_time_to_cook: "45 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S30",
		recipe_photo: "stuffed_shells.jpg",
		recipe_title: "Stuffed Shells",
		recipe_likes: 4325,
		recipe_category: "Veg",
		ingredients: [
			"24 large pasta shells",
			"2 cups ricotta cheese",
			"1 egg",
			"1 cup spinach, chopped",
			"2 cups marinara sauce",
			"1 cup mozzarella cheese",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Cook shells, mix ricotta, egg, spinach, stuff shells, cover with sauce and mozzarella, bake.",
		estimated_time_to_cook: "50 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S31",
		recipe_photo: "prosciutto_melon.jpg",
		recipe_title: "Prosciutto and Melon",
		recipe_likes: 1025,
		recipe_category: "Appetizer",
		ingredients: ["1 cantaloupe, sliced", "1/4 lb prosciutto, thinly sliced"],
		cooking_procedure: "Wrap melon slices with prosciutto, serve chilled.",
		estimated_time_to_cook: "10 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S32",
		recipe_photo: "clam_pasta.jpg",
		recipe_title: "Clam Pasta",
		recipe_likes: 3674,
		recipe_category: "Non-Veg",
		ingredients: [
			"1 lb spaghetti",
			"2 cans clams in juice",
			"4 cloves garlic, minced",
			"1/2 cup white wine",
			"1/4 cup parsley, chopped",
			"Salt",
			"Black pepper",
			"Olive oil",
		],
		cooking_procedure:
			"Cook spaghetti, sauté garlic, add clams and wine, toss with pasta, garnish with parsley.",
		estimated_time_to_cook: "25 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S33",
		recipe_photo: "limoncello_tiramisu.jpg",
		recipe_title: "Limoncello Tiramisu",
		recipe_likes: 4853,
		recipe_category: "Dessert",
		ingredients: [
			"1 cup mascarpone",
			"1/2 cup limoncello",
			"3 large eggs",
			"1/2 cup sugar",
			"1 pack ladyfingers",
			"Lemon zest",
		],
		cooking_procedure:
			"Whisk eggs and sugar, mix with mascarpone and limoncello, dip ladyfingers, layer and top with zest.",
		estimated_time_to_cook: "240 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S34",
		recipe_photo: "beef_carpaccio.jpg",
		recipe_title: "Beef Carpaccio",
		recipe_likes: 2145,
		recipe_category: "Appetizer",
		ingredients: [
			"1/2 lb beef tenderloin, thinly sliced",
			"1/4 cup olive oil",
			"2 tbsp capers",
			"1/4 cup arugula",
			"Parmesan shavings",
			"Lemon juice",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Arrange beef slices, drizzle with oil, lemon, top with capers, arugula, and Parmesan.",
		estimated_time_to_cook: "10 minutes",
		cuisine: "Italian",
	},
	{
		_id: new mongoose.Types.ObjectId(),
		recipe_id: "3LI97476S35",
		recipe_photo: "mushroom_risotto.jpg",
		recipe_title: "Mushroom Risotto",
		recipe_likes: 2961,
		recipe_category: "Veg",
		ingredients: [
			"1 lb Arborio rice",
			"1 lb mushrooms, sliced",
			"4 cups vegetable broth",
			"1 onion, diced",
			"1/2 cup white wine",
			"1/4 cup grated Parmesan cheese",
			"2 tbsp butter",
			"Salt",
			"Black pepper",
		],
		cooking_procedure:
			"Cook rice in broth, sauté mushrooms and onion, add wine and rice, finish with cheese and butter.",
		estimated_time_to_cook: "30 minutes",
		cuisine: "Italian",
	},
];