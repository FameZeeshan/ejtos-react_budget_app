import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch } = useContext(AppContext);
  const [editedBudget, setEditedBudget] = useState(budget);

  const handleIncreaseBudget = () => {
    const newBudget = editedBudget + 10;
    if (newBudget <= 20000) {
      setEditedBudget(newBudget);
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    } else {
      alert("The budget cannot exceed £20,000.");
    }
  };

  const handleDecreaseBudget = () => {
    const newBudget = editedBudget - 10;
    if (newBudget >= 0) {
      setEditedBudget(newBudget);
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    } else {
      alert("The budget cannot be lower than the spending.");
    }
  };

  const handleBudgetChange = (event) => {
    const newBudget = event.target.value;
    setEditedBudget(newBudget);
  };

  const handleBlur = () => {
    // Convert the edited budget to a number and update the state
    const parsedBudget = parseFloat(editedBudget);
    if (!isNaN(parsedBudget) && parsedBudget >= 0 && parsedBudget <= 20000) {
      dispatch({
        type: "SET_BUDGET",
        payload: parsedBudget,
      });
    } else {
      // If the input is not a valid number or exceeds the limit, reset to the original budget
      setEditedBudget(budget);
    }
  };

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency,
    });
  };

  return (
    <div className="alert alert-secondary">
      <button onClick={handleDecreaseBudget}>-</button>
      <input
        type="text"
        value={editedBudget}
        onChange={handleBudgetChange}
        onBlur={handleBlur}
      />
      <span>
        Budget: {currency} {budget}
      </span>
      <button onClick={handleIncreaseBudget}>+</button>
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Budget;
