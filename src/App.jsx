import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainContainer from "./MainContainer";

function App() {
  return (
    <BrowserRouter>
      <MainContainer/>
    </BrowserRouter>
  );
}

export default App;
