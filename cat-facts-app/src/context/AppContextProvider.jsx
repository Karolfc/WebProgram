import { AppContext } from './AppContext'
import React, { useState, useRef } from 'react'

export function AppContextProvider ({ children }) {
  const [catImg, setCatImg] = useState('')
  const [catFact, setCatFact] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const isFirstTime = useRef(true)

  const catContextValue = {
    catImg,
    setCatImg,
    catFact,
    setCatFact,
    error,
    setError,
    isLoading,
    setIsLoading,
    isFirstTime
  }

  return (
    <AppContext.Provider value={catContextValue}>
      {children}
    </AppContext.Provider>
  )
}
