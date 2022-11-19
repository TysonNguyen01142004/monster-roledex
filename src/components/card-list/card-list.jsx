import "./card-list.style.css";
import Card from "./card/card";
import React from "react";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);
export default CardList;
