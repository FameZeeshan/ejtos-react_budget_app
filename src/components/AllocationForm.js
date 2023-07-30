import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleCostChange = (event) => {
    // Check if the input is a number
    if (isNaN(event.target.value)) {
      alert("Please enter a valid number for the allocation.");
      return;
    }

    // Convert input value to a number
    const inputValue = parseInt(event.target.value);
    setCost(inputValue);
  };

  const submitEvent = () => {
    // Check if the cost is greater than the remaining budget
    if (cost > remaining) {
      alert(
        "The value cannot exceed the remaining funds: " + currency + remaining
      );
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              {" "}
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="HR" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select className="custom-select" id="inputGroupSelect02">
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <span className="input-group-text">{currency}</span>
          </div>
          <input
            required="required"
            type="text"
            id="cost"
            value={cost}
            style={{ marginLeft: "2rem", size: 10 }}
            onChange={handleCostChange}
          />

          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
