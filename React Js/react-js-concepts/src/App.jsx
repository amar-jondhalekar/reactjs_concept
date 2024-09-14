import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'

function App() {

  return (
    <>
      <div>
        <h1> React JS Concepts 2024 </h1>
        <ClassBasedComponent/>
        <FunctionalComponent/>
      </div>
    </>
  )
}

export default App
