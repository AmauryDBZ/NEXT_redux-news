const fetchNews = (
  state = {
    loading: false,
    news: [],
    error: ''
  }, action) => {
  switch(action.type){
    case 'FETCH_NEWS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case 'FETCH_NEWS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        loading: false,
        news: action.news
      }
    default: {
      return state;
    }
  }
};

export default fetchNews;
