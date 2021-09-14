import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSumary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSumary></MealsSumary>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
};

export default Meals;
