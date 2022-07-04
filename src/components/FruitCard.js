import React from "react";

export default function FruitCard(props) {
  return (
    <div>
      <h1>{props.name} </h1>
      <img src={props.image} alt={props.name} width="150" />
      <p>{props.description} </p>
    </div>
  );
}
