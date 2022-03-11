import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { SignInWithTwitch } from '../components/buttons/signInWithTwitch';
import { GOTYGame } from '../components/cards/gotyGame';
import { GridGames } from '../components/cards/gridGames';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

type lastGames = {
  id: string;
  title: string;
  thumbnail: string;
}[];

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }

  const gameGOTY = {
    title: 'It Takes Two',
    thumbnail: '/it_takes-two.png',
  };

  const lastGames: lastGames = [
    { id: '1', title: 'Game 1', thumbnail: '/mass_effect.png' },
    { id: '2', title: 'Game 2', thumbnail: '/re_village.png' },
    { id: '3', title: 'Game 3', thumbnail: '/return.png' },
    { id: '4', title: 'Game 4', thumbnail: '/biomutant.png' },
    { id: '5', title: 'Game 5', thumbnail: '/return.png' },
    { id: '6', title: 'Game 6', thumbnail: '/biomutant.png' },
    { id: '7', title: 'Game 7', thumbnail: '/re_village.png' },
    { id: '8', title: 'Game 8', thumbnail: '/mass_effect.png' },
  ];

  return {
    props: {
      gameGOTY,
      lastGames,
    },
  };
};

export default function Home({ gameGOTY, lastGames }) {
  return (
    <div className="bg-bg-image h-screen w-screen bg-no-repeat bg-cover bg-left-top">
      <div className="max-w-screen-xl mr-auto ml-auto h-screen ">
        <header className="pt-10">
          <Header />
        </header>
        <section className="w-full h-min mt-32">
          <div>
            <h1 className="text-9xl text-white font-bold">Quais os</h1>
            <h1 className="text-9xl mt-8 text-white font-bold">seus jogos</h1>
            <h1 className="text-9xl mt-8 text-white font-bold">favoritos</h1>
          </div>
          <div className="mt-5">
            <p className="text-yellow-font text-4xl font-light">
              <strong className="font-bold">Crie sua lista</strong> e compare
              suas <br /> notas com a galera do chat
            </p>
          </div>
          <div className="mt-12 sm:flex md:flex flow-row">
            <SignInWithTwitch />
            <div className="ml-4">
              <div className="bg-blue-light px-4 h-12 w-auto rounded flex justify-center items-center">
                <p className="text-white text-2xl">
                  VEJA LISTA <strong>DOS MELHORES JOGOS</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="flex flex-row">
            <GOTYGame title={gameGOTY.title} thumbnail={gameGOTY.thumbnail} />
            <div className="ml-5">
              <GridGames games={lastGames} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
