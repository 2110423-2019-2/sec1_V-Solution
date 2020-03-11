import React, { useState, useEffect } from 'react';
import Navi from './web-components/Navigationbar';
import Footer from './web-components/Footer';
import AddItemform from './web-components/AddItemform';
import Home from './Page/HomePage';
import Register from './Page/Register';
import RegisterSeller from './Page/RegisterSeller';
import Profile from './Page/Profile';
import Seller from './Page/Seller';
import Signin from './Page/Signin';
import Store from './Page/Store';
import AddItem from './Page/AddItem';
import EditProfile from './Page/EditProfile';
import EditStore from './Page/EditStore';
import UserContext from './Context/UserContext';


import HomePage from './Page/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  const [isloggedin, setIsloggedin] = useState(null)
  const [token, setToken] = useState("")
  const [userid, setUserid] = useState("")

  function handleIsloggedin() {
    if (localStorage.getItem('Token') == null) {
      setIsloggedin(false)
    } else {
      setIsloggedin(true)
    }
    console.log(isloggedin)
  }
  function handleSetUsername(username) {
    // setUsername(username);
  }
  function handleSetToken(token, userid) {
    setToken(token);
    localStorage.setItem('Token', token);
    setUserid(userid)
    localStorage.setItem('Userid', userid);
  }
  function clearToken() {
    localStorage.clear();
    setToken(null);
    setUserid(null);
  }
  useEffect(() => {
    handleIsloggedin()
  })
  function getToken() {
    return String(localStorage.getItem('Token'))
  }
  function getId() {
    return String(localStorage.getItem('Userid'))
  }
  return (
    <div>

      <Navi />
      <Router>
        {/* body part */}
        <Switch>
          <UserContext.Provider value={{
            isloggedin: `${isloggedin}`,
            setLogin: handleIsloggedin,
            setToken: handleSetToken,
            clearToken: clearToken,
            getToken: getToken, getId: getId
          }}>
            <Route exact path='/' component={Home} />
            {localStorage.getItem('Token') != null ? (<Route path='/profile' component={Profile} />) : (<Route path='/signin' component={Signin} />)}

            <Route path='/seller' component={Seller} />
            <Route path='/register' component={Register} />
            <Route path='/registerSeller' component={RegisterSeller} />
            <Route path='/signin' component={Signin} />
            <Route path='/store' component={Store} />
            <Route path='/editProfile' component={EditProfile} />
            <Route path='/editStore' component={EditStore} />
            <Route path='/addItem' component={AddItemform} />
          </UserContext.Provider>
        </Switch>
      </Router>
      <Footer />
    </div>


  );
}

export default App;
