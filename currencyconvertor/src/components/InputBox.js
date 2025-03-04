
import React, {useId} from 'react'

import './../styles/InputBox.css'

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false
        
    }
) {
    const amountInputId = useId()  //hook


    return(
        <>
         <label htmlFor={amountInputId}> 
            {label} 
         </label>

         <input
           id={amountInputId}
           type="number"
           placeholder="Amount"
           disabled={amountDisable}
           value={amount}
           onChange={(e) => onAmountChange && 
            onAmountChange(Number(e.target.value))} //String to Num
         />

         <p>Currency Type</p>

         <select 
         value={selectCurrency}
         onChange={(e) => onCurrencyChange &&  //event fired
          onCurrencyChange(e.target.value)}   //taking value
         disabled={currencyDisable}

         >

         {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
               {currency}
             
            </option>
         ))}

         </select>

         
        </>
    )
}

export default InputBox