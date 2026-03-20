"use client";
import { useState, useEffect } from "react";

// 1. Original Fetch: Gets the list of meals based on an ingredient
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    throw new Error(error.message);
  }
}

// 2. NEW Fetch (Challenge 2): Gets full details for a specific meal using its ID
async function fetchMealDetails(idMeal) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
    );
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
    return data.meals[0]; // Returns the single meal object containing ingredients
  } catch (error) {
    throw new Error(error.message);
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // New State variables for Challenge 2
  const [expandedMealId, setExpandedMealId] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // Load the initial list of meals
  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }
    setLoading(true);
    setError(null);
    setExpandedMealId(null); // Resets any open meal cards when a new ingredient is clicked

    try {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Handle clicking a specific meal card
  async function handleMealClick(idMeal) {
    // If clicking the currently open card, close it
    if (expandedMealId === idMeal) {
      setExpandedMealId(null);
      return;
    }

    setExpandedMealId(idMeal);
    setLoadingDetails(true);
    setIngredients([]); // Clear previous ingredients while loading

    try {
      const mealDetails = await fetchMealDetails(idMeal);

      // The API returns strIngredient1 to strIngredient20. We need to extract them.
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];

        // Only push to array if the ingredient exists and isn't just an empty space
        if (ingredient && ingredient.trim() !== "") {
          ingredientsList.push(`${measure} ${ingredient}`.trim());
        }
      }
      setIngredients(ingredientsList);
    } catch (err) {
      console.error("Failed to fetch ingredients:", err);
    } finally {
      setLoadingDetails(false);
    }
  }

  if (loading)
    return (
      <div className="text-orange-400 p-4 font-bold">Loading meal ideas...</div>
    );
  if (error)
    return <div className="text-red-500 p-4 font-bold">Error: {error}</div>;

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold text-white mb-4">
        Meal Ideas for &quot;{ingredient || "Select an item"}&quot;
      </h2>

      {!ingredient ? (
        <p className="text-slate-400">
          Click on an ingredient in your list to see meal options.
        </p>
      ) : meals.length === 0 ? (
        <p className="text-slate-400">
          No meals found for this ingredient. Try another one!
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              onClick={() => handleMealClick(meal.idMeal)}
              className="bg-slate-800 rounded-md overflow-hidden shadow-sm hover:shadow-orange-500 hover:-translate-y-1 transition-all cursor-pointer border border-slate-700"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-white font-semibold text-sm p-3 truncate">
                {meal.strMeal}
              </h3>

              {/* Conditional Rendering for Challenge 2: Show ingredients if this card is expanded */}
              {expandedMealId === meal.idMeal && (
                <div className="p-4 bg-slate-950 border-t border-slate-700">
                  <h4 className="text-xs font-bold text-orange-400 mb-2 uppercase tracking-wider">
                    Ingredients
                  </h4>
                  {loadingDetails ? (
                    <p className="text-xs text-slate-400">Loading recipe...</p>
                  ) : (
                    <ul className="list-disc pl-4 text-sm text-slate-300 space-y-1">
                      {ingredients.map((ing, index) => (
                        <li key={index}>{ing}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
