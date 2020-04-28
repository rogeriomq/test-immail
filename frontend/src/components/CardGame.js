import React from 'react'
import { GiConvergenceTarget, GiOverkill, GiSmallFire } from 'react-icons/gi'

export default function CardGame({ game }) {
  return (
    <li className="text-lg border rounded-lg border-gray-800 bg-gray-800 relative p-3 text-white">
      <p className="text-xl font-semibold">{game.name}</p>
      <p className="border-b border-white w-full"></p>
      <div className="my-2">
        <p className="text-lg flex items-center">
          <GiConvergenceTarget
            size={22}
            className="text-red-700 font-bold mr-2"
          />
          <span>Kills by Player</span>
        </p>
        <ul className="pl-2 grid grid-cols-2">
          {game.players.map((name, key) => (
            <li key={key}>
              <span>{name} </span>
              <span className="font-black">
                {game.kills && game.kills[name] ? game.kills[name] : 0}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="border-b border-white w-full"></p>
      <div className="my-3 flex items-center">
        <GiOverkill size={24} />
        <span className="font-semibold mx-1">
          Total kills: {game.total_kills}
        </span>
      </div>
      <p className="border-b border-white w-full"></p>

      <div className="my-2">
        <p className="text-lg flex items-center">
          <GiSmallFire size={22} className="text-orange-700 font-bold mr-2" />
          <span>Kills by Means</span>
        </p>
        <ul className="pl-4">
          {game.kills_by_means &&
            Object.keys(game.kills_by_means).map((mean) => (
              <li key={mean}>
                <span>{mean} </span>
                <span className="font-black">
                  {game.kills_by_means && game.kills_by_means[mean]}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </li>
  )
}
