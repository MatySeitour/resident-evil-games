import getGames from "../../utils/games.json";

export default function Nav() {
  const games = getGames.games;

  return (
    <header className="w-full h-auto fixed z-[1000]">
      <nav className="w-full h-auto">
        <ul className="w-full h-auto flex flex-row justify-between pl-1">
          {games.map((game) => (
            <li key={game.id} className="p-2">
              {game.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
