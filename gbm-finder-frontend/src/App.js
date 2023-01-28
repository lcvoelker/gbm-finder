import './App.css';
import React, { useEffect, useState } from 'react'
// components
import PostRow from './components/postRow'

function App() {
    const rows = [
        { name: "Today" },
        { name: "This week" },
    ]
    
    const [backendData, setBackendData] = useState([{ }])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
    
  return (
    <div className="App">
        <PostRow metadata={rows[0]}/>
        <PostRow metadata={rows[1]}/>

        {(typeof backendData.users === 'undefined') ? (
        <p>Loading!</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
