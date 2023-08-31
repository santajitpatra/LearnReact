function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        //   nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (Element) => Element.objectID !== action.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE": {
      let pageNumberInc = state.page + 1;

      if (pageNumberInc >= state.nbPages) {
        pageNumberInc = 0;
      }

      return {
        ...state,
        page: pageNumberInc,
      };
    }
    case "PREV_PAGE": {
      let pageNumber = state.page - 1;

      if (pageNumber <= 0) {
        pageNumber = 0;
      }
      return {
        ...state,
        page: pageNumber,
      };
    }

    default:
      return state;
  }
}

export default reducer;
