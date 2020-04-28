import React, { useEffect, useState } from 'react'
import quakeiii from './assets/resources/quakeiii.svg'
import CardGame from './components/CardGame'
import Ranking from './components/Ranking'
import gamesAPI from './services/gamesAPI'

function App() {
  const [games, setGames] = useState([])
  const [rankingView, setRankingView] = useState(false)

  // Get games in api and sort by "game name" xD
  useEffect(() => {
    const fetchGames = async () => {
      const orderByName = (a, b) => {
        let intGameA = parseInt(a.name.replace('game_', ''))
        let intGameB = parseInt(b.name.replace('game_', ''))
        return intGameA - intGameB
      }
      try {
        const { data } = await gamesAPI.getAll()
        setGames(data.sort(orderByName))
      } catch (error) {}
    }
    fetchGames()
  }, [])

  return (
    <div className="relative">
      <header className="w-full bg-blue-800 text-white font-extrabold text-2xl py-3 md:text-4xl">
        <div className="flex items-center justify-center w-full md:justify-start md:pl-4">
          <img
            src={quakeiii}
            alt="Guake Arena III"
            className="w-20 rounded-full"
          />
          <span className="mx-3"> Quake Log Games</span>
        </div>
      </header>
      <div className="px-2 mx-auto container flex flex-col pb-3 w-full">
        <div className="flex justify-between items-center">
          <span className="text-2xl my-3 lg:text-4xl font-extrabold text-gray-700">
            {rankingView ? 'Kills Ranking' : 'Games'}
          </span>
          <div>
            <label className="py-2 text-xl cursor-pointer text-blue-500 leading-relaxed lg:text-2xl hover:text-bold hover:underline">
              <input
                className="hidden"
                type="checkbox"
                value={rankingView}
                onChange={() => setRankingView(!rankingView)}
              />
              {rankingView ? 'Games' : 'Ranking'}
            </label>
          </div>
        </div>
        {rankingView ? (
          <Ranking games={games} />
        ) : (
          <ul className="grid grid-flow-row gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {games.map((game) => (
              <CardGame key={game._id} game={game} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
