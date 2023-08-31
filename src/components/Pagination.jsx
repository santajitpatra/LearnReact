import { useGlobalContext } from "../context/contextNews";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();

  return (
    <div className="pagination_btn">
      <button className="news_btn" onClick={() => getPrevPage()}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button className="news_btn" onClick={() => getNextPage()}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
