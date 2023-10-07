import React from 'react'
import { Button, Header, CatContent } from './components'
import { AppContextProvider } from './context/AppContextProvider'

export function App () {
  return (
    <>
      <section>
        <Header title='Love the cats, enjoy the facts!' />
        <main>
          <AppContextProvider>
            <CatContent />
            <Button title='New Fact' />
          </AppContextProvider>
        </main>
      </section>
    </>
  )
}
