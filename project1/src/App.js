import React, { useState } from 'react';
import './App.css';
// import Hello from './sayHello';
import Tweet from './tweet';

// function App() {
//   // in the state [] the first is the actual name and the second one is the function that changes the actual value
//   const [isRed, setRed] = useState(false);
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//     // setRed(true);
//     setRed(!isRed);
//   };

//   return (
//     <div className='app'>
//       <h1 className={isRed ? 'red' : ''}>Change my color</h1>
//       {/* <br />
//       {/* <h1>This is the app component</h1> */}
//       {/* <Hello /> */}
//       {/* after the name that is called props and later be accessed by their own component here in case the tweet component get its access */}
//       {/* <Tweet name='Bishal' like='2' message='this is arandom tweet' />
//       <Tweet name='shah' like='2' message='this is good tweet' />
//       <Tweet name='winter is coming' like='2' message='this is bad tweet' />
//       <Tweet name='Ajay' like='2' message='this is normal tweet' /> */}{' '}
//       <button onClick={increment}>Increment</button>
//       <h1>{count}</h1>
//     </div>
//   );
// }

function App() {
  const [users, setUsers] = useState([
    { name: 'bishal shah', message: 'learning the bascis of react' },
    { name: 'ajay  shah', message: 'learning the bascis of business' },
    { name: 'Mosh programmer', message: 'Teaching the bascis of react' },
  ]);
  return (
    <div className='app'>
      {users.map((user) => (
        <Tweet name={user.name} message={user.me} />
      ))}
    </div>
  );
}
export default App;
