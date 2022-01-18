import React,{ useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx"
import  Home  from "./pages/Home.jsx"
import { AuthContext } from "./components/context";

const App = function() {
  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(Math.random());
    }
   
  }, []);


return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
      { isAuth
      ?  <Routes>

          <Route path="*" element={<Home/>}></Route>
        </Routes> 
        : <Routes>
            <Route path="*" element = {<Login/>} ></Route>
          </Routes>}
            
      </BrowserRouter>
    </AuthContext.Provider>
  )
} 

export default App