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
      "NOTE: While drinking water always prefer warm water instead of normal water to get better results",
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
      "Person who catches cold easily can avoid lemon but may be less effective and works slow",
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
      "NOTE: Drink 2-3 litres of water daily to work from inside the body. ",
    ],
  },

  {
    id: 5,
    category: "Pain Relief & Women's health",
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
      "NOTE: Person who catches cold easily can avoid lemon",
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
      "2 tsp cumin seeds",
      "Lemon", 
    ],
    instructions: [
      "Grate some ginger and add it to a pan of boiling water.",
      "Once it boils, squeeze half a lemon",
      "Simmer for 5 minutes.",
      "Strain and add honey to taste.",
      "Drink warm one time a day.",
      "NOTE: Always drink warm water instead of normal water to get better results",
    ],
  },

  {
    id: 7,
    category: "Pain relief",
    title: "Tamarind pack",
    rating: 5.0,
    shortDescription:
      "When there is inflammation on legs and hands due to some accident..",
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
      "NOTE: Apply this pack only at night after lying in bed and when there is only inflammation and there is no scratches which gives irritation when applied, can try this remedy",
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
      "NOTE: Anyone can take this except infants",
    ],
  },

  {
    id: 9,
    category: "stomach problems",
    title: "Ulcer",
    rating: 5,
    shortDescription:
      "Eating fresh alovera in empty stomach. This works really well(100%).",
    ingredients: ["2-3 full sized alovera "],
    instructions: [
      "Cut them into cubes after peeling the corner thorns and the skin.",
      "Wash them for 7 times cleanly in fresh water(Each time take fresh water to clean) ",
      "Now it is in the non-sticky jelly form just eat else can also drink it as juice form.",
      "make sure to wash it cleanly until the yellow-green substance which sticks to the hand (It causes infection)",
      "Can add palm jaggery for taste.",
    ],
  },

  {
    id: 10,
    category: "stomach problems",
    title: "Kidney Stone",
    rating: 4.8,
    shortDescription: "Eating fresh banana stem can really help reducing the kidney stone.",
    ingredients: ["300 grms of fresh banana stem"],
    instructions: [
      "Can drink it as a juice just add some palm jaggery for little sweetness",
      "Can also drink as banana stem soup - boil some quantity of water, add 1 tsp of corn flour, pepper powder, salt and then small pieces of banana stems",
      "Also grind it as a normal chutney eat with some tiffen",
      "Intake for 2-3 days per week until the stone dissolves. ",
      "It takes some few months or more than a year to get cured fully. ",
    ],
  },

  {
    id: 11,
    category: "stomach problems",
    title: "Ingested Poison(Eg: Rat poison)",
    rating: 2,
    shortDescription:
      "If anyone is ingested with poison can try this immediately to sustain.",
    ingredients: ["Take 100-150 grms of tamarind", "50 gmrs of salt"],
    instructions: [
      "Squeeze the tamarind well and mix the salt, stir well adding adequate water.",
      "Now filter the content and feed to the affected person little by little.",
      "If any person or small kids ingested with poison they should be immediately given this so that, they can be managed and sustained until reaching hospital",
      "NOTE: It may not work all the times and also it should be given immediately for good results",
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
      "NOTE: This does not work always so rush to the hospital immediately.",
    ],
  },

  {
    id: 13,
    category: "Women's health",
    title: "Irregular periods",
    rating: 4.8,
    shortDescription: "Eating 1-2 dates daily helps really well to cure all your period problems . ",
    ingredients: ["Dates or Black raisins"],
    instructions: [
      "Just eat 1-2 or 3 dates regularly or 8-10 raisins can also visit our recipes to follow different alternatives through videos. ",
      "NOTE: Raisins should be soaked in water before night",
    ],
  },

  {
    id: 14,
    category: "Women's health",
    title: "Low haemoglobin (Irregular periods)",
    rating: 5,
    shortDescription: "Eating Goat Liver in anyway of cooking you prefer will naturally increase your haemoglobin. ",
    ingredients: ["Goat Liver or Goat Blood"],
    instructions: [
      "Cooking differs according to what you prefer. Will provide youtube links for reference. ",
      "Goat Liver Fry - https://youtu.be/05-ONM5az6Y?si=r7d5IaDnuud3W6C1",
    ],
  },

  {
    id: 15,
    category: "Hair care",
    title: "Dandruff",
    rating: 5,
    shortDescription: "Try which suits your hair and body conditions among all the remedies.",
    ingredients: ["Fenugreek, cloves"],
    instructions: [
      "Take 2 spoons of fenugreek",
      "And 4-5 cloves",
      "Add both in a vessel with water in it boil well until the water colour changes and nicely observed.",
      "Filter the water store it in a container after cooled",
      "Apply to your scalp using a cotton, massage well can also leave over night and then wash off with a mild shampoo if your body conditions support ",
      "Else after massaging wash with mild shampoo within 1-2 hours",
      "Try this until your dandruff cures it works really well",
      "Add adequate water where you can store it in fridge for 1-2 weeks",
      "There are many cause which gives dandruff. A particular solution does not work for every type of hair or person. Some may get cured using few methods but some may not. So refer to every remedy and try which suits your hair and body conditions.",
    ],
  },
  {
    id: 16,
    category: "Skin Care",
    title: "Detoxify and Relieve body soreness and skin patches",
    rating: 4.5,
    shortDescription:
      "Skin patches, Inflammation, Body care, Natural skin treatment, Anti-inflammatory herbs, heal wounds, உடலில் புண்கள், healing wounds, Skin Diseases",
    ingredients: ["Chrysopogon zizanioides (Vetiver), Neem leaves"],
    instructions: [
      "Take some amount of Chrysopogon zizanioides (Vetiver) and some neem leaves",
      "Boil them in water until the water colour changes and nicely observed.",
      "Filter the water and add it to your bathing water.",
      "Follow this twice a week to detoxify your body and relieve body soreness and skin patches and continue to maintain your skin.",
      "NOTE:  Do a patch test first. Consult a professional for medical concerns. Results may vary. ",
    ],
  },

  {
    id: 17,
    category: "Skin Care",
    title: "Natural Skin Moisturizer",
    rating: 4.6,
    shortDescription:
      "A simple and effective natural moisturizer for dry skin. Keeps skin hydrated and nourished.",
    ingredients: ["Coconut oil", "Almond oil", "Shea butter"],
    instructions: [
      "Mix equal parts of coconut oil, almond oil, and shea butter.",
      "Melt the mixture in a double boiler until fully combined.",
      "Let it cool and store in a jar.",
      "Apply to dry areas as needed.",
      "NOTE: Always do a patch test before applying any new product to your skin.",
    ],
  },

  {
    id: 18,
    category: "Teeth Care",
    title: "Tooth pain relief",
    rating: 4.0,
    shortDescription:
      " To cure mild tooth pain and swollen gums.",
    ingredients: ["1/2 Lemon", "1 tsp rock salt", "5-10 cloves"],
    instructions: [
      "Grind the rock salt and cloves together.",
      "Add one cup of water and bring to a boil for 10-15 mins then filter.",
      "Squeeze half a lemon into the water.",
      "Use this solution(warm) to gargle 2-3 times a day.",
      "Repeat 2-3 times a day until the pain subsides.",
      "NOTE: This is a temporary solution. If the pain persists(severe), consult a dentist.",],
  },

  {
    id: 19,
    category: "Stomach problems",
    title: "Detox kidney",
    rating: 4.0,
    shortDescription:
      " Detoxing kidney from alcohol damage by rejuvenating & cleansing.",
    ingredients: ["Barley, Pink salt"],
    instructions: [
      "Soak required amount of barley in hot water overnight.",
      "Next day, boil the soaked barley in fresh water for 10-15 minutes.",
      "Add a adequte amount of pink salt to the barley water.",
      "Drink this warm barley water on an empty stomach in the morning.",
      "Follow this for daily 1 month to get results"
    ],
  },

  {
    id: 20,
    category: "Stomach problems",
    title: "Sour belching and bloating",
    rating: 4.5,
    shortDescription:
      "Ayurvedic digestive hack is quick to prepare, 100% natural, and incredibly effective for improving gut health and digestion..",
    ingredients: ["Dried Ginger (Sonth)", "Cumin seeds", "Palm Jaggery"],
    instructions: [
      "Take 1 tsp of dried ginger powder (sonth), 1 tsp of cumin seeds and adequate amount of palm jaggery.",
      "Grind them together to make a fine powder.",
      "Add this powder to a glass of warm water and stir well.",
      "Drink this mixture when there is sour belching.",
    ],
  },

  {
    id: 21,
    category: "Skin Care",
    title: "Flawless Skin",
    rating: 4.9,
    shortDescription:
      " Clear Pimples & Glow Naturally",
    ingredients: ["Neem Sprouts", "Wild turmeric", "Milk"],
    instructions: [
      "Take a handful of fresh neem sprouts and grind them to a fine paste.",
      "Mix the neem paste with 1 tsp of wild turmeric and enough milk to make a smooth paste.",
      "Apply this paste to your face and leave it on for 20-30 minutes.",
      "Rinse off with lukewarm water.",
      "Repeat this remedy 2-3 times a week for best results.",
      "NOTE: Always do a patch test before applying any new product to your skin.",],
  },

  {
    id: 22,
    category: "Women's health",
    title: "Hormonal imbalance, Irregular periods",
    rating: 4.0,
    shortDescription:
      " Relieve Abnormal Periods & Body Heat Naturally. Struggling with irregular periods and excess body heat?",
    ingredients: ["Raw honey", "1 Onion"],
    instructions: [
      "Take 1 small onion and chop it vertically.",
      "Dip 3-4 pieces of the chopped onion in raw honey and eat after the breakfast.",
      "Repeat this one time a day with one day gap to see improvements in your menstrual cycle and body heat.",
      "NOTE: This remedy is natural and may take time to show results. Consult a healthcare"
    ],
  },

  {
    id: 23,
    category: "Other's",
    title: "Sugar control, weight loss and digestion",
    rating: 3.0,
    shortDescription:
      " These natural superfoods are rich in nutrients, aid digestion, boost immunity, and add a delicious flavor to your smoothies, baked goods, and more.",
    ingredients: ["Jackfruit powder", "Banana powder"],
    instructions: [
      "Mix equal parts of jackfruit powder and banana powder into warm milk.",
      "Drink this mixture weekly once to help control sugar levels, aid digestion, and support weight loss.",
    ],
  },

  {
    id: 24,
    category: "Skin Care",
    title: "Natural Underarm Whitening & Freshness",
    rating: 4.5,
    shortDescription:
      " Say goodbye to dark underarms and bad odor naturally!",
    ingredients: ["2 tbsp corn flour", "1/2 half lemon", "Milk"],
    instructions: [
      "Mix 2 tbsp of corn flour with the juice of half a lemon and enough milk to make a paste.",
      "Apply this paste to your underarms and leave it on for 20-30 minutes.",
      "Rinse off with lukewarm water.",
      "Repeat this remedy 2-3 times a week for best results.",
      "NOTE: Always do a patch test before applying any new product to your skin.",
    ],
  },

  {
    id: 25,
    category: "Stomach problems",
    title: "Upset Stomach & Body Heat",
    rating: 4.0,
    shortDescription:
      " Soothe your upset stomach and naturally balance body heat with this simple yet powerful home remedy!",
    ingredients: ["1 betel leaf", "raw honey", "5-6 black raisins", "1/2 Fennel seeds", "Palm jaggery", "Ice cubes"],
    instructions: [
      "Mash all the ingredients together to form a paste.",
      "Mix the paste into half glass of water and add honey, ice cubes.",
      "Drink when the stomach feels upset or when there is excess body heat.",
      "Drink 2-3 liters of water daily to stay hydrated and help flush out toxins.",
    ],
  },

  {
    id: 26,
    category: "Other's",
    title: "Good habits to follow",
    rating: 5.0,
    shortDescription:
      " (Green salt)To overcome iron deficiency.",
    ingredients: ["Moringa leaves, rock salt"],
    instructions: [
      "Dry the moringa leaves in sun until it is crispy.",
      "Now grind the dried moringa leaves with rock salt to make a powder.",
      "Can use this salt daily for cooking.",
      "This is a good source of iron and can help overcome iron deficiency.",],
  },

  {
    id: 27,
    category: "Hair care",
    title: "Dandruff",
    rating: 5,
    shortDescription: "Try which suits your hair and body conditions among all the remedies.",
    ingredients: ["Fenugreek, cloves"],
    instructions: [
      "Take 2 spoons of fenugreek",
      "And 4-5 cloves",
      "Add both in a vessel with coconut oil in it boil well until the water colour changes and thoroughly observed.",
      "Store it in a container after cooled",
      "Apply to your scalp using a cotton, massage well can also leave over night and then wash off with a mild shampoo if your body conditions support ",
      "Else after massaging wash with mild shampoo within 1-2 hours",
      "Maintain this to control your dandruff, it works really well",
      "There are many cause which gives dandruff. A particular solution does not work for every type of hair or person. Some may get cured using few methods but some may not. So refer to every remedy and try which suits your hair and body conditions.",
    ],
  },


  {
    id: 28,
    category: "Women's health",
    title: "PCOD(Polycystic Ovary Syndrome)",
    rating: 4.5,
    shortDescription:
      " Struggling with PCOD, irregular periods, or infertility? This powerful natural remedy clear womb toxins, balance hormones, and boost fertility.",
    ingredients: ["1/2 tsp palm jaggery, 2 garlic cloves, 5-10 fenugreek seeds, 1 pinch Asafoetida (Hing)"],
    instructions: [
      "Crush all the ingredients in the given level to make a small ball.",
      "Swallow the ball after breakfast drink water if it is difficult to swallow.",
      "Can use this salt daily for cooking.",
      "Note: Repeat this remedy with 1 day gap for 40 days to see improvements in your menstrual cycle and overall health.",
      "Consult your physician before use if you are pregnant, nursing, taking medication, or have a medical condition. Do not exceed the recommended dosage",
    ],
  },

  {
    id: 29,
    category: "Other's",
    title: "Good habits to follow",
    rating: 5.0,
    shortDescription:
      "Reducing body heat naturally duirng summer.",
    ingredients: ["fenugreek seeds, water"],
    instructions: [
      "Soak 1-2 tsp of fenugreek seeds in water overnight. Can also boil the seeds in water for 5-10 minutes and consume freshly. Else just add to your daily drinking bottle so that you avoid skipping and also save time",
      "Drink that water in the empty stomach next day morning.",
      "This helps to reduce body heat naturally during summer also controls blood sugar.",
      "This is better to avoid during winter or rainy seasons.",
    ],
  },

  {
    id: 30,
    category: "Skin Care",
    title: "To remove dark spots",
    rating: 4.0,
    shortDescription:
      "Remove Darkness from Elbows, Knees & Mouth Naturally.",
    ingredients: ["Ghee, wild turmeric, rose water"],
    instructions: [
      "Take required amount of ghee in a bowl",
      "Dissolve the wild turmeric with the ghee in a rotating motion and when it is mixed well together at the stage add rose water.",
      "Follow twice a week to get good results",
      "Note: Take a patch test before using.",
    ],
  },

  {
    id: 31 ,
    category: "Skin care",
    title: "Remove dark circles",
    rating: 3.0,
    shortDescription:
      "Brighten up your under-eyes and puffy eyes naturally.",
    ingredients: ["Ice cubes, Coffee powder, coconut oil or Milk, Honey"],
    instructions: [
      "First massage under the eyes with ice cubes gently for 5-10 mins.",
      "Then mix all the other contents honey, coffee powder and coconut oil in required amount to make a paste.",
      "Apply this paste under the eyes gently then wash off with cold water after 20-30 mins.",
      "Repeat this remedy 2-3 times a week for best results.",
    ],
  },

  {
    id: 32 ,
    category: "Skin care",
    title: "Remove dark neck",
    rating: 4.0,
    shortDescription:
      "Say goodbye to dark neck patches with this 100% natural remedy!",
    ingredients: ["Flax seeds, fresh alovera, Rice boiled water, Honey"],
    instructions: [
      "First boil the flax seeds in little amount of water to get a gel like liquid.And then filter the water.",
      "Take some fresh flesh of alovera and required amount of boiled rice water and honey mix all the contents well.",
      "Apply this paste on the neck gently and massage and wash off after 10-20mins?.",
      "Repeat this remedy 2-3 times a week for best results.",
    ],
  },

  {
    id: 33 ,
    category: "Other's",
    title: "Low breast milk supply and irregular periods",
    rating: 4.0,
    shortDescription:
      "Remedy to help induce timely periods and support healthy lactation in nursing mothers.",
    ingredients: ["Cotton seeds, Dry Ginger, Black Pepper, Rice, Jaggery, Ashwagandha, Long Pepper(Thippili), Elachi(2-3)"],
    instructions: [
      "Take required amount of all the ingredients and grind them together to make a fine powder.",
      "Then mix 2-spoons this powder well in hot milk and serve it warm.",
      "Drink this milk daily night after food and before bed.",
      "Link for the product(Paruthi Pal instant mix) - https://www.instagram.com/urbansprouts.in/"
    ],
  },

  {
    id: 34 ,
    category: "Other's",
    title: "Lower Blood Pressure Naturally",
    rating: 4.0,
    shortDescription:
      "Natural ways to lower blood pressure, Ayurvedic remedy for BP, Improve blood circulation naturally.",
    ingredients: ["(Jhansi) Sarpagandha, Jatamansi, Garlic, Pterocarpus marsupium bark, And many more like this"],
    instructions: [
      "It is better to buy this from the mentioned link rather than making it at home as it is a complex process.",
      "Link -  https://www.amazon.in/Kapiva-Ayurveda-BP-Sure-Juice/dp/B07DRF6JFN ",
      "Consult a healthcare professional before using any herbal remedies, especially if you have a medical condition or take medication."
    ],
  },

  {
    id: 35,
    category: "Skin care",
    title: "Remove Dark & Patchy Lips Naturally",
    rating: 4.0,
    shortDescription:
      "Get soft, pink, and glassy rose lips at home.",
    ingredients: ["Coconut Oil , Sugar, Turmeric, Honey"],
    instructions: [
      "Mix all the above ingredients in the required amount and apply to your lips.",
      "Then wash off with warm water after 10-15 mins.",
      "Repeat this remedy 2-3 times a week for best results.",
    ],
  },

];

export default remediesData;
