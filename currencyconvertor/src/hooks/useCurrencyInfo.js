


//custom hook design

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {                 //if inside currency anything changes we call useEffect
    const [data, setData] = useState({});           // Ensure initial state is an empty object

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())                                     //callback receives res and convert it into json data
            .then((res) => setData(res.rates))                            // Set exchange rates from API response
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;                                      // Returning exchange rates object
}

export default useCurrencyInfo;


