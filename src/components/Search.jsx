import { useGlobalContext } from '../context/contextNews'

const Search = () => {
    const { query, searchPost } = useGlobalContext();
  return (
    <div>
      <form id="search_form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            id="search_input"
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search