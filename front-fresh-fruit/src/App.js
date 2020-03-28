import React, { useState, useEffect } from 'react';
import Navi from './web-components/Navigationbar';
import Footer from './web-components/Footer';
import AddItemform from './web-components/AddItemform';
import Home from './Page/HomePage';
import Register from './Page/Register';
import RegisterSeller from './Page/RegisterSeller';
import ProfileCus from './Page/ProfileCus';
import YourOrder from './Page/YourOrder';
import SignUp from './Page/SignUp'
import Signin from './Page/Signin';
import AddItem from './Page/AddItem';
import ProfileSeller from './Page/ProfileSeller';
import EditStore from './Page/EditStore';
import Cart from './Page/Cart'
import UserContext from './Context/UserContext';
import Profile from './Page/ProfileCus'
import EditProfile from './Page/EditProfile'
import HomePage from './Page/HomePage';

import Payment from './Page/Payment'

import ProductDetail from './Page/ProductDetail';

>>>>>>> ef02e4d009099082f3d08fd675ed0771d3ade67b
import Report from './Page/Report'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [isloggedin, setIsloggedin] = useState(null)
  const [token, setToken] = useState("")
  const [userid, setUserid] = useState("")
  const [username, setUsername] = useState("")
  const [userType,setUserType] = useState("")
  const [userData,setUserData] = useState()

  function handleIsloggedin() {
    if (localStorage.getItem('Token') == null) {
      setIsloggedin(false)
    } else {
      setIsloggedin(true)
    }
    console.log("Login ", isloggedin)
  }
  function handleSetUsername(username) {
    setUsername(username);
    localStorage.setItem('Username', username)
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
    setUserType(null);
    setIsloggedin(false);
  }
  useEffect(() => {
    handleIsloggedin()
  })
  function setUserTypeInContext(usertype){
    setUserType(usertype)
    localStorage.setItem('UserType', usertype);
  }
  function setUserDataInContext(userdata){
    setUserData(userdata)
    localStorage.setItem('UserData', userdata);
    console.log('This is first name in App')
    console.log(userdata)
    console.log('This is in UserData')
    console.log(localStorage.getItem('UserData'))
  }
  function getUserData(){
    return localStorage.getItem('UserData')
  }
  function getToken() {
    return String(localStorage.getItem('Token'))
  }
  function getId() {
    return String(localStorage.getItem('Userid'))
  }
  function getUsername() {
    return String(localStorage.getItem('Username'))
  }
  function getUserType(){
    return String(localStorage.getItem('UserType'))
  }


  return (
    <div>

      
      {/* navigation bar */}



      {/* body part */}


      <Router>
        {/* body part */}
        <Navi />
        <Switch>
          <UserContext.Provider value={{
            isloggedin: `${isloggedin}`,
            setLogin: handleIsloggedin,
            setToken: handleSetToken,
            setUsername: handleSetUsername,
            clearToken: clearToken,
            getToken: getToken,
            getId: getId,
            getUsername: getUsername,
            setUserTypeInContext:setUserTypeInContext,
            getUserType: getUserType,
            setUserDataInContext:setUserDataInContext,
            getUserData:getUserData,
          }}>
            <Route exact path='/' component={Home} />
            {/* {localStorage.getItem('Token') !== null ? (<Route path='/profile' component={Profile} />)
              : (<Route path='/signin' component={Signin} />)} */}
            {localStorage.getItem('user_type') == 'Seller' ? (<Route path='/profile' component={ProfileSeller} />) : (<Route path='/profile' component={Profile}/>)}
            {/* <Route path='/profile' component={Profile}/> */}
            <Route path='/payment' component={Payment}/>
            <Route path='/signin' component={Signin} />
            <Route path='/register' component={Register} />
            <Route path='/order' component={YourOrder}/>
            <Route path='/registerSeller' component={RegisterSeller} />
            <Route path='/signup' component={SignUp} />
            <Route path='/report' component={Report} />
            <Route path='/editProfile' component={EditProfile} />
            <Route path='/editStore' component={EditStore} />
            <Route path='/addItem' component={AddItemform} />
            <Route path='/cart' component={Cart} />
          </UserContext.Provider>
        </Switch>
      </Router>
      <Footer />
    </div>


  );
}

export default App;