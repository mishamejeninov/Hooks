import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Elements from "./Components/Elements";
import Api from "./Components/API";

const axios = require("axios").default;

export default function App() {
  const [ApiInfo, setApiInfo] = useState([]);
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);

  function getData(data) {
    if (data !== "") {
      setInputData(data);
      setLoading(true);
      axios
        .get(`https://swapi.dev/api/${data}/`)
        .then(function (response) {
          // handle success
          console.log(response.data.results);
          setApiInfo(response.data.results);
          setLoading(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

  return (
    <div className="App">
      <h2>Please Choose One Of:</h2>
      <h4>people, planets, films, species, starships, vehicles</h4>
      <Elements childData={getData} />
      {loading && <CircularProgress color="secondary" />}
      <Api inputData={inputData} ApiInfo={ApiInfo} />
    </div>
  );
}
