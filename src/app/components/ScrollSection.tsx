import getGames from "../../utils/games.json";
import SectionGame from "./SectionGame";

const ScrollSection = () => {
  /* get games */
  const games = getGames.games;

  return (
    <>
      {games.map((game) => (
        <SectionGame
          key={game.id}
          id={game.id}
          title={game.title}
          description={game.description}
          characters={game.characters}
          epilogue={game.epilogue}
          image_prologue={game.image_prologue}
        />
      ))}
    </>
  );
};

export default ScrollSection;
