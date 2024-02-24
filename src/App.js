import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    (async () => {
      const coins = await (
        await fetch("https://api.coinpaprika.com/v1/tickers")
      ).json();
      setCoins(coins);
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})` }</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin, key) => (
            <li key={key}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(3)}{" "}
              USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
