//rfce

import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    selectedCurrency,
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false
}) {
  return (
    <div className="input-box">
  {/* Top row: label ("From"/"To") on the left, "Currency Type" text on the right */}
  <div className="input-box-label">
    <label>{label}</label>
    <span>Currency Type</span>
  </div>

  <div className="input-box-row">
    {/* The number input where user types the amount */}
    <input
      type="number"
      value={amount === 0 ? "" : amount}
      disabled={amountDisabled}
      onChange={(e) =>
        onAmountChange && onAmountChange(Number(e.target.value))
      }
    />

    {/* The dropdown to pick a currency (usd, inr, eur, etc.) */}
    <select
      value={selectedCurrency}
      disabled={currencyDisabled}
      onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
    >
      {/* Loop through every available currency code and turn it into an <option> */}
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
</div>
  )
}

export default InputBox;
