import { useState } from 'react'
import './App.css'
import { NavBar, Welcome, Dock } from '#components'


function App() {


  return (
    <main className=''>
      <NavBar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App
