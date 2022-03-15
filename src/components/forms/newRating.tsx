import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function NewRatingForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 bg-blue-dark rounded-xl"
    >
      <div className="flex gap-3 align-top">
        <div className="flex flex-1 flex-col">
          <label htmlFor="" className="text-white text-lg">
            NOME DO <strong>JOGO</strong>
          </label>
          <input
            className="rounded-md bg-blue-light text-white border-none w-auto"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-white text-lg">
            <strong>NOTA</strong>
          </label>
          <input
            className="rounded-md bg-blue-light text-white border-none w-20"
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-white text-lg">
            <strong>PREÇO JUSTO</strong>
          </label>
          <input
            className="rounded-md bg-blue-light text-white border-none w-36"
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-white text-lg">
            <strong>GOTY?</strong>
          </label>
          <input
            className="rounded-md bg-blue-light text-white border-none "
            type="checkbox"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-white text-lg">
            <strong>FAVS?</strong>
          </label>
          <input
            className="rounded-md bg-blue-light text-white border-none "
            type="checkbox"
          />
        </div>
      </div>
      <div className="flex mt-4 gap-3 flex-row">
        <div className="flex flex-1 flex-col">
          <label htmlFor="" className="text-white text-lg">
            MEUS <strong>COMENTÁRIOS</strong>
          </label>
          <textarea className="rounded-md bg-blue-light text-white border-none w-auto max-h-48 h-48 min-h-min" />
        </div>
        <div className="grid gap-5 w-96">
          <div>
            <p className="text-gray-500 flex flex-col text-sm">
              <strong>PREÇO JUSTO:</strong>
              <span>É o preço que você acha justo pagar nesse jogo.</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500 flex flex-col text-sm">
              <strong>GOTY:</strong>
              <span>
                O melhor jogo do ano (de lançamento) na sua opinião. Só é
                possível assinalar um jogo por ano de lançamento como goty. Ele
                é exibido no seu perfil.
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-500 flex flex-col text-sm">
              <strong>FAVS:</strong>
              <span>
                Um dos seus jogos favoritos de todos os tempos para aparecer no
                seu perfil. No máximo 10 jogos permitidos.
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
