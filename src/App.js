import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="root">
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
