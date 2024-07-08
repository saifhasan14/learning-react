import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, toFrom] = useState("inr")
  const [convertedAmount, setCounvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  // retrive the keys
  const options = Object.keys(currencyInfo)

  return (
    <>

    </>
  )
}

export default App
