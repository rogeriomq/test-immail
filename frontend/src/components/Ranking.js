import React, { useEffect, useState } from 'react';

export default function Ranking({games}) {
  const [ranking, setRanking] = useState([])
  
  // transform in array of players with name and kills
  useEffect(()=>{
    const temp = {}
    for(let game of games) {
      Object.keys(game.kills || [])
        .map((player) => {
          temp[player] = (temp[player] || 0) + game.kills[player]
          return ''
        })
    }

    let players = Object.keys(temp)
    
    if(players.length) {
      const newArray = players.map(player => ({player, kills: temp[player]}))
      setRanking(newArray.sort((a, b) => b.kills - a.kills))
    }
  }, [games])

  return (
    <div>
      <ul className="text-2xl text-white rounded-md px-6 bg-gray-800 font-medium lg:text-4xl">
        {
          ranking && ranking.map(labels => (
            <li key={labels.player} className="w-full flex opacity-75 border-b border-b-white py-1 my-px">
              <span className="w-full">
                {labels.player}
              </span>
              <span className="font-black">{labels.kills}</span>
            </li>
          ))
        }
      </ul>
      
    </div>
  );
}
