type Game = {
  id: string;
  title: string;
  thumbnail: string;
};

type lastGames = {
  games: Game[];
};

export function GridGames({ games }: lastGames) {
  return (
    <div>
      <h1 className="text-4xl text-white font-light">
        O <strong className="text-yellow-font font-bold">JOGO DO ANO</strong>
      </h1>
      <div className="grid grid-cols-4 gap-5 mt-7">
        {games.map(game => (
          <img
            key={game.id}
            src={game.thumbnail}
            alt={game.title}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
