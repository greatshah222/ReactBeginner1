import React from 'react';
import './App.css';
function Tweet(props) {
  // this is like html bu tin actual it is js we cannot use class= tweet instead use className
  // we also need to import our css file

  return (
    <div className='tweet'>
      <h3>{props.name}</h3>
      <p>{props.message}</p>
      <h5>Number of likes</h5>
    </div>
  );
}
export default Tweet;
