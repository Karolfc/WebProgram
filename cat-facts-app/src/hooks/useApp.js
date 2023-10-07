import { useEffect, useContext } from 'react'
import { fetchCatFact, fetchCatImg } from '../services/fetchCatFacts'
import { AppContext } from '../context/AppContext'

export const useApp = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('This component should be within AppContextProvider component')
  }

  const {
    catImg,
    setCatImg,
    catFact,
    setCatFact,
    error,
    setError,
    isLoading,
    setIsLoading,
    isFirstTime
  } = context

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = catFact === ''
    }
  }, [catFact])

  const getCatFact = () => {
    fetchCatFact()
      .then((newCatFact) => {
        setCatFact(newCatFact)
        const newCatImgText = newCatFact.split(' ').slice(0, 4).join(' ')
        getCatImg(newCatImgText)
      })
      .catch((e) => setError(e))
  }

  const getCatImg = (newCatImgText) => {
    fetchCatImg({ newCatImgText })
      .then((newCatImg) => setCatImg(newCatImg))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {}, [getCatFact])
  useEffect(() => {}, [getCatImg])

  const handleButton = () => {
    setIsLoading(true)
    getCatFact()
  }

  return {
    catImg,
    catFact,
    error,
    isFirstTime,
    isLoading,
    handleButton
  }
}
