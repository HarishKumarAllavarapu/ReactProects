import React from "react";
import "./CardList.styles.css";

export const CardList = ({ monster }) => {
  return (
    <div className="card-list">
      {monster?.map((monster) => {
        const { name, email, id } = monster;
        return (
          <div key={id} className="card-container">
            <img
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              alt={`monster ${name}`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};
