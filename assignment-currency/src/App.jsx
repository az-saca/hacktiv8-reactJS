import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    console.log("API Key:", apiKey);
    axios
      .get("https://api.currencyfreaks.com/v2.0/rates/latest", {
        params: {
          apikey: apiKey,
          symbols: "CAD,EUR,IDR,JPY,CHF,GBP",
        },
      })
      .then((response) => {
        // console.log("Response data:", response.data.rates);
        const rates = [];
        for (const [currency, exchangeRate] of Object.entries(
          response.data.rates
        )) {
          const parsedRate = parseFloat(exchangeRate);
          rates.push({
            currency: currency,
            exchangedRate: parsedRate.toFixed(4).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, ""),
            weBuy: (parsedRate * 1.05).toFixed(4).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, ""),
            weSell: (parsedRate * 0.95).toFixed(4).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, ""),
          });
        }
        setCurrency(rates);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="rateTable">
      <table className="table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {currency.map((rate, index) => (
            <tr key={index}>
              <td>{rate.currency}</td>
              <td>{rate.weBuy}</td>
              <td>{rate.exchangedRate}</td>
              <td>{rate.weSell}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <p>
          Rates are based from 1 USD.
          <br />
          This application uses API from <u>https:</u>
          <a href="https://www.currencyfreaks.com/">
            //www.currencyfreaks.com/
          </a>
        </p>
      </div>
    </div>
  );
}
