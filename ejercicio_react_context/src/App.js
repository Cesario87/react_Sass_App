import './App.css';
import Header from './components/Header';
import Main from './components/Main';
// import Card from './components/Main/Card';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("Siisar"); // state para componente funcional

  const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
  const logout = () => setUser(""); // user = ""

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
