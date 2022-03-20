import React, { useEffect, useState } from "react";
import "./MonsterHome.styles.css";

import { CardList } from "./cardList/CardList.component";
import { SeachBox } from "./searchBox/SeachBox.component";

export const MonstersHome = () => {
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchKeyword, setSearchKeyword] = useState(" ");

  const onSearchHandler = (event) => {
    const searchHandlerString = event.target.value.toLocaleLowerCase();

    setSearchKeyword(searchHandlerString);
  };
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => setMonster(monsters));
  }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters?.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(searchKeyword.toLocaleLowerCase());
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchKeyword]);


  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      <SeachBox searchHandler={onSearchHandler} />
      <CardList monster={filteredMonsters} />
    </div>
  );
};
