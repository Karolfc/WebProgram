import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { AboutUsPage, HomePage, LoginPage, ProjectsPage } from './pages'
import { ProjectDetails } from './components'

function App () {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />

      <Route
        path='/about'
        element={<AboutUsPage />}
      />

      <Route
        path='/projects'
        element={<ProjectsPage />}
      />

      <Route
        path='/contact'
        element={<HomePage />}
      />

      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/projectdetails'
        element={<ProjectDetails />}
      />
    </Routes>
  )
}

export default App
