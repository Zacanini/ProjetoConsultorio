import { useState } from 'react'
import { Rotas } from './routes/Router'
import {Login} from "./pages/Login"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rotas/>
    </>
  )
}

export default App
