import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const rates = useCurrencyInfo(from);
  const options = Object.keys(rates);

  // Automatically recalculates convertedAmount whenever
  // amount, to, or rates changes — no button click needed
  useEffect(() => {
    if (rates[to]) {
      setConvertedAmount(amount * rates[to]);
    }
  }, [amount, to, rates]);

  // implementing swap logic
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // rendering two input boxes
  return (
    <div className="converter-card">
      <InputBox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        currencyOptions={options}
        selectedCurrency={from}
        onCurrencyChange={setFrom}
      />

      <button className="swap-btn" onClick={swap}>
        swap
      </button>

      <InputBox
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        selectedCurrency={to}
        onCurrencyChange={setTo}
        amountDisabled
      />

      <button className="convert-btn" disabled>
        {from.toUpperCase()} → {to.toUpperCase()}
      </button>
    </div>
  );
}

export default App;