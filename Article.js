import React from 'react';
import './Article.css';

function Article(props) {
  return (
    <div className="Question">
      <h2 className='Feedback'> What do you want to ask or share </h2>

      <label className=''>Title</label>
      <input className='Title' type="text" placeholder="Enter a descriptive title." />

      <label className='Class'>Abstract</label>
      <textarea className='Description' placeholder="Enter a 1-paragraph Abstract" />

      <label className='Class'>Article Text</label>
      <textarea className='Description' placeholder="Enter the main text of the article" />

      <label className='Class'>Tags</label>
      <input className='Tags' type="text" placeholder="Please add up to three tags to describe what your article is about, e.g., Java" />

      <button className="post">Post</button>
    </div>
  );
}

export default Article;
