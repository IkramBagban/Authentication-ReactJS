import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './auth-contect/auth-context';

function App() {

  const authCtx = useContext(AuthContext)
console.log('aa',authCtx.isLoggedIn) 
  return (
   <>

      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login  />}
        {authCtx.isLoggedIn && <Home />}
      </main>
        </>
   
  );
}

export default App;
