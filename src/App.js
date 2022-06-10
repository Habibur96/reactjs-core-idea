import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (

    <div>
      <h2>External User</h2>
      <p>{users.length}</p>
      {/* {
        users.map(user => <li >{user.name}</li>)
      } */}

      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div >
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>Name: {props.name}</h3>
      <h3>Email{props.email}</h3>
    </div>
  )
}



function Counter() {
  const [count, setCount] = useState(35);


  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase</button> <br /> <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


export default App;
