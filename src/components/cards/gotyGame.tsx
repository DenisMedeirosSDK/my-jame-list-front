type Props = {
  title: string;
  thumbnail: string;
};

export function GOTYGame({ title, thumbnail }: Props) {
  return (
    <div>
      <h1 className="text-4xl text-white font-light">
        O <strong className="text-yellow-font font-bold">JOGO DO ANO</strong>
      </h1>
      <figure className="mt-7">
        <img src={thumbnail} alt={title} className="rounded-lg" />
      </figure>
    </div>
  );
}
