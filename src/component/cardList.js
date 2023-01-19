import React from "react";
import CardItem from "./card";

const CardList = (props) => {
  return (
    <div>
      {props.user.map((user, index) => (
        <CardItem user={user} key={index} />
      ))}
    </div>
  );
};

export default CardList;
