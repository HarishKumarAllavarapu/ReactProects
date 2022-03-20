import React from "react";
import './SearchBox.styles.css';

export const SeachBox = ({searchHandler}) => {
  return (
    <div>
      <input
        type="search"
        name="monsterName"
        id="monsterName"
        className="monsterContainerInput"
        placeholder="Monster Name"
        onChange={searchHandler}
      />
    </div>
  );
};
