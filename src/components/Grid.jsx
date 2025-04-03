import React from "react";
import { Link } from "react-router-dom";

function Grid({ value }) {
  return (
    <>
      {value.map((item) => (
        <div className="grid" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <Link to={`/learning/${item.id}`}>Изучить</Link>
        </div>
      ))}
    </>
  );
}

export default Grid;
