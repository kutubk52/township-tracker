const STORAGE_KEY = "township-tracker-v1";

const seedItems = [
  {
    name: "Frozen Yogurt",
    source: "Ice Cream Factory",
    level: 27,
    minutes: 120,
    coins: 38,
    ingredients: [
      { name: "Sugar", qty: 1 },
      { name: "Yogurt", qty: 2 },
    ],
  },
  {
    name: "Ice Cream Bar",
    source: "Ice Cream Factory",
    level: 28,
    minutes: 60,
    coins: 35,
    ingredients: [
      { name: "Ice Cream Cone", qty: 1 },
      { name: "Chocolate", qty: 1 },
    ],
  },
  {
    name: "Chocolate",
    source: "Chocolate Factory",
    level: 26,
    minutes: 90,
    coins: 32,
    ingredients: [
      { name: "Cacao", qty: 2 },
      { name: "Sugar", qty: 1 },
    ],
  },
  {
    name: "Wheat",
    source: "Field",
    level: 1,
    minutes: 2,
    coins: 1,
    ingredients: [],
  },
  {
    name: "Corn",
    source: "Field",
    level: 4,
    minutes: 5,
    coins: 1,
    ingredients: [],
  },
  {
    name: "Carrot",
    source: "Field",
    level: 5,
    minutes: 10,
    coins: 2,
    ingredients: [],
  },
  {
    name: "Sugarcane",
    source: "Field",
    level: 7,
    minutes: 20,
    coins: 3,
    ingredients: [],
  },
  {
    name: "Cotton",
    source: "Field",
    level: 9,
    minutes: 30,
    coins: 4,
    ingredients: [],
  },
  {
    name: "Wool",
    source: "Sheep Farm",
    level: 10,
    minutes: 240,
    coins: 12,
    ingredients: [{ name: "Sheep Feed", qty: 1 }],
  },
  {
    name: "Strawberry",
    source: "Field",
    level: 12,
    minutes: 60,
    coins: 5,
    ingredients: [],
  },
  {
    name: "Tomato",
    source: "Field",
    level: 16,
    minutes: 120,
    coins: 6,
    ingredients: [],
  },
  {
    name: "Pine Tree",
    source: "Field",
    level: 18,
    minutes: 180,
    coins: 8,
    ingredients: [],
  },
  {
    name: "Potato",
    source: "Field",
    level: 22,
    minutes: 240,
    coins: 10,
    ingredients: [],
  },
  {
    name: "Rubber Tree",
    source: "Field",
    level: 29,
    minutes: 240,
    coins: 10,
    ingredients: [],
  },
  {
    name: "Rice",
    source: "Field",
    level: 56,
    minutes: 80,
    coins: 7,
    ingredients: [],
  },
  {
    name: "Mushroom",
    source: "Field",
    level: 63,
    minutes: 150,
    coins: 9,
    ingredients: [],
  },
  {
    name: "Peanut Plant",
    source: "Field",
    level: 62,
    minutes: 30,
    coins: 5,
    ingredients: [],
  },
  {
    name: "Pepper",
    source: "Field",
    level: 29,
    minutes: 60,
    coins: 7,
    ingredients: [],
  },
  {
    name: "Fish",
    source: "Fishermen's Isle",
    level: 29,
    minutes: 480,
    coins: 12,
    ingredients: [],
  },
  {
    name: "Banana",
    source: "Tropical Isle",
    level: 35,
    minutes: 420,
    coins: 8,
    ingredients: [],
  },
  {
    name: "Olives",
    source: "Olivia Isle",
    level: 45,
    minutes: 420,
    coins: 9,
    ingredients: [],
  },
  {
    name: "Silk",
    source: "Olivia Isle",
    level: 31,
    minutes: 420,
    coins: 9,
    ingredients: [],
  },
  {
    name: "Colorful Feather",
    source: "Tropical Isle",
    level: 50,
    minutes: 480,
    coins: 12,
    ingredients: [],
  },
  {
    name: "Pearls",
    source: "Fishermen's Isle",
    level: 56,
    minutes: 480,
    coins: 15,
    ingredients: [],
  },
  {
    name: "Tea Plant",
    source: "Field",
    level: 84,
    minutes: 180,
    coins: 9,
    ingredients: [],
  },
  {
    name: "Glass",
    source: "Construction Material",
    level: 5,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Bricks",
    source: "Construction Material",
    level: 5,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Slabs",
    source: "Construction Material",
    level: 5,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Paint",
    source: "Barn Upgrade Tool",
    level: 5,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Nail",
    source: "Barn Upgrade Tool",
    level: 5,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Hammer",
    source: "Barn Upgrade Tool",
    level: 5,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Shovel",
    source: "Expansion Tool",
    level: 1,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Axe",
    source: "Expansion Tool",
    level: 1,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Saw",
    source: "Expansion Tool",
    level: 1,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Jackhammer",
    source: "Tool Exchange",
    level: 62,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Electric Saw",
    source: "Tool Exchange",
    level: 60,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Drill",
    source: "Tool Exchange",
    level: 60,
    minutes: 0,
    coins: 0,
    ingredients: [],
  },
  {
    name: "Milk",
    source: "Cowshed",
    level: 1,
    minutes: 20,
    coins: 3,
    ingredients: [{ name: "Cow Feed", qty: 1 }],
  },
  {
    name: "Egg",
    source: "Chicken Coop",
    level: 3,
    minutes: 60,
    coins: 8,
    ingredients: [{ name: "Chicken Feed", qty: 1 }],
  },
  {
    name: "Bacon",
    source: "Pig Farm",
    level: 32,
    minutes: 420,
    coins: 18,
    ingredients: [{ name: "Pig Feed", qty: 1 }],
  },
  {
    name: "Cow Feed",
    source: "Feed Mill",
    level: 3,
    minutes: 5,
    coins: 1,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Corn", qty: 1 },
    ],
  },
  {
    name: "Chicken Feed",
    source: "Feed Mill",
    level: 3,
    minutes: 10,
    coins: 2,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Carrot", qty: 1 },
    ],
  },
  {
    name: "Sheep Feed",
    source: "Feed Mill",
    level: 10,
    minutes: 15,
    coins: 3,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Carrot", qty: 2 },
    ],
  },
  {
    name: "Pig Feed",
    source: "Feed Mill",
    level: 32,
    minutes: 20,
    coins: 4,
    ingredients: [
      { name: "Carrot", qty: 2 },
      { name: "Corn", qty: 2 },
    ],
  },
  {
    name: "Bread",
    source: "Bakery",
    level: 2,
    minutes: 5,
    coins: 5,
    ingredients: [{ name: "Wheat", qty: 2 }],
  },
  {
    name: "Cookies",
    source: "Bakery",
    level: 5,
    minutes: 15,
    coins: 44,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Egg", qty: 2 },
    ],
  },
  {
    name: "Bagel",
    source: "Bakery",
    level: 8,
    minutes: 30,
    coins: 55,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Egg", qty: 3 },
      { name: "Sugar", qty: 1 },
    ],
  },
  {
    name: "Pizza",
    source: "Bakery",
    level: 22,
    minutes: 60,
    coins: 68,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Cheese", qty: 1 },
      { name: "Tomato", qty: 2 },
    ],
  },
  {
    name: "Potato Bread",
    source: "Bakery",
    level: 26,
    minutes: 120,
    coins: 158,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Potato", qty: 2 },
      { name: "Egg", qty: 4 },
    ],
  },
  {
    name: "Cream",
    source: "Dairy Factory",
    level: 4,
    minutes: 15,
    coins: 12,
    ingredients: [{ name: "Milk", qty: 1 }],
  },
  {
    name: "Cheese",
    source: "Dairy Factory",
    level: 6,
    minutes: 30,
    coins: 25,
    ingredients: [{ name: "Milk", qty: 2 }],
  },
  {
    name: "Butter",
    source: "Dairy Factory",
    level: 11,
    minutes: 60,
    coins: 39,
    ingredients: [{ name: "Milk", qty: 3 }],
  },
  {
    name: "Yogurt",
    source: "Dairy Factory",
    level: 21,
    minutes: 90,
    coins: 53,
    ingredients: [{ name: "Milk", qty: 4 }],
  },
  {
    name: "Sugar",
    source: "Sugar Factory",
    level: 7,
    minutes: 20,
    coins: 14,
    ingredients: [{ name: "Sugarcane", qty: 1 }],
  },
  {
    name: "Syrup",
    source: "Sugar Factory",
    level: 17,
    minutes: 40,
    coins: 29,
    ingredients: [{ name: "Sugarcane", qty: 2 }],
  },
  {
    name: "Caramel",
    source: "Sugar Factory",
    level: 24,
    minutes: 90,
    coins: 45,
    ingredients: [{ name: "Sugarcane", qty: 3 }],
  },
  {
    name: "Cotton Fabric",
    source: "Textile Factory",
    level: 9,
    minutes: 30,
    coins: 37,
    ingredients: [{ name: "Cotton", qty: 2 }],
  },
  {
    name: "Yarn",
    source: "Textile Factory",
    level: 10,
    minutes: 40,
    coins: 61,
    ingredients: [{ name: "Wool", qty: 2 }],
  },
  {
    name: "Silk Fabric",
    source: "Textile Factory",
    level: 31,
    minutes: 90,
    coins: 140,
    ingredients: [{ name: "Silk", qty: 2 }],
  },
  {
    name: "Nylon Thread",
    source: "Textile Factory",
    level: 36,
    minutes: 120,
    coins: 111,
    ingredients: [{ name: "Rubber Tree", qty: 3 }],
  },
  {
    name: "Shirt",
    source: "Tailor Shop",
    level: 12,
    minutes: 60,
    coins: 45,
    ingredients: [{ name: "Cotton Fabric", qty: 1 }],
  },
  {
    name: "Sweater",
    source: "Tailor Shop",
    level: 14,
    minutes: 90,
    coins: 76,
    ingredients: [{ name: "Yarn", qty: 1 }],
  },
  {
    name: "Coat",
    source: "Tailor Shop",
    level: 20,
    minutes: 120,
    coins: 125,
    ingredients: [
      { name: "Cotton Fabric", qty: 1 },
      { name: "Yarn", qty: 1 },
    ],
  },
  {
    name: "Hat",
    source: "Tailor Shop",
    level: 31,
    minutes: 150,
    coins: 231,
    ingredients: [
      { name: "Cotton Fabric", qty: 1 },
      { name: "Silk Fabric", qty: 1 },
    ],
  },
  {
    name: "Dress",
    source: "Tailor Shop",
    level: 33,
    minutes: 180,
    coins: 268,
    ingredients: [
      { name: "Yarn", qty: 1 },
      { name: "Silk Fabric", qty: 1 },
    ],
  },
  {
    name: "Suit",
    source: "Tailor Shop",
    level: 36,
    minutes: 240,
    coins: 330,
    ingredients: [
      { name: "Yarn", qty: 1 },
      { name: "Cotton Fabric", qty: 1 },
      { name: "Silk Fabric", qty: 1 },
    ],
  },
  {
    name: "Tyrolean Hat",
    source: "Tailor Shop",
    level: 50,
    minutes: 165,
    coins: 274,
    ingredients: [
      { name: "Cotton Fabric", qty: 1 },
      { name: "Silk Fabric", qty: 1 },
      { name: "Colorful Feather", qty: 1 },
    ],
  },
  {
    name: "Gown",
    source: "Tailor Shop",
    level: 87,
    minutes: 210,
    coins: 815,
    ingredients: [
      { name: "Silk Fabric", qty: 2 },
      { name: "Pearls", qty: 5 },
    ],
  },
  {
    name: "Rubber",
    source: "Rubber Factory",
    level: 29,
    minutes: 60,
    coins: 26,
    ingredients: [{ name: "Rubber Tree", qty: 1 }],
  },
  {
    name: "Glue",
    source: "Rubber Factory",
    level: 52,
    minutes: 120,
    coins: 75,
    ingredients: [{ name: "Rubber Tree", qty: 2 }],
  },
  {
    name: "Paper",
    source: "Paper Factory",
    level: 18,
    minutes: 90,
    coins: 19,
    ingredients: [{ name: "Pine Tree", qty: 1 }],
  },
  {
    name: "Paper Towel",
    source: "Paper Factory",
    level: 23,
    minutes: 150,
    coins: 39,
    ingredients: [{ name: "Pine Tree", qty: 2 }],
  },
  {
    name: "Wallpaper",
    source: "Paper Factory",
    level: 30,
    minutes: 180,
    coins: 147,
    ingredients: [
      { name: "Pine Tree", qty: 2 },
      { name: "Rubber", qty: 1 },
    ],
  },
  {
    name: "Book",
    source: "Paper Factory",
    level: 52,
    minutes: 210,
    coins: 304,
    ingredients: [
      { name: "Paper", qty: 4 },
      { name: "Cotton Fabric", qty: 1 },
      { name: "Glue", qty: 1 },
    ],
  },
  {
    name: "Tea Bags",
    source: "Paper Factory",
    level: 85,
    minutes: 15,
    coins: 93,
    ingredients: [
      { name: "Paper", qty: 1 },
      { name: "Tea Plant", qty: 1 },
    ],
  },
  {
    name: "Muffin",
    source: "Pastry Factory",
    level: 24,
    minutes: 30,
    coins: 46,
    ingredients: [
      { name: "Sugar", qty: 1 },
      { name: "Egg", qty: 4 },
      { name: "Wheat", qty: 3 },
    ],
  },
  {
    name: "Cupcake",
    source: "Pastry Factory",
    level: 30,
    minutes: 60,
    coins: 61,
    ingredients: [
      { name: "Sugar", qty: 1 },
      { name: "Egg", qty: 5 },
      { name: "Cream", qty: 1 },
    ],
  },
  {
    name: "Donut",
    source: "Pastry Factory",
    level: 33,
    minutes: 90,
    coins: 88,
    ingredients: [
      { name: "Bagel", qty: 1 },
      { name: "Caramel", qty: 1 },
      { name: "Cacao", qty: 1 },
    ],
  },
  {
    name: "Ice Cream Cone",
    source: "Ice Cream Factory",
    level: 20,
    minutes: 30,
    coins: 32,
    ingredients: [
      { name: "Milk", qty: 1 },
      { name: "Sugar", qty: 1 },
      { name: "Cream", qty: 1 },
    ],
  },
  {
    name: "Popsicle",
    source: "Ice Cream Factory",
    level: 21,
    minutes: 90,
    coins: 44,
    ingredients: [
      { name: "Sugar", qty: 2 },
      { name: "Strawberry", qty: 2 },
    ],
  },
  {
    name: "Popcorn",
    source: "Snack Factory",
    level: 8,
    minutes: 30,
    coins: 10,
    ingredients: [{ name: "Corn", qty: 2 }],
  },
  {
    name: "Corn Chips",
    source: "Snack Factory",
    level: 19,
    minutes: 60,
    coins: 15,
    ingredients: [{ name: "Corn", qty: 3 }],
  },
  {
    name: "Granola",
    source: "Snack Factory",
    level: 23,
    minutes: 90,
    coins: 45,
    ingredients: [
      { name: "Wheat", qty: 2 },
      { name: "Strawberry", qty: 2 },
    ],
  },
  {
    name: "Potato Chips",
    source: "Snack Factory",
    level: 29,
    minutes: 120,
    coins: 50,
    ingredients: [{ name: "Potato", qty: 2 }],
  },
  {
    name: "Canape",
    source: "Snack Factory",
    level: 46,
    minutes: 90,
    coins: 69,
    ingredients: [
      { name: "Bread", qty: 1 },
      { name: "Cheese", qty: 2 },
      { name: "Olives", qty: 2 },
    ],
  },
  {
    name: "Glazed Bacon",
    source: "Snack Factory",
    level: 54,
    minutes: 240,
    coins: 75,
    ingredients: [
      { name: "Bacon", qty: 2 },
      { name: "Caramel", qty: 1 },
    ],
  },
  {
    name: "Puffed Rice",
    source: "Snack Factory",
    level: 57,
    minutes: 90,
    coins: 52,
    ingredients: [
      { name: "Rice", qty: 4 },
      { name: "Syrup", qty: 1 },
    ],
  },
  {
    name: "Dried Mushrooms",
    source: "Snack Factory",
    level: 63,
    minutes: 150,
    coins: 55,
    ingredients: [{ name: "Mushroom", qty: 3 }],
  },
  {
    name: "Salted Peanuts",
    source: "Snack Factory",
    level: 66,
    minutes: 60,
    coins: 58,
    ingredients: [{ name: "Peanut Plant", qty: 3 }],
  },
  {
    name: "Milkshake",
    source: "Fast Food Restaurant",
    level: 13,
    minutes: 15,
    coins: 22,
    ingredients: [
      { name: "Milk", qty: 2 },
      { name: "Strawberry", qty: 1 },
    ],
  },
  {
    name: "Cheeseburger",
    source: "Fast Food Restaurant",
    level: 19,
    minutes: 30,
    coins: 48,
    ingredients: [
      { name: "Bread", qty: 2 },
      { name: "Cheese", qty: 1 },
      { name: "Tomato", qty: 1 },
    ],
  },
  {
    name: "Sandwich",
    source: "Fast Food Restaurant",
    level: 23,
    minutes: 60,
    coins: 52,
    ingredients: [
      { name: "Bread", qty: 2 },
      { name: "Butter", qty: 1 },
      { name: "Strawberry", qty: 2 },
    ],
  },
  {
    name: "French Fries",
    source: "Fast Food Restaurant",
    level: 25,
    minutes: 45,
    coins: 55,
    ingredients: [
      { name: "Potato", qty: 2 },
      { name: "Cream", qty: 1 },
    ],
  },
  {
    name: "Baked Potato",
    source: "Fast Food Restaurant",
    level: 28,
    minutes: 45,
    coins: 80,
    ingredients: [
      { name: "Potato", qty: 2 },
      { name: "Cheese", qty: 2 },
    ],
  },
  {
    name: "Fish Burger",
    source: "Fast Food Restaurant",
    level: 30,
    minutes: 90,
    coins: 110,
    ingredients: [
      { name: "Bread", qty: 2 },
      { name: "Fish", qty: 1 },
      { name: "Pepper", qty: 2 },
    ],
  },
  {
    name: "Fish and Chips",
    source: "Fast Food Restaurant",
    level: 41,
    minutes: 120,
    coins: 130,
    ingredients: [
      { name: "Fish", qty: 2 },
      { name: "Potato", qty: 2 },
    ],
  },
  {
    name: "Peanut Butter",
    source: "Snack Factory",
    level: 62,
    minutes: 60,
    coins: 48,
    ingredients: [{ name: "Peanut Plant", qty: 2 }],
  },
  {
    name: "Peanut Butter Crepes",
    source: "Fast Food Restaurant",
    level: 63,
    minutes: 90,
    coins: 115,
    ingredients: [
      { name: "Bread", qty: 2 },
      { name: "Peanut Butter", qty: 1 },
      { name: "Banana", qty: 2 },
    ],
  },
  {
    name: "Honey",
    source: "Apiary",
    level: 13,
    minutes: 120,
    coins: 18,
    ingredients: [],
  },
  {
    name: "Beeswax",
    source: "Apiary",
    level: 25,
    minutes: 180,
    coins: 35,
    ingredients: [{ name: "Honey", qty: 2 }],
  },
  {
    name: "Strawberry Jam",
    source: "Jam House",
    level: 27,
    minutes: 90,
    coins: 41,
    ingredients: [{ name: "Strawberry", qty: 3 }],
  },
  {
    name: "Peach Marmalade",
    source: "Jam House",
    level: 29,
    minutes: 150,
    coins: 133,
    ingredients: [{ name: "Peach", qty: 3 }],
  },
  {
    name: "Watermelon Jam",
    source: "Jam House",
    level: 30,
    minutes: 180,
    coins: 196,
    ingredients: [{ name: "Watermelon", qty: 3 }],
  },
  {
    name: "Plum Jam",
    source: "Jam House",
    level: 32,
    minutes: 240,
    coins: 299,
    ingredients: [{ name: "Plum", qty: 3 }],
  },
  {
    name: "Grape Jelly",
    source: "Jam House",
    level: 38,
    minutes: 210,
    coins: 196,
    ingredients: [{ name: "Grape", qty: 3 }],
  },
  {
    name: "Rose Jam",
    source: "Jam House",
    level: 61,
    minutes: 120,
    coins: 107,
    ingredients: [{ name: "Rose", qty: 3 }],
  },
  {
    name: "Caramelized Mushrooms",
    source: "Jam House",
    level: 75,
    minutes: 105,
    coins: 297,
    ingredients: [
      { name: "Sugar", qty: 2 },
      { name: "Mushroom", qty: 3 },
    ],
  },
  {
    name: "Jam Peanut Butter",
    source: "Jam House",
    level: 78,
    minutes: 135,
    coins: 243,
    ingredients: [
      { name: "Peanut Plant", qty: 3 },
      { name: "Syrup", qty: 2 },
    ],
  },
  {
    name: "Apple Jam",
    source: "Jam House",
    level: 83,
    minutes: 165,
    coins: 217,
    ingredients: [{ name: "Apple", qty: 3 }],
  },
  {
    name: "Orange",
    source: "Field",
    level: 28,
    minutes: 180,
    coins: 7,
    ingredients: [],
  },
  {
    name: "Apple",
    source: "Field",
    level: 24,
    minutes: 120,
    coins: 6,
    ingredients: [],
  },
  {
    name: "Watermelon",
    source: "Field",
    level: 30,
    minutes: 180,
    coins: 7,
    ingredients: [],
  },
  {
    name: "Lemon",
    source: "Field",
    level: 31,
    minutes: 180,
    coins: 8,
    ingredients: [],
  },
  {
    name: "Plum",
    source: "Field",
    level: 32,
    minutes: 240,
    coins: 7,
    ingredients: [],
  },
  {
    name: "Grape",
    source: "Field",
    level: 27,
    minutes: 150,
    coins: 7,
    ingredients: [],
  },
  {
    name: "Wine",
    source: "Vineyard",
    level: 35,
    minutes: 240,
    coins: 42,
    ingredients: [{ name: "Grape", qty: 3 }],
  },
  {
    name: "Whiskey",
    source: "Distillery",
    level: 45,
    minutes: 300,
    coins: 75,
    ingredients: [
      { name: "Grape", qty: 4 },
      { name: "Sugar", qty: 2 },
    ],
  },
  {
    name: "Soy Sauce",
    source: "Soy Sauce Factory",
    level: 42,
    minutes: 180,
    coins: 48,
    ingredients: [{ name: "Corn", qty: 4 }],
  },
  {
    name: "Brownie",
    source: "Pastry Factory",
    level: 28,
    minutes: 45,
    coins: 52,
    ingredients: [
      { name: "Cacao", qty: 2 },
      { name: "Syrup", qty: 1 },
      { name: "Butter", qty: 1 },
    ],
  },
  {
    name: "Cacao",
    source: "Tropical Isle",
    level: 29,
    minutes: 480,
    coins: 12,
    ingredients: [],
  },
  {
    name: "Rose",
    source: "Field",
    level: 61,
    minutes: 120,
    coins: 8,
    ingredients: [],
  },
];

const state = loadState();
const byId = (id) => document.getElementById(id);
const itemMap = () =>
  new Map(state.items.map((item) => [item.name.toLowerCase(), item]));

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = JSON.parse(stored);
    return syncSeedItems({
      items: Array.isArray(parsed.items) ? parsed.items : [],
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
      inventory: parsed.inventory || {},
      completed: parsed.completed || {},
      capacity: Number(parsed.capacity) || 50,
    });
  }
  return {
    items: seedItems,
    orders: [],
    inventory: {},
    completed: {},
    capacity: 50,
  };
}

function syncSeedItems(data) {
  const managedNames = new Set(
    seedItems.map((item) => item.name.toLowerCase()),
  );
  const customItems = data.items.filter(
    (item) => !managedNames.has(String(item.name || "").toLowerCase()),
  );
  return {
    ...data,
    capacity: Number(data.capacity) || 50,
    items: [...seedItems, ...customItems],
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeImportedState(data) {
  if (!data || !Array.isArray(data.items) || !Array.isArray(data.orders)) {
    throw new Error("Backup file is missing tracker data.");
  }

  return {
    items: data.items
      .map((item) => ({
        name: String(item.name || "").trim(),
        source: String(item.source || "Unknown").trim(),
        level: Number(item.level) || 1,
        minutes: Number(item.minutes) || 0,
        coins: Number(item.coins) || 0,
        ingredients: Array.isArray(item.ingredients)
          ? item.ingredients
              .map((ingredient) => ({
                name: String(ingredient.name || "").trim(),
                qty: Number(ingredient.qty) || 1,
              }))
              .filter((ingredient) => ingredient.name)
          : [],
      }))
      .filter((item) => item.name),
    orders: data.orders
      .map((order) => ({
        id: String(order.id || uid()),
        type: order.type === "train" ? "train" : "helicopter",
        name: String(order.name || "Imported order").trim(),
        coins: Number(order.coins) || 0,
        xp: Number(order.xp) || 0,
        reward: String(order.reward || "").trim(),
        items: Array.isArray(order.items)
          ? order.items
              .map((line) => ({
                name: String(line.name || "").trim(),
                qty: Number(line.qty) || 1,
              }))
              .filter((line) => line.name)
          : [],
        done: Boolean(order.done),
        createdAt: Number(order.createdAt) || Date.now(),
      }))
      .filter((order) => order.items.length),
    inventory:
      typeof data.inventory === "object" && data.inventory
        ? data.inventory
        : {},
    completed:
      typeof data.completed === "object" && data.completed
        ? data.completed
        : {},
    capacity: Number(data.capacity) || 50,
  };
}

function setBackupStatus(message, isError = false) {
  const status = byId("backupStatus");
  status.textContent = message;
  status.classList.toggle("error", isError);
}

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatMinutes(minutes) {
  if (!minutes) return "0m";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? `${h}h${m ? ` ${m}m` : ""}` : `${m}m`;
}

function parseIngredients(value) {
  if (!value.trim()) return [];
  return value
    .split(",")
    .map((part) => {
      const clean = part.trim();
      const match = clean.match(/^(\d+)\s+(.+)$/);
      if (!match) return { qty: 1, name: clean };
      return { qty: Number(match[1]), name: match[2].trim() };
    })
    .filter((ingredient) => ingredient.name);
}

function ingredientText(ingredients) {
  return ingredients.length
    ? ingredients.map((item) => `${item.qty} ${item.name}`).join(", ")
    : "No ingredients";
}

function inventoryUsed() {
  return Object.values(state.inventory).reduce(
    (sum, qty) => sum + Math.max(0, Number(qty) || 0),
    0,
  );
}

function addOrderLine(name = "", qty = 1) {
  const row = document.createElement("div");
  row.className = "order-line";
  row.innerHTML = `
    <input class="line-name" list="itemNames" placeholder="Item" value="${name}">
    <input class="line-qty" type="number" min="1" step="1" value="${qty}">
    <button class="icon-button" type="button" aria-label="Remove item">x</button>
  `;
  row.querySelector("button").addEventListener("click", () => row.remove());
  byId("orderLines").append(row);
}

function orderType() {
  return document.querySelector('input[name="orderType"]:checked').value;
}

function getOrderNeed(order) {
  return order.items.reduce((sum, line) => {
    sum[line.name] = (sum[line.name] || 0) + line.qty;
    return sum;
  }, {});
}

function productionMinutesForItem(name, qty, nested = false, seen = new Set()) {
  const item = itemMap().get(name.toLowerCase());
  if (!item || seen.has(name.toLowerCase())) return 0;
  const direct = item.minutes * qty;
  if (!nested) return direct;
  seen.add(name.toLowerCase());
  const ingredientMinutes = item.ingredients.reduce((sum, ingredient) => {
    return (
      sum +
      productionMinutesForItem(
        ingredient.name,
        ingredient.qty * qty,
        true,
        seen,
      )
    );
  }, 0);
  seen.delete(name.toLowerCase());
  return direct + ingredientMinutes;
}

function orderStats(order) {
  const minutes = order.items.reduce(
    (sum, line) => sum + productionMinutesForItem(line.name, line.qty, true),
    0,
  );
  const value = order.coins + Math.round(order.xp * 0.5);
  const score = minutes > 0 ? value / minutes : value;
  return { minutes, value, score };
}

function aggregateDemand(nested) {
  const demand = {};
  const add = (name, qty, includeChildren, seen = new Set()) => {
    demand[name] = (demand[name] || 0) + qty;
    if (!includeChildren) return;
    const key = name.toLowerCase();
    const item = itemMap().get(key);
    if (!item || seen.has(key)) return;
    seen.add(key);
    item.ingredients.forEach((ingredient) =>
      add(ingredient.name, ingredient.qty * qty, true, seen),
    );
    seen.delete(key);
  };

  state.orders
    .filter((order) => !order.done)
    .forEach((order) =>
      order.items.forEach((line) => add(line.name, line.qty, nested)),
    );

  return demand;
}

function addDemand(demand, name, qty, nested, seen = new Set()) {
  demand[name] = (demand[name] || 0) + qty;
  if (!nested) return;

  const key = name.toLowerCase();
  const item = itemMap().get(key);
  if (!item || seen.has(key)) return;

  seen.add(key);
  item.ingredients.forEach((ingredient) =>
    addDemand(demand, ingredient.name, ingredient.qty * qty, true, seen),
  );
  seen.delete(key);
}

function orderMissingItems(order) {
  return Object.entries(getOrderNeed(order)).map(([name, qty]) => {
    const have = state.inventory[name] || 0;
    const missing = Math.max(0, qty - have);
    const item = itemMap().get(name.toLowerCase());
    return {
      name,
      qty,
      have,
      missing,
      item,
      minutes: productionMinutesForItem(name, missing, false),
    };
  });
}

function missingIngredientsForOrder(order, nested) {
  const demand = {};
  orderMissingItems(order)
    .filter((entry) => entry.missing > 0)
    .forEach((entry) => {
      const item = itemMap().get(entry.name.toLowerCase());
      if (!item) return;
      item.ingredients.forEach((ingredient) => {
        addDemand(
          demand,
          ingredient.name,
          ingredient.qty * entry.missing,
          nested,
        );
      });
    });
  return demand;
}

function addProductionDemand(
  demand,
  name,
  qty,
  nested,
  alreadyNet,
  orderName,
  seen = new Set(),
) {
  if (qty <= 0) return;
  const key = name.toLowerCase();
  if (!demand[key]) {
    const item = itemMap().get(key);
    demand[key] = {
      name,
      item,
      alreadyNetQty: 0,
      grossQty: 0,
      orders: new Set(),
    };
  }

  if (alreadyNet) demand[key].alreadyNetQty += qty;
  else demand[key].grossQty += qty;
  if (orderName) demand[key].orders.add(orderName);

  if (!nested || seen.has(key)) return;
  const item = demand[key].item;
  if (!item) return;

  seen.add(key);
  item.ingredients.forEach((ingredient) => {
    addProductionDemand(
      demand,
      ingredient.name,
      ingredient.qty * qty,
      true,
      false,
      "",
      seen,
    );
  });
  seen.delete(key);
}

function buildProductionDemand(nested) {
  const demand = {};
  state.orders
    .filter((order) => !order.done)
    .forEach((order) => {
      orderMissingItems(order)
        .filter((entry) => entry.missing > 0)
        .forEach((entry) => {
          addProductionDemand(
            demand,
            entry.name,
            entry.missing,
            nested,
            true,
            order.name,
          );
        });
    });

  return Object.values(demand)
    .map((entry) => {
      const have = state.inventory[entry.name] || 0;
      const makeFromGross = Math.max(0, entry.grossQty - have);
      const make = entry.alreadyNetQty + makeFromGross;
      return {
        ...entry,
        have,
        make,
        demandQty: entry.alreadyNetQty + entry.grossQty,
        minutes: productionMinutesForItem(entry.name, make, false),
        orders: [...entry.orders],
      };
    })
    .filter((entry) => entry.make > 0);
}

function renderDatalist() {
  const itemOptions = state.items
    .slice()
    .sort(
      (a, b) =>
        (a.source || "Unknown").localeCompare(b.source || "Unknown") ||
        a.name.localeCompare(b.name),
    );
  const groupedOptions = itemOptions.reduce((markup, item, index, list) => {
    const source = item.source || "Unknown";
    const previousSource = list[index - 1]?.source || "Unknown";
    const nextSource = list[index + 1]?.source || "Unknown";
    const open =
      index === 0 || source !== previousSource
        ? `<optgroup label="${source}">`
        : "";
    const close =
      index === list.length - 1 || source !== nextSource ? "</optgroup>" : "";
    return `${markup}${open}<option value="${item.name}">${item.name}</option>${close}`;
  }, "");
  byId("itemNames").innerHTML = state.items
    .map((item) => `<option value="${item.name}"></option>`)
    .join("");
  byId("inventoryItem").innerHTML =
    `<option value="">Select item</option>${groupedOptions}<option value="__custom">Custom item...</option>`;
}

function renderInventory() {
  byId("barnCapacity").value = state.capacity;
  const entries = Object.entries(state.inventory)
    .filter(([, qty]) => qty > 0)
    .sort(([a], [b]) => a.localeCompare(b));
  const query = byId("inventorySearch").value.trim().toLowerCase();
  const filtered = entries.filter(
    ([name]) => !query || name.toLowerCase().includes(query),
  );
  byId("inventoryList").innerHTML = entries.length
    ? filtered
        .map(([name, qty]) => {
          const item = itemMap().get(name.toLowerCase());
          return `
          <article class="inventory-row">
            <div>
              <strong>${name}</strong>
              <div class="muted">${item ? item.source : "Unknown source"}</div>
            </div>
            <div class="inventory-qty">${qty}</div>
            <div class="actions">
              <button data-adjust-inventory="${name}" data-delta="-1" type="button">-1</button>
              <button data-adjust-inventory="${name}" data-delta="1" type="button">+1</button>
              <button class="danger" data-remove-inventory="${name}" type="button">Remove</button>
            </div>
          </article>
        `;
        })
        .join("") ||
      `<div class="empty">No inventory matches that search.</div>`
    : `<div class="empty">No inventory entered yet.</div>`;
}

function renderOrders() {
  const sort = byId("sortOrders").value;
  const orders = [...state.orders].sort((a, b) => {
    const as = orderStats(a);
    const bs = orderStats(b);
    if (sort === "coins") return b.coins - a.coins;
    if (sort === "time") return as.minutes - bs.minutes;
    if (sort === "created") return b.createdAt - a.createdAt;
    return bs.score - as.score;
  });

  byId("ordersList").innerHTML = orders.length
    ? orders
        .map((order) => {
          const stats = orderStats(order);
          return `
      <article class="order-card ${order.done ? "done" : ""}">
        <div>
          <div class="card-title">
            <strong>${order.name}</strong>
            <span class="badge ${order.type === "train" ? "train" : ""}">${order.type}</span>
          </div>
          <div class="meta">
            <span>${order.coins} coins</span>
            <span>${order.xp} XP</span>
            <span>${formatMinutes(stats.minutes)} total</span>
            <span>${stats.score.toFixed(2)} reward/min</span>
            ${order.reward ? `<span>${order.reward}</span>` : ""}
          </div>
          <div class="items">${order.items.map((line) => `${line.qty} ${line.name}`).join(", ")}</div>
        </div>
        <div class="actions">
          <button data-toggle-order="${order.id}" type="button">${order.done ? "Reopen" : "Done"}</button>
          <button class="danger" data-delete-order="${order.id}" type="button">Delete</button>
        </div>
      </article>
    `;
        })
        .join("")
    : `<div class="empty">Add helicopter or train orders to start ranking them.</div>`;
}

function renderProduction() {
  const nested = byId("includeNested").checked;
  const entries = buildProductionDemand(nested).sort((a, b) => {
    const sourceCompare = (a.item?.source || "Unknown source").localeCompare(
      b.item?.source || "Unknown source",
    );
    return (
      sourceCompare || b.minutes - a.minutes || a.name.localeCompare(b.name)
    );
  });

  const groups = entries.reduce((acc, entry) => {
    const source = entry.item?.source || "Unknown source";
    if (!acc[source]) acc[source] = [];
    acc[source].push(entry);
    return acc;
  }, {});

  byId("productionPlan").innerHTML = entries.length
    ? Object.entries(groups)
        .map(([source, items]) => {
          const totalItems = items.reduce((sum, item) => sum + item.make, 0);
          const totalMinutes = items.reduce(
            (sum, item) => sum + item.minutes,
            0,
          );
          return `
          <article class="factory-card">
            <div class="factory-head">
              <div>
                <strong>${source}</strong>
                <div class="muted">${totalItems} items - ${formatMinutes(totalMinutes)}</div>
              </div>
            </div>
            <div class="factory-items">
              ${items
                .map(
                  (entry) => `
                <div class="factory-row">
                  <div>
                    <strong>${entry.name}</strong>
                    <div class="muted">${entry.orders.length ? `For ${entry.orders.join(", ")}` : "Ingredient production"}</div>
                  </div>
                  <div class="need-box">
                    <span>Demand ${entry.demandQty}</span>
                    <span>Have ${entry.have}</span>
                    <span>Make ${entry.make}</span>
                    <span>${formatMinutes(entry.minutes)}</span>
                  </div>
                  <button data-complete-item="${entry.name}" type="button">+1 made</button>
                </div>
              `,
                )
                .join("")}
            </div>
          </article>
        `;
        })
        .join("")
    : `<div class="empty">Add active orders to see missing items grouped by factory.</div>`;

  byId("ingredientDemand").innerHTML = entries.length
    ? entries
        .sort((a, b) => b.make - a.make || a.name.localeCompare(b.name))
        .map(
          (entry) =>
            `<span class="pill">${entry.name}: make ${entry.make}</span>`,
        )
        .join("")
    : `<div class="empty">Everything requested is covered by inventory.</div>`;
}

function renderCatalog() {
  const query = byId("catalogSearch").value.trim().toLowerCase();
  const items = state.items
    .filter(
      (item) =>
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.source.toLowerCase().includes(query),
    )
    .sort(
      (a, b) =>
        a.level - b.level ||
        a.source.localeCompare(b.source) ||
        a.name.localeCompare(b.name),
    );

  byId("catalogList").innerHTML = items
    .map(
      (item) => `
    <article class="catalog-row">
      <div><strong>${item.name}</strong><div class="muted">Level ${item.level || "-"}</div></div>
      <div>${item.source || "Unknown"}<div class="muted">${formatMinutes(item.minutes)} production</div></div>
      <div class="muted">${ingredientText(item.ingredients)}</div>
      <button data-edit-item="${item.name}" type="button">Edit</button>
    </article>
  `,
    )
    .join("");
}

function renderSummary() {
  const activeOrders = state.orders.filter((order) => !order.done);
  const demand = aggregateDemand(false);
  const queueMinutes = Object.entries(demand).reduce((sum, [name, qty]) => {
    return (
      sum +
      productionMinutesForItem(
        name,
        Math.max(0, qty - (state.inventory[name] || 0)),
        false,
      )
    );
  }, 0);
  const used = inventoryUsed();
  const remaining = state.capacity - used;
  byId("activeOrdersCount").textContent = activeOrders.length;
  byId("neededItemsCount").textContent = Object.values(demand).reduce(
    (a, b) => a + b,
    0,
  );
  byId("queueHours").textContent = formatMinutes(queueMinutes);
  byId("barnSpace").textContent = `${remaining}/${state.capacity}`;
  byId("barnSpace").classList.toggle("over-capacity", remaining < 0);
}

function renderAll() {
  renderDatalist();
  renderInventory();
  renderOrders();
  renderProduction();
  renderCatalog();
  renderSummary();
  saveState();
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab, .view")
      .forEach((el) => el.classList.remove("active"));
    tab.classList.add("active");
    byId(`${tab.dataset.view}View`).classList.add("active");
  });
});

byId("addOrderLine").addEventListener("click", () => addOrderLine());

byId("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const items = [...document.querySelectorAll(".order-line")]
    .map((row) => ({
      name: row.querySelector(".line-name").value.trim(),
      qty: Number(row.querySelector(".line-qty").value),
    }))
    .filter((line) => line.name && line.qty > 0);

  if (!items.length) return;

  state.orders.push({
    id: uid(),
    type: orderType(),
    name: byId("orderName").value.trim(),
    coins: Number(byId("orderCoins").value) || 0,
    xp: Number(byId("orderXp").value) || 0,
    reward: byId("orderReward").value.trim(),
    items,
    done: false,
    createdAt: Date.now(),
  });

  event.target.reset();
  byId("orderLines").innerHTML = "";
  addOrderLine();
  renderAll();
});

byId("inventoryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = byId("inventoryItem").value.trim();
  const custom = byId("customInventoryItem").value.trim();
  const name = selected === "__custom" ? custom : selected;
  if (!name) return;
  state.inventory[name] = Number(byId("inventoryQty").value) || 0;
  event.target.reset();
  byId("inventoryQty").value = 0;
  byId("customInventoryLabel").classList.add("hidden");
  renderAll();
});

byId("inventoryItem").addEventListener("change", () => {
  const isCustom = byId("inventoryItem").value === "__custom";
  byId("customInventoryLabel").classList.toggle("hidden", !isCustom);
  byId("customInventoryItem").required = isCustom;
  if (isCustom) byId("customInventoryItem").focus();
});

byId("capacityForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.capacity = Math.max(1, Number(byId("barnCapacity").value) || 50);
  renderAll();
});

byId("catalogForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = byId("catalogName").value.trim();
  const nextItem = {
    name,
    source: byId("catalogFactory").value.trim() || "Unknown",
    level: Number(byId("catalogLevel").value) || 1,
    minutes: Number(byId("catalogMinutes").value) || 0,
    coins: Number(byId("catalogCoins").value) || 0,
    ingredients: parseIngredients(byId("catalogIngredients").value),
  };
  const existingIndex = state.items.findIndex(
    (item) => item.name.toLowerCase() === name.toLowerCase(),
  );
  if (existingIndex >= 0) state.items[existingIndex] = nextItem;
  else state.items.push(nextItem);
  event.target.reset();
  renderAll();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  let changed = false;

  const orderToToggle = target.dataset.toggleOrder;
  const orderToDelete = target.dataset.deleteOrder;
  const itemToEdit = target.dataset.editItem;
  const itemToComplete = target.dataset.completeItem;
  const inventoryToRemove = target.dataset.removeInventory;
  const inventoryToAdjust = target.dataset.adjustInventory;

  if (orderToToggle) {
    const order = state.orders.find((item) => item.id === orderToToggle);
    if (order) order.done = !order.done;
    changed = true;
  }
  if (orderToDelete) {
    const index = state.orders.findIndex((item) => item.id === orderToDelete);
    if (index >= 0) state.orders.splice(index, 1);
    changed = true;
  }
  if (itemToEdit) {
    const item = state.items.find((entry) => entry.name === itemToEdit);
    if (item) {
      byId("catalogName").value = item.name;
      byId("catalogFactory").value = item.source;
      byId("catalogLevel").value = item.level;
      byId("catalogMinutes").value = item.minutes;
      byId("catalogCoins").value = item.coins;
      byId("catalogIngredients").value =
        ingredientText(item.ingredients) === "No ingredients"
          ? ""
          : ingredientText(item.ingredients);
      document.querySelector('[data-view="catalog"]').click();
    }
    changed = true;
  }
  if (itemToComplete) {
    state.completed[itemToComplete] =
      (state.completed[itemToComplete] || 0) + 1;
    state.inventory[itemToComplete] =
      (state.inventory[itemToComplete] || 0) + 1;
    changed = true;
  }
  if (inventoryToRemove) {
    delete state.inventory[inventoryToRemove];
    changed = true;
  }
  if (inventoryToAdjust) {
    const delta = Number(target.dataset.delta) || 0;
    state.inventory[inventoryToAdjust] = Math.max(
      0,
      (state.inventory[inventoryToAdjust] || 0) + delta,
    );
    if (state.inventory[inventoryToAdjust] === 0)
      delete state.inventory[inventoryToAdjust];
    changed = true;
  }
  if (changed) renderAll();
});

byId("sortOrders").addEventListener("change", renderAll);
byId("includeNested").addEventListener("change", renderAll);
byId("catalogSearch").addEventListener("input", renderCatalog);
byId("inventorySearch").addEventListener("input", renderInventory);

byId("resetData").addEventListener("click", () => {
  state.items = seedItems;
  state.orders = [];
  state.inventory = {};
  state.completed = {};
  state.capacity = 50;
  renderAll();
});

byId("exportData").addEventListener("click", () => {
  const payload = JSON.stringify(
    { ...state, exportedAt: new Date().toISOString() },
    null,
    2,
  );
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `township-tracker-backup-${stamp}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setBackupStatus("Backup exported.");
});

byId("importData").addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  try {
    const imported = syncSeedItems(
      normalizeImportedState(JSON.parse(await file.text())),
    );
    Object.assign(state, imported);
    renderAll();
    setBackupStatus("Backup imported.");
  } catch (error) {
    setBackupStatus(error.message || "Could not import that file.", true);
  } finally {
    event.target.value = "";
  }
});

addOrderLine();
renderAll();
