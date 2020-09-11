import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "money.png",
      title: "Best Prices",
      description:
        "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      image: "truck.png",
      title: "Fast delivery",
      description:
        "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
    {
      image: "check-circle.png",
      title: "Free Returns",
      description:
        "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    },
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <div className="card sellout-card card-body shadow" key={index}>
          <img
            className="sellout-icon"
            src={require(`../../../assets/icons/${card.image}`)}
            alt="Fila Back"
          />
          <div className="mt-3 text-center">
            <h5 className="sellout-title">{card.title}</h5>
            <p className="text-muted">{card.description}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container sellout-section mb-4">
      {generateSelloutCards()}
    </div>
  );
};

export default SelloutCards;
