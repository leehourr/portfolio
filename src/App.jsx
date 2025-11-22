import { useState } from 'react'
import './App.css'
import { NavBar, Welcome, Dock } from '#components'
import gsap from 'gsap'
import { Draggable } from 'gsap/all';
import { Terminal } from '#windows';
// import TerminalWindows from '#windows';

gsap.registerPlugin(Draggable);

function App() {


  return (
    <main className=''>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  )
}

export default App
