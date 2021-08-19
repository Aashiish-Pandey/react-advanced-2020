import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { name, id } = person;

        return (
          <div key={id} className="item">
            {console.log(id)}
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        clearItems
      </button>
    </>
  );
};

export default UseStateArray;
