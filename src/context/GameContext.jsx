import React, { createContext, useContext, useState } from 'react'

const GameContext = createContext({
  points: 0,
  addPoints: () => null,
  achievements: [],
  unlockAchievement: () => null,
})

export function GameProvider({ children }) {
  const [points, setPoints] = useState(0)
  const [achievements, setAchievements] = useState([])

  const addPoints = (amount) => {
    setPoints(prev => prev + amount)
  }

  const unlockAchievement = (achievement) => {
    if (!achievements.find(a => a.id === achievement.id)) {
      setAchievements(prev => [...prev, achievement])
    }
  }

  const value = {
    points,
    addPoints,
    achievements,
    unlockAchievement,
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

