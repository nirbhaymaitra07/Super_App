import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Structure from './components/Structure/Structure'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Structure/>
    </>
  )
}

export default App
