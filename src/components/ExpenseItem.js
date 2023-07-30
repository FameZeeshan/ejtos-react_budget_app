import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const handleIncreaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const handleDecreaseAllocation = () => {
    const expense = {
      name: props.name,
      cost: -10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td>
        <button onClick={handleIncreaseAllocation}>+</button>
        <button onClick={handleDecreaseAllocation}>-</button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
