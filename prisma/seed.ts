const { PrismaClient } = require("../app/generated/prisma");
const prisma = new PrismaClient();

const mockRestaurants = [
  {
    id: "4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d",
    name: "Kagurazaka Ishikawa Sushi Haru Nakanoshima Sushi",
    desc: "Enjoy the highest quality Omakase with unlimited sake at a reasonable price.",
    category: "YAKITORI",
    city: "osaka",
    rating: 4.2,
    ratingCount: 139,
    priceRange: "3~5",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1555396273-36734d41d205?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=75&fm=jpg&w=1080&fit=max"
    ],
    featuredText: "Top Yakitori Restaurant in Nakanoshima",
    featuredIcon: "stars-02",
    isFavorite: true
  },
  {
    id: "6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d",
    name: "Sushi Ginza Ishikawa",
    desc: "Provides fresh seafood and authentic sushi.",
    category: "SUSHI",
    city: "tokyo",
    rating: 4.5,
    ratingCount: 200,
    priceRange: "4~6",
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=75&fm=jpg&w=1080&fit=max"
    ],
    featuredText: "Top Sushi Restaurant in Tokyo",
    featuredIcon: "stars-02",
    isFavorite: false
  },
  {
    id: "7bd4f3e2-hf98-6b39-d87b-h0dd2ee2397e",
    name: "Ichiran Ramen",
    desc: "Rich broth with a variety of toppings.",
    category: "RAMEN",
    city: "kyoto",
    rating: 4.7,
    ratingCount: 180,
    priceRange: "2~4",
    images: [
      "https://images.unsplash.com/photo-1513161455079-7f7b6c960e0d?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1578474846511-04ba529f3d32?q=75&fm=jpg&w=1080&fit=max"
    ],
    featuredText: "Kyoto’s Famous Ramen Spot",
    featuredIcon: "stars-02",
    isFavorite: true
  },
  {
    id: "8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f",
    name: "Tempura Matsuya",
    desc: "Crispy and delicious tempura.",
    category: "TEMPURA",
    city: "nagoya",
    rating: 4.3,
    ratingCount: 220,
    priceRange: "3~5",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=75&fm=jpg&w=1080&fit=max"
    ],
    featuredText: "Best Tempura in Nagoya",
    featuredIcon: "stars-02",
    isFavorite: false
  },
  {
    id: "9df6h5g4-kh10-8d41-f09d-j2ff4gg4519g",
    name: "Udon Taro",
    desc: "Chewy noodles with rich broth.",
    category: "SOBA",
    city: "fukuoka",
    rating: 4.6,
    ratingCount: 190,
    priceRange: "2~4",
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=75&fm=jpg&w=1080&fit=max",
      "https://images.unsplash.com/photo-1571167366136-b57e07761623?q=75&fm=jpg&w=1080&fit=max"
    ],
    featuredText: "Fukuoka’s Best Udon Restaurant",
    featuredIcon: "stars-02",
    isFavorite: true
  }
];

async function main() {
  console.log("Start seeding...");
  for (const restaurant of mockRestaurants) {
    await prisma.restaurant.upsert({
      where: { id: restaurant.id },
      update: {},
      create: restaurant
    });
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
