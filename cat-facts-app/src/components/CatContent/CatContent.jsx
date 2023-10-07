import './CatContent.css'
import 'animate.css'
import { useApp } from '../../hooks/useApp'

export function CatContent () {
  const { catImg, catFact, isLoading, isFirstTime, error } = useApp()

  if (error) {
    return <p className='error'>{error}</p>
  }
  if (isLoading) {
    return (
      <section className='loadingAnimation'>
        <img
          className='catGif'
          src='https://i.kym-cdn.com/photos/images/original/002/391/444/58a.gif'
          alt='The cat fact is loading'
        />
      </section>
    )
  }
  if (isFirstTime.current) {
    return (
      <p className='firstTime'>Click to get your cat fact.</p>
    )
  }

  return (
    <section className='catContainer'>
      <img className='catImg' src={catImg} alt='Cat image' />
      <p className='catFact'>{catFact}</p>
    </section>
  )
}
