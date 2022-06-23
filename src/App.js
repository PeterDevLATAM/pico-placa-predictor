import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home.component.jsx";
import "./sass/_variables.scss";

function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/api/regulations")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);
  console.log(state);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
