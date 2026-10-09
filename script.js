console.log("Hello World!");

// 1. Favorite foods
let favoriteFoods = ["Ndole", "Poulet DG", "Eru", "Pizza", "Sushi", "Crepes"];

// 2. Display favorite foods
for (let food of favoriteFoods) {
    console.log(`One of my favorite foods is ${food}.`);
}

// 3. Rank favorite foods
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}`);
}

// 4a. Food recommendation function
function printFoodRecommendation(foodName) {
    console.log(`Have you ever tried ${foodName}?`);
    console.log(`I always recommend ${foodName} to friends.`);
    console.log(`Trust me - ${foodName} is delicious.`);
}

// 4b. Call the function three times
printFoodRecommendation("Ndole");
printFoodRecommendation("Poulet DG");
printFoodRecommendation("Eru");

// Friends' favorite foods
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers",
    "Ramen", "Pad Thai", "Curry", "Pho", "Nachos",
    "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani",
    "Tacos", "Croissant", "Churros", "Fried Rice",
    "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot",
    "Enchiladas", "Baklava", "Gyros", "Hummus",
    "Empanadas", "Pancakes", "Muffins", "Samosas",
    "Macarons", "Quiche", "Pierogi", "Arepas",
    "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns",
    "Poutine", "Clam Chowder", "Fajitas", "Canelé",
    "Kimchi", "Tamales", "Omelette", "Biscuits",
    "Tempura", "Spring Rolls", "Crepes"
];

// 5. Print foods containing "a"
for (let food of friendFavorites) {
    if (food.toLowerCase().includes("a")) {
        console.log(food);
    }
}

// 6. Store foods containing "a"
let foodsWithA = friendFavorites.filter(food =>
    food.toLowerCase().includes("a")
);
console.log("Foods containing A:", foodsWithA);

// 7. Long food names
let longFoodNames = friendFavorites.filter(food => food.length > 6);

// 8. Short food names
let shortFoodNames = friendFavorites.filter(food => food.length <= 6);

// 9. Compare arrays
console.log("Long food names:", longFoodNames);
console.log("Short food names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are equal numbers of long and short food names.");
}

// 10. Find longest food name
let longestFoodName = friendFavorites[0];

for (let food of friendFavorites) {
    if (food.length > longestFoodName.length) {
        longestFoodName = food;
    }
}

console.log(`The longest food name in the list is ${longestFoodName} with ${longestFoodName.length} characters.`);
console.log("Welcome to Taste Tracker!");
