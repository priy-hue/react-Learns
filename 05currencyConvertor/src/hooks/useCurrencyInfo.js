// step 1 building custom hooks

import { useState,useEffect } from "react";

function userCurrencyInfo(currency) {
    const[data,setData] = useState({});

    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res)=>setData(res.rates))
        .catch((err)=>console.error("Failed to fetch rates:",err));
        
    },[currency]);

    return data;
    
}

export default userCurrencyInfo