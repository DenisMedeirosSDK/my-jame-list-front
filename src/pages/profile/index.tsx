import { useSession } from 'next-auth/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { FaTwitch } from 'react-icons/fa';
import { BigGridGames } from '../../components/cards/bigGridGames';
import { GOTYGame } from '../../components/cards/gotyGame';
import { RatingGameEdit } from '../../components/cards/ratingGameEdit';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import Pagination from '../../components/pagination';

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data: session } = useSession();

//   return {
//     props: {
//       twitchChannel,
//     },
//   };
// };

type lastGames = {
  id: string;
  title: string;
  thumbnail: string;
}[];

export default function App() {
  const { data: session } = useSession();
  const twitchChannel = `https://www.twitch.tv/${session?.user?.name}`;

  const lastGames: lastGames = [
    { id: '1', title: 'Game 1', thumbnail: '/mass_effect.png' },
    { id: '2', title: 'Game 2', thumbnail: '/re_village.png' },
    { id: '3', title: 'Game 3', thumbnail: '/return.png' },
    { id: '4', title: 'Game 4', thumbnail: '/biomutant.png' },
    { id: '5', title: 'Game 5', thumbnail: '/return.png' },
    { id: '6', title: 'Game 6', thumbnail: '/biomutant.png' },
    { id: '7', title: 'Game 7', thumbnail: '/re_village.png' },
    { id: '8', title: 'Game 8', thumbnail: '/mass_effect.png' },
    { id: '9', title: 'Game 9', thumbnail: '/return.png' },
    { id: '10', title: 'Game 10', thumbnail: '/biomutant.png' },
  ];

  const gameGOTY = {
    title: 'It Takes Two',
    thumbnail: '/it_takes-two.png',
  };

  const LIMIT = 12;
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(30);
  const [alertVisible, setAlertVisible] = useState(true);

  function handleAlertVisible() {
    setAlertVisible(!alertVisible);
  }

  const myRatingGames = [
    {
      id: 1,
      name: 'Mass Effect: Legendary Edition',
      rating: 1,
      price: 30,
      comments:
        'O equil??brio entre a????o e terror ?? algo extremamente dif??cil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da a????o), quanto verdadeiros fracassos, como Resident Evil 6 (o ??nico terror ali est?? nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters at?? est?? preparado para enfrentar os inimigos, mas ?? colocado em situa????es desesperadoras.',
      goty: true,
    },
    {
      id: 2,
      name: 'God of War',
      rating: 9.9,
      price: 199,
      comments:
        'O equil??brio entre a????o e terror ?? algo extremamente dif??cil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da a????o), quanto verdadeiros fracassos, como Resident Evil 6 (o ??nico terror ali est?? nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters at?? est?? preparado para enfrentar os inimigos, mas ?? colocado em situa????es desesperadoras.',
      goty: true,
    },
    {
      id: 3,
      name: 'Eden Ring',
      rating: 10,
      price: 300,
      comments:
        'O equil??brio entre a????o e terror ?? algo extremamente dif??cil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da a????o), quanto verdadeiros fracassos, como Resident Evil 6 (o ??nico terror ali est?? nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters at?? est?? preparado para enfrentar os inimigos, mas ?? colocado em situa????es desesperadoras.',
      goty: true,
    },
    {
      id: 4,
      name: 'The last of us',
      rating: 9.9,
      price: 99,
      comments:
        'O equil??brio entre a????o e terror ?? algo extremamente dif??cil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da a????o), quanto verdadeiros fracassos, como Resident Evil 6 (o ??nico terror ali est?? nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters at?? est?? preparado para enfrentar os inimigos, mas ?? colocado em situa????es desesperadoras.',
      goty: true,
    },
  ];

  return (
    <div className="bg-cyberpunk h-screen w-screen bg-no-repeat bg-contain bg-left-top bg-opacity-80">
      <div className="max-w-screen-xl mr-auto ml-auto h-screen">
        <header className="pt-10">
          <Header />
        </header>
        <section>
          <div className="mt-36 flex flex-row">
            <figure className="w-80 h-80">
              <img
                src={session?.user?.image || '/static/images/user.png'}
                alt={session?.user?.name}
                className="w-full h-full rounded-lg"
              />
            </figure>
            <div className="ml-14">
              <h1 className="text-9xl font-bold text-white">
                {session?.user?.name}
              </h1>
              <NextLink href={twitchChannel}>
                <a className="text-white text-2xl flex items-center gap-2">
                  <FaTwitch />
                  <strong>twitch.tv/</strong>
                  {session?.user?.name}
                </a>
              </NextLink>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="">
            <BigGridGames games={lastGames} />
          </div>
        </section>
        <section className="mt-12">
          <div className="flex flex-row">
            <GOTYGame title={gameGOTY.title} thumbnail={gameGOTY.thumbnail} />
            <div className="ml-5">
              <div className="mb-7 ">
                <p className="text-white text-4xl font-light">
                  <strong className="text-yellow-font font-bold">
                    OS MELHORES{' '}
                  </strong>
                  AVALIADOS
                </p>
              </div>
              <div className="grid gap-3 grid-cols-1 max-w-3xl">
                {myRatingGames.map(rating => (
                  <RatingGameEdit
                    key={rating.id}
                    name={rating.name}
                    price={rating.price}
                    rating={rating.rating}
                    comments={rating.comments}
                  />
                ))}
              </div>
              <div className="my-7">
                <Pagination
                  limit={LIMIT}
                  offset={offset}
                  total={total}
                  setOffset={setOffset}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="mb-7">
            <p className="text-white text-4xl font-light">
              MINHAS{' '}
              <strong className="text-yellow-font font-bold">AVALIA????ES</strong>
            </p>
          </div>
          <div className="grid gap-3 grid-cols-1">
            {myRatingGames.map(rating => (
              <RatingGameEdit
                key={rating.id}
                name={rating.name}
                price={rating.price}
                rating={rating.rating}
                comments={rating.comments}
              />
            ))}
          </div>
          <div className="my-7">
            <Pagination
              limit={LIMIT}
              offset={offset}
              total={total}
              setOffset={setOffset}
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
