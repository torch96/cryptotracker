import "./App.css";
import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import cryptoDataService from "./services/cryptoList";
import Register from "./Components/register";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import Login from "./Components/Login";
import IndividualCoin from "./Components/IndividualCoin";


function App() {
  const [data, setData] = useState([]);
  const [movers, setMovers] = useState([]);


  useEffect(() => {
    document.title = "crypto tracker";
  });

  return (
    <Router>
      <AppContext.Provider
        value={{
          data,
          setData,
          movers,
          setMovers,

   
        
        }}
      >
        <div className="app">
          <Header />
          <main>
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route
                  path="/login"
                  element={<Login/>}
                ></Route>
                <Route
                  path="/Register"
                  element={<Register/>}
                ></Route>
                <Route
                  path="/coins/:coinID"
                  element={<IndividualCoin />}
                ></Route>
                
              </Routes>
            </div>
          </main>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
