import React from "react"
import CurrencyConverter from "./components/currencyConverter"

import './App.css';

function App() {


  return (
    <>
      <div className='min-h-screen bg-gray-200 rounded-xl  flex flex-col items-center justify-center'>
        <div className="container">
          <CurrencyConverter />
        </div>
      </div>
    </>
  )
}
export default App
