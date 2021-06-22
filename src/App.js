// React Packages
import React, { useState } from "react";
import './App.css';
//Predefined UI Components
import ToDoLists from "./ToDoLists";

export default function App() {
  //useState Declarations
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  //OnChange Function for input field
  const handleInputChangeItem = (event) => {
    setItem(event.target.value);
  };
  //OnClick Function for Button
  const listOfItem = () => {
    setData((oldData) => {
      return [...oldData, item];

    });
    setItem("");
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add an iteam here"
          value={item}
          onChange={handleInputChangeItem}>
        </input>
        <button onClick={listOfItem}> + </button>

        <ol>
          {/* <li> {item} </li> */}
          {data.map((dataValue) => {
            return <ToDoLists text={dataValue} />
          })}
        </ol>
      </div>

    </div>
  );
}

