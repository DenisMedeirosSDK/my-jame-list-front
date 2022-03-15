import { useState } from 'react';
import { FiEdit, FiFileText } from 'react-icons/fi';

type Props = {
  id?: string;
  name: string;
  rating: number;
  price: number;
  comments: string;
  goty?: boolean;
  favorite?: boolean;
};

export function RatingGameEdit(props: Props) {
  const [visibleComment, setVisibleComment] = useState(false);

  function handleVisibleComment() {
    setVisibleComment(!visibleComment);
  }

  return (
    <>
      <div className="flex flex-row bg-blue-light px-4 h-20 items-center rounded-xl">
        <div className="grid gap-2 grid-cols-2">
          <button
            onClick={handleVisibleComment}
            className="bg-blue-dark p-2 rounded-md"
          >
            <FiFileText size={40} color={visibleComment ? '#FAF769' : '#FFF'} />
          </button>
          <button className="bg-blue-dark p-2 rounded-md">
            <FiEdit size={40} color="#FFF" />
          </button>
        </div>
        <div className="ml-8 mr-auto">
          <p className="text-2xl text-white">
            <strong>{props.name}</strong>
          </p>
        </div>
        <div className="flex flex-col items-center px-6">
          <p className="text-base text-yellow-font">
            <strong>Nota:</strong>
          </p>
          <p className="text-4xl text-white font-bold">
            <strong>{props.rating}</strong>
          </p>
        </div>
        <div className="flex flex-col items-center px-6">
          <p className="text-base text-yellow-font">
            <strong>Quanto vale?</strong>
          </p>
          <p className=" text-white font-bold">
            <span className="flex text-lg">
              R$
              <strong className="text-4xl drop-shadow-text-shadow">
                {props.price}
              </strong>
            </span>
          </p>
        </div>
      </div>
      {visibleComment && (
        <div>
          <p className="text-white text-base">{props.comments}</p>
        </div>
      )}
    </>
  );
}
