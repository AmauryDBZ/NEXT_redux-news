import React from 'react';

const Article = ({source, title, description, content}) => {
  return (
    <div>
      <hr/>
      <h3>{title}</h3>
      <small>{source}</small>
      <p>{content}</p>
    </div>
  )
}

export default Article;
