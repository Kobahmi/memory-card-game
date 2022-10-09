import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import images from "./components/CardDisplay";
import Header from "./components/Header";
import Loading from "./components/Loading";

const App = () => {
  const [totalCards, setTotalCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [loading, setLoading] = useState(false);

  const randomArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      const pokemon = images;
      let data = [];

      pokemon.forEach((element) => {
        data.push({
          name: element.name,
          image: element.src,
          id: element.id,
        });
      });
      setTotalCards([...data]);
      setLoading(false);
    };
    getData();
  }, []);

  const handleClick = (id) => {
    setTotalCards(randomArray(totalCards));
    if (cards.find((element) => element === id)) {
      if (score > highscore) setHighscore(score);
      setScore(0);
      setCards([]);
      return;
    } else {
      setCards([...cards, id]);
      setScore(score + 1);
    }
  };

  return (
    <div className="content">
      {loading && <Loading />}
      <Header score={score} highscore={highscore} />
      <Board handleClick={handleClick} totalCards={totalCards} />
    </div>
  );
};

export default App;
