type Game = {
  id: string;
  title: string;
  thumbnail: string;
};

type lastGames = {
  games: Game[];
};

export function BigGridGames({ games }: lastGames) {
  return (
    <div>
      <h1 className="text-4xl text-white font-light">
        JOGOS <strong className="text-yellow-font font-bold">RECENTES</strong>
      </h1>
      <div className="grid grid-cols-5 gap-5 mt-7">
        {games.map(game => (
          <img
            key={game.id}
            src={game.thumbnail}
            alt={game.title}
            className="rounded-lg w-[15rem] h-[22.5rem]"
          />
        ))}
      </div>
    </div>
  );
}
