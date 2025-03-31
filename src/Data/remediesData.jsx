const remediesData = [
  {
    id: 1,
    category: "cold",
    title: "Turmeric Milk (Golden Milk)",
    rating: 4.9,
    shortDescription:
      "A powerful remedy for colds, coughs, and respiratory infections. Boosts immunity and reduces inflammation.",
    ingredients: [
      "1 cup milk",
      "1 tsp turmeric",
      "Pinch of black pepper",
      "Honey to taste",
    ],
    instructions: [
      "Add milk to a small saucepan and heat over medium heat until hot but not boiling.",
      "Add turmeric, black pepper, and any optional spices.",
      "Whisk to combine and prevent clumping.",
      "Simmer for 5-10 minutes to allow the flavors to meld.",
      "Strain if using fresh ginger.",
      "Add honey or maple syrup to taste.",
      "Drink while warm, preferably before bedtime.",
      "Always drink warm water instead of normal water to get better results",
    ],
  },

  {
    id: 2,
    category: "fever",
    title: "Basil Leaf Tea",
    rating: 4.7,
    shortDescription:
      "A natural fever reducer that helps cool the body and boost immunity. Also relieves headaches and body pain.",
    ingredients: [
      "15-20 basil leaves",
      "1 cup water",
      "1/2 tsp ginger (grated)",
      "Honey to taste",
    ],
    instructions: [
      "Boil water in a small pot.",
      "Add basil leaves and grated ginger.",
      "Simmer for 5 minutes.",
      "Strain and add honey to taste.",
      "Drink warm 2-3 times a day.",
    ],
  },

  {
    id: 3,
    category: "stomach problems",
    title: "Bloating, Indigestion & Gas trouble",
    rating: 4.8,
    shortDescription:
      "A simple yet effective remedy for digestive issues like bloating, gas, and indigestion. Improves metabolism.",
    ingredients: [
      "1 tsp cumin seeds",
      "2 cups water",
      "Lemon slice (optional)",
      "Honey to taste",
    ],
    instructions: [
      "Boil water in a small pot.",
      "Add cumin seeds",
      "Simmer for 5 minutes.",
      "Strain and add honey to taste.",
      "Drink warm 1 time a day.",
    ],
  },

  {
    id: 4,
    category: "Skin Care",
    title: "Turmeric & Honey Face Mask",
    rating: 4.9,
    shortDescription:
      " Natural face mask for clear, glowing skin. Reduces acne, lightens scars, and fights signs of aging.",
    ingredients: ["1 tbsp raw honey", "1 tsp turmeric", "1 tsp yogurt"],
    instructions: [
      "Mix all the ingredients given above at the correct level",
      "Apply to face and wash off with warm water after 30 mins",
    ],
  },

  {
    id: 5,
    category: "Pain Relief",
    title: "Ginger & Turmeric Tea",
    rating: 4.6,
    shortDescription:
      "Powerful anti-inflammatory tea that helps reduce joint pain, muscle soreness, and menstrual cramps.",
    ingredients: [
      "1 inch ginger root",
      "1/2 tsp turmeric",
      "1 cup water",
      "Lemon & honey",
    ],
    instructions: [
      "Boil water in a small pot.",
      "Add ginger and turmeric.",
      "Simmer for 5 minutes.",
      "Strain and add honey to taste.",
      "Drink warm 1 time a day.",
    ],
  },

  {
    id: 6,
    category: "Cold & Cough",
    title: "Honey & Ginger Syrup",
    rating: 4.8,
    shortDescription:
      "Natural cough syrup that soothes sore throats, reduces coughing, and clears congestion. Safe for children.",
    ingredients: [
      "2 tbsp raw honey",
      "1 tbsp ginger juice",
      "2 tsp lemon juice",
    ],
    instructions: [
      "Grate some ginger and add it to a pan of boiling water.",
      "Once it boils, squeeze half a lemon",
      "Simmer for 5 minutes.",
      "Strain and add honey to taste.",
      "Drink warm one time a day.",
      "Always drink warm water instead of normal water to get better results",
    ],
  },

  {
    id: 7,
    category: "Pain relief",
    title: "Tamarind pack",
    rating: 5.0,
    shortDescription:
      "When there is inflammation(internally) on legs and hands due to some accident and there is no scratches, can try this remedy.",
    ingredients: [
      "Hand full of tamarind",
      "1 cup water",
      "2 spoons of crystal salt",
    ],
    instructions: [
      "Take all the 3 contents at the given level above",
      "Boil until it bubbles out keep strring while boiling",
      "Simmer for 5 minutes.",
      "Strain some water if it is too watery to stick to the skin.",
      "[ ONLY AT NIGHT AFTER BED ]Apply on the inflammatory area when it is warm itself(otherwise will not work).",
      "Apply until the inflammation shrinks and pain reduces.",
    ],
  },

  {
    id: 8,
    category: "stomach problems",
    title: "Tea ticotion",
    rating: 4.8,
    shortDescription:
      "Diarrhea/Constipation & Food poison. This works really well.",
    ingredients: ["2-3 tsp tea powder", "500 ml water for 2tsp tea powder"],
    instructions: [
      "Boil water in a small pot.",
      "filter the content then squeeze half Lemon",
      "Should not add anything else to this!",
      "Stir well and drink it until the problem stops bit by bit.(Intake while warm)",
    ],
  },

  {
    id: 9,
    category: "stomach problems",
    title: "Ulcer",
    rating: 5,
    shortDescription:
      "Eating fresh alovera in empty stomach. This works really well.",
    ingredients: ["Take 2-3 full sized alovera "],
    instructions: [
      "Cut them into cubes",
      "Wash them for 7 times cleanly in fresh water(Each time take fresh water to clean) ",
      "Now it is in the non-sticky jelly form just eat.",
      "make sure to wash it cleanly until the yellow-green substance which sticks to the hand (It causes infection)",
      "Can add jaggery for taste.",
    ],
  },

  {
    id: 10,
    category: "stomach problems",
    title: "Kidney Stone",
    rating: 4.8,
    shortDescription: "Eating fresh banana stem.",
    ingredients: ["Take 300 grms of fresh banana stem"],
    instructions: [
      "Can drink it as a juice just add some jaggery for little sweetness",
      "Can also drink as banana stem soup - boil some quantity of water, add 1 tsp of corn flour, pepper powder, salt and then small pieces of banana stems",
      "Also grind it as a normal chutney eat with some tiffen",
      "Intake for 2-3 days per week until the stone dissolves. ",
      "It takes some few months to get cured fully. ",
    ],
  },

  {
    id: 11,
    category: "stomach problems",
    title: "Ingested Poison(Eg: Rat poison)",
    rating: 4.8,
    shortDescription:
      "If any person or small kids ingested with poison they should be immediately given this so that, they can be managed and sustained until reaching hospital",
    ingredients: ["Take 100-150 grms of tamarind", "50 gmrs of salt"],
    instructions: [
      "Squeeze the tamarind well and stir well adding adequate water.",
      "Now filter the content and feed to the affected person little by little. ",
    ],
  },

  {
    id: 12,
    category: "stomach problems",
    title: "To remove unsoluble items",
    rating: 4.8,
    shortDescription:
      "Mistakenly if babies swallow coin cell battery or something which is indigestible. ",
    ingredients: ["Bananas", "Water"],
    instructions: [
      "The affected person should be given adequate bananas until the unsoluble thing is out through pooping. ",
      "After eating banana should also give adequate water to make it workout. ",
      "For babies the bananas should be smashed. ",
    ],
  },

  {
    id: 13,
    category: "Women's health",
    title: "Irregular periods",
    rating: 4.8,
    shortDescription: "Eating 1-2 dates daily. ",
    ingredients: ["Dates or Black raisins"],
    instructions: [
      "Just eat 1-2 or 3 dates regularly or 8-10 raisins soaked in water before night or can also visit our recipes to follow different alternatives. ",
    ],
  },

  {
    id: 14,
    category: "Women's health",
    title: "Low haemoglobin causing irregular periods",
    rating: 5,
    shortDescription: "Eating Goat Liver in anyway of cooking you prefer. ",
    ingredients: ["Goat Liver or Goat Blood"],
    instructions: [
      "Cooking differs according to what you prefer. Will provide youtube links for reference. ",
      "Goat Liver Fry - https://youtu.be/05-ONM5az6Y?si=r7d5IaDnuud3W6C1",
    ],
  },
];

export default remediesData;
