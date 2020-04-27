import React, { useEffect, useState } from 'react';
import gamesAPI from './services/gamesAPI';

function App() { 
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    async function fetchData() {
      setLoading(true)
      try {
        const {data} = await gamesAPI.getAll()
        setGames(data)
      } catch (error) {    
        console.log(error)  
      } finally{
        setLoading(false)
      }
    }
    fetchData();
  })

  return (
    <div className="mx-auto container">
      {
        loading ? <span>Loading...</span> : ''
      }
    </div>
  );
}

export default App;
