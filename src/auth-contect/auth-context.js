import React, { createContext, useEffect, useState } from "react";


const AuthContext = createContext({
    // isLoggedIn : false,
    onLogin : (email, password)=> {},
    onLogout : ()=>{}
})



export function AuthContextProvider(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);



  
    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('isLoggedIn', '1');
      
      setIsLoggedIn(true);
      console.log('login page',isLoggedIn)
    };
  
    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
console.log('loaout',isLoggedIn)

    };


  return (
    <AuthContext.Provider value={{
        isLoggedIn : isLoggedIn,
        onLogin : loginHandler,
        onLogout : logoutHandler
    }}>
        {props.children}
   </AuthContext.Provider>
  )
}


export default AuthContext;