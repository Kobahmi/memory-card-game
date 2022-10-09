import React from "react";

const Card = (props) => {
  const { card, handleClick } = props;
  return (
    <div className="card" onClick={() => handleClick(card.id)}>
      <img src={card.image} id={card.id} alt="character" />
      <h3>{card.name}</h3>
    </div>
  );
};

export default Card;
