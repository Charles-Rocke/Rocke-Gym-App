import { legData } from "../data/legData.js";
import { pullData } from "../data/pullData.js";
import { pushData } from "../data/pushData.js";

const strength = {
  chest: {
    upper: [
      {
        name: "Incline Bench",
        currentWeight: 225,
        previousWeight: "",
        newWeight: "",
        tag: "upper chest",
      },
      {
        name: "Incline Dumbbell Press",
        currentWeight: 90,
        previousWeight: "",
        newWeight: "",
        tag: "upper chest",
      },
      {
        name: "Incline Chest Press (blue)",
        currentWeight: 140,
        previousWeight: "",
        newWeight: "",
        tag: "upper chest",
      },
      {
        name: "Hammer Upper Chest Press",
        currentWeight: 2 * 45 + 1 * 25,
        previousWeight: "",
        newWeight: "",
        tag: "upper chest",
      },
      {
        name: "Cable flies (upper)",
        currentWeight: 50,
        previousWeight: "",
        newWeight: "",
        tag: "upper chest",
      },
    ],
    mid: [
      {
        name: "Flat Bench",
        currentWeight: 265,
        previousWeight: "",
        newWeight: "",
        tag: "mid chest",
      },
      {
        name: "Flat Dumbbell Press",
        currentWeight: 95,
        previousWeight: "",
        newWeight: "",
        tag: "mid chest",
      },
      {
        name: "Hammer Mid Chest Press",
        currentWeight: 3 * 45,
        previousWeight: "",
        newWeight: "",
        tag: "mid chest",
      },
      {
        name: "Hammer Chest Press (red)",
        currentWeight: 235,
        previousWeight: "",
        newWeight: "",
        tag: "mid chest",
      },
      {
        name: "Chest Fly Machine",
        currentWeight: 205,
        previousWeight: "",
        newWeight: "",
        tag: "mid chest",
      },
      {
        name: "Cable Flies (middle)",
        currentWeight: 50,
        previousWeight: "",
        newWeight: "",
        tag: "mid chest",
      },
      {
        name: "Close Grip Dumbbell Press",
        currentWeight: "",
        previousWeight: "",
        newWeight: "",
        tag: "mid chest",
      }, // Empty string for weight missing
    ],
    lower: [
      {
        name: "Decline Bench",
        currentWeight: 225,
        previousWeight: "",
        newWeight: "",
        tag: "lower chest",
      },
      {
        name: "Decline Dumbbell Bench",
        currentWeight: 80,
        previousWeight: "",
        newWeight: "",
        tag: "lower chest",
      },
      {
        name: "Flat Underhand grip Dumbbell Press (lower chest)",
        currentWeight: 85,
        previousWeight: "",
        newWeight: "",
        tag: "lower chest",
      },
      {
        name: "Cable Flies (lower chest)",
        currentWeight: "",
        previousWeight: "",
        newWeight: "",
        tag: "lower chest",
      },
      {
        name: "Hammer Lower Chest Press",
        currentWeight: 160,
        previousWeight: "",
        newWeight: "",
        tag: "lower chest",
      },
      {
        name: "Chest Dips (weighted)",
        currentWeight: 4 * 45,
        previousWeight: "",
        newWeight: "",
        tag: "lower chest",
      },
    ],
  },
  triceps: {
    lateral: [
      {
        name: "Tricep Pushdown (bar)",
        currentWeight: 180,
        previousWeight: "",
        newWeight: "",
        tag: "lateral tricep head",
      },
      {
        name: "Rope Pull Downs",
        currentWeight: 60,
        previousWeight: "",
        newWeight: "",
        tag: "lateral tricep head",
      },
    ],
    long: [
      {
        name: "Tricep Rope Pulldowns",
        currentWeight: 60,
        previousWeight: "",
        newWeight: "",
        tag: "long tricep head",
      },
      {
        name: "Skull-Crushers EZ Bar",
        currentWeight: 100,
        previousWeight: "",
        newWeight: "",
        tag: "long tricep head",
      },
      {
        name: "Sitting Overhead Tricep",
        currentWeight: 85,
        previousWeight: "",
        newWeight: "",
        tag: "long tricep head",
      },
      {
        name: "Sitting Tricep Extensions",
        currentWeight: 170,
        previousWeight: "",
        newWeight: "",
        tag: "long tricep head",
      },
    ],
  },
  shoulders: {
    anterior: [
      {
        name: "Overhead Barbell Press",
        currentWeight: 170,
        previousWeight: "",
        newWeight: "",
        tag: "front delt",
      },
      {
        name: "Arnold Dumbbell Press",
        currentWeight: 85,
        previousWeight: "",
        newWeight: "",
        tag: "front delt",
      },
      {
        name: "Sitting Overhead Press Machine",
        currentWeight: 155,
        previousWeight: "",
        newWeight: "",
        tag: "front delt",
      },
    ],
    lateral: [
      {
        name: "Cable Lateral Raises",
        currentWeight: 40,
        previousWeight: "",
        newWeight: "",
        tag: "side delt",
      },
      {
        name: "Godfathers Dumbbell Lateral Raises",
        currentWeight: 65,
        previousWeight: "",
        newWeight: "",
        tag: "side delt",
      },
      {
        name: "Seated Dumbbell Lateral Raises",
        currentWeight: 40,
        previousWeight: "",
        newWeight: "",
        tag: "side delt",
      },
      {
        name: "Sitting Machine Lateral Raise",
        currentWeight: 185,
        previousWeight: "",
        newWeight: "",
        tag: "side delt",
      },
      {
        name: "Upright rows",
        currentWeight: 170,
        previousWeight: "",
        newWeight: "",
        tag: "side delt",
      },
    ],
  },
};

function getRandomItem(arr, exclude = []) {
  const filteredArr = arr.filter((item) => !exclude.includes(item.name));
  if (filteredArr.length === 0) return null;
  return filteredArr[Math.floor(Math.random() * filteredArr.length)];
}

function selectTwoUniqueExercises(exercises, exclude = []) {
  let firstExercise = getRandomItem(exercises, exclude);
  if (!firstExercise) return []; // If no valid exercise is found, return empty array

  let secondExercise = getRandomItem(exercises, [
    ...exclude,
    firstExercise.name,
  ]);
  if (!secondExercise) return [firstExercise]; // Return one if a second unique can't be found

  return [firstExercise, secondExercise];
}

export function selectWorkouts(data, specifiedSubcategory) {
  if (data === "push") data = pushData.strength;
  if (data === "pull") data = pullData.strength;
  if (data === "legs") data = legData.strength;
  const selectedExercises = [];
  let alreadySelectedNames = []; // Track already selected exercise names

  const [category, subcategory] = specifiedSubcategory.split(".");

  // Ensure two unique exercises from the specified subcategory
  if (data[category] && data[category][subcategory]) {
    const exercisesFromSpecificSubcategory = data[category][subcategory];
    const twoExercises = selectTwoUniqueExercises(
      exercisesFromSpecificSubcategory,
      alreadySelectedNames
    );
    selectedExercises.push(...twoExercises);
    alreadySelectedNames.push(...twoExercises.map((ex) => ex.name));
  }

  // Select one unique exercise from each other subcategory in the same category
  Object.keys(data[category]).forEach((otherSubcategory) => {
    if (otherSubcategory !== subcategory) {
      const exercises = data[category][otherSubcategory];
      const selectedExercise = getRandomItem(exercises, alreadySelectedNames);
      if (selectedExercise) {
        selectedExercises.push(selectedExercise);
        alreadySelectedNames.push(selectedExercise.name);
      }
    }
  });

  // Select one unique exercise from each subcategory in other categories
  Object.keys(data).forEach((otherCategory) => {
    if (otherCategory !== category) {
      Object.keys(data[otherCategory]).forEach((sub) => {
        const exercises = data[otherCategory][sub];
        const selectedExercise = getRandomItem(exercises, alreadySelectedNames);
        if (selectedExercise) {
          selectedExercises.push(selectedExercise);
          alreadySelectedNames.push(selectedExercise.name);
        }
      });
    }
  });

  return selectedExercises;
}

const specifiedSubcategory = "quads.quads";
const exercises = selectWorkouts("legs", specifiedSubcategory);
// console.log(exercises);
