import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchNewsRequest,
  fetchNewsFailure,
  fetchNewsSuccess
} from './actions';
import Article from './components/Article';


const App = () => {
  const fetchNews = useSelector(state => state.fetch)
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(fetchNewsRequest());
    fetch("http://newsapi.org/v2/everything?q=reactjs&sortBy=publishedAt&apiKey=yourkey")
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'error') {
          dispatch(fetchNewsFailure(response.message))
        } else {
          dispatch(fetchNewsSuccess(response.articles))
        }
      })
  }

  return (
    <div>
      <h1>coucou</h1>
      <p>news state : {fetchNews.news.length}</p>
      <button onClick={() => handleFetch()}>get some fresh news !</button>
      {fetchNews.news && fetchNews.news.map((article) => (
        <Article
          source={article.source.name}
          title={article.title}
          description={article.description}
          content={article.content}
        />
      ))}
    </div>
  )
}

export default App;
