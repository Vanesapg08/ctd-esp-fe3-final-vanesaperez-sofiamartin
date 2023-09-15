import { createContext, useContext, useState } from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export const AppContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <AppContext.Provider value={{darkMode, setDarkMode}}>
      <div className="App">
          <Navbar/>
          <div id="detail" style={{padding: '30px 30px'}}>
            <Outlet />
          </div>
          <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
