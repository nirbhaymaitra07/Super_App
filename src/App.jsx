import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Structure from "./components/Structure/Structure";
import Happening from "./components/Happening/Happening";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Structure/>
      {/* <Happening /> */}
    </>
  );
}

export default App;
