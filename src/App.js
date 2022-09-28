import axios from "axios";
import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [hidden, setHidden] = useState(false);

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log("clicked");
        setQuote(res.data.content);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center ">
      <div
        onClick={() => getQuote()}
        className="p-2 bg-slate-400 hover:shadow-lg rounded-lg cursor-pointer"
      >
        <button>Get Random Quote</button>
      </div>
      {quote && (
        <div
          className={`mt-4 px-10 py-4 bg-gray-200 rounded-lg shadow-xl ${
            hidden ? "hidden" : "block"
          } `}
        >
          {quote}
        </div>
      )}
      <button
        onClick={() => setQuote("")}
        className="bg-red-400 p-2 rounded-lg mt-10"
      >
        Clear
      </button>
      <button
        className="bg-red-400 p-2 rounded-lg mt-10"
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? "Show" : "Hide"}
      </button>
    </div>
  );
}

export default App;
