/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const changeTheme = (selectedTheme) => {
    if (selectedTheme === "yellow") {
      setTheme(selectedTheme);
      document.body.style.backgroundColor = "#FFDF00";
      showAlert("Yellow Mode has been enabled", "success");
    }
    if (selectedTheme === "red") {
      setTheme(selectedTheme);
      document.body.style.backgroundColor = "#990F02";
      showAlert("Yellow Mode has been enabled", "success");
    }
    if (selectedTheme === "blue") {
      setTheme(selectedTheme);
      document.body.style.backgroundColor = "#281E5D";
      showAlert("Yellow Mode has been enabled", "success");
    }
    if (selectedTheme === "green") {
      setTheme(selectedTheme);
      document.body.style.backgroundColor = "#234F1E";
      showAlert("Yellow Mode has been enabled", "success");
    }
  };

  const toggleMode = (whichColor) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="textCraft"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          changeTheme={changeTheme}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text:"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
