
import React, { useState } from "react";
import { InputBox } from "./components";  //index file is called by default
import useCurrencyInfo from "./hooks/useCurrencyInfo";

import "./styles/App.css"

function App() {
 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)     //extracting keys from obj

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
   <>
    <h1>Currency Converter</h1>

    <form onSubmit={(e) => {e.preventDefault();
       convert()}}>

    <InputBox 
      label="From"
      amount={amount}
      currencyOptions={options}
      onCurrencyChange={(currency) => setAmount(amount)}
      selectCurrency={from}
      onAmountChange={(amount) => setAmount(amount) }
    
    />

    <button onClick={swap}>
      swap
    </button>

    <InputBox 
      label="To"
      amount={convertedAmount}
      currencyOptions={options}
      onCurrencyChange={(currency) => setTo(currency)}
      selectCurrency={from}
      amountDisable
    
    />

    <button type="submit">
      Convert {from.toUpperCase()} to 
      {to.toUpperCase()}

    </button>




    </form>
   </>
  );
}

export default App;
