import { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FiPlusCircle, FiXCircle } from 'react-icons/fi';
import { RatingGameEdit } from '../../components/cards/ratingGameEdit';
import { Footer } from '../../components/footer';
import { NewRatingForm } from '../../components/forms/newRating';
import { Header } from '../../components/header';
import Pagination from '../../components/pagination';

export default function NewRating() {
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
        'O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.',
      goty: true,
    },
    {
      id: 2,
      name: 'God of War',
      rating: 9.9,
      price: 199,
      comments:
        'O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.',
      goty: true,
    },
    {
      id: 3,
      name: 'Eden Ring',
      rating: 10,
      price: 300,
      comments:
        'O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.',
      goty: true,
    },
    {
      id: 4,
      name: 'The last of us',
      rating: 9.9,
      price: 99,
      comments:
        'O equilíbrio entre ação e terror é algo extremamente difícil de dosar. Vimos tanto experimentos de sucesso, como Resident Evil 4 (que ainda pendia mais para o lado da ação), quanto verdadeiros fracassos, como Resident Evil 6 (o único terror ali está nos primeiros minutos da campanha do Leon). Eis que, com excelente balanceamento entre esses dois conceitos durante a maior parte do tempo, chega Resident Evil Village, o jogo em que Ethan Winters até está preparado para enfrentar os inimigos, mas é colocado em situações desesperadoras.',
      goty: true,
    },
  ];

  return (
    <div className="bg-cyberpunk h-screen w-screen bg-no-repeat bg-contain bg-left-top bg-opacity-80">
      <div className="max-w-screen-xl mr-auto ml-auto h-screen">
        <header className="pt-10">
          <Header />
        </header>
        <section className="h-auto">
          <div className="my-6">
            <button className="bg-blue-dark flex flex-row text-white text-2xl font-light px-3 items-center rounded-md ml-auto h-11">
              <div className="mr-2">
                <FiPlusCircle size={24} color="#FFF" />
              </div>
              <p>
                <strong className="font-bold">NOVA </strong>AVALIAÇÃO
              </p>
            </button>
          </div>
          <NewRatingForm />
          {alertVisible && (
            <div className="flex items-center px-4 bg-yellow-font h-11 rounded-md mt-3">
              <figure className="pr-2">
                <FaExclamationTriangle size={24} />
              </figure>
              <p className="text-base">
                <strong>
                  Você nao pode fazer 2 avaliações para o mesmo jaime.{' '}
                </strong>
                Mas pode atualizar sua avaliação antiga através de sua perfil
              </p>
              <button className="ml-auto" onClick={handleAlertVisible}>
                <figure>
                  <FiXCircle size={24} />
                </figure>
              </button>
            </div>
          )}
        </section>
        <section className="mt-12">
          <div className="mb-7">
            <p className="text-white text-4xl font-light">
              MINHAS{' '}
              <strong className="text-yellow-font font-bold">AVALIAÇÕES</strong>
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
