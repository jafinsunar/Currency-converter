import { useState } from 'react'

import './App.css'
import CurrencyConvert from './components/currency-convert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
        <div className="container">
        <CurrencyConvert/>
        </div>
      </div>
    </>
  )
}

export default App
