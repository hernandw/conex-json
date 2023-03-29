import "./App.css";

import React, { useEffect, useState } from "react";

const urlJson = "./src/data/data.json";
console.log(urlJson);

const App = () => {
  const [data, setData] = useState([]);

  const getInfo = async () => {
    const res = await fetch(urlJson);
    const datos = await res.json()
    setData(datos.photos)
  };

useEffect( ()=>{
  getInfo()
}, [])

  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
};

export default App;
