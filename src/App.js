import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/home.component.jsx";
import "./sass/_variables.scss";
import { setRegulations } from "./store/regulations/regulations.actions.js";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/api/regulations")
      .then((res) => res.json())
      .then((res) => dispatch(setRegulations(res)));
  }, [dispatch]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
