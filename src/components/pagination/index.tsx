const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul className="flex gap-2 ">
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
          className="flex items-center justify-center px-2 h-11 w-14 bg-blue-light text-white rounded-md font-bold"
        >
          {'<<'}
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map(page => (
          <li key={page} className="">
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current
                  ? 'flex items-center justify-center w-14 h-11 bg-none text-white rounded-md font-bold'
                  : 'flex items-center justify-center w-14 h-11 bg-blue-light text-white rounded-md font-bold'
              }
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
          className="flex items-center justify-center px-2 h-11 w-14 bg-blue-light text-white rounded-md font-bold"
        >
          {'>>'}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
