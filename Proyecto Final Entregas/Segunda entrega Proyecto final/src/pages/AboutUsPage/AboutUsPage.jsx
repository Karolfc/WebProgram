import React from 'react'
import { Nav, Footer, ValueSection, AboutStudio, TeamInfo } from '../../components'

export function AboutUsPage () {
  return (
    <>
      <section>
        <Nav />
      </section>
      <AboutStudio />
      <ValueSection />
      <TeamInfo />
      <Footer />
    </>
  )
}
