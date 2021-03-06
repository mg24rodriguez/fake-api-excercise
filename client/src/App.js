import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  return (
    <div>
      <h1>fake api</h1>
      <p>Ingresa o elimina usuarios desde postman</p>
      {(typeof backendData.users === 'undefined')?(
        <p>Loading...</p>
      ):(
        backendData.users.map((user, i) =>(
          <p key={i}>{user}</p>
        ))  
      )}
    </div>
  );
}

export default App;
