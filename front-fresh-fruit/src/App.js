import React,{useState,useEffect} from 'react';
import Navi from './web-components/Navigationbar';
import Footer from './web-components/Footer';
import AddItemform from './web-components/AddItemform.js';
import Home from './Page/HomePage';
import Register from './Page/Register';
import RegisterSeller from './Page/RegisterSeller';
import ProfileCus from './Page/ProfileCus';
import Seller from './Page/Seller';
import SignUp from './Page/SignUp'
import Signin from './Page/Signin';
import Store from './Page/Store';
import AddItem from './Page/AddItem';
import ProfileSeller from './Page/ProfileSeller';
import EditStore from './Page/EditStore';
import Cart from './Page/Cart'
import UserContext from './Context/UserContext';


import HomePage from './Page/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  const [isloggedin,setIsloggedin] = useState(null)
  const [token,setToken] = useState("")
  const [userid,setUserid] = useState("")

  function handleIsloggedin(){
    if (localStorage.getItem('Token')==null){
      setIsloggedin(false)
    }else{
      setIsloggedin(true)
    }
    console.log(isloggedin)
  }
  function handleSetUsername(username){
    //setUsername(username);
    // setUsername(username);
  }
  function handleSetToken(token,userid){
    setToken(token);
    localStorage.setItem('Token',token);
    setUserid(userid)
    localStorage.setItem('Userid',userid);
  }
  function clearToken(){
    localStorage.clear();
    setToken("");
    setUserid("");
  }
  useEffect(()=>{
    handleIsloggedin()
  })
  function getToken(){
    return String(localStorage.getItem('Token'))
  }
  function getId(){
    return String(localStorage.getItem('Userid'))
  }
  return (
    <div>

      <Navi />
      {/* navigation bar */}



      {/* body part */}

    
      <Router>
        {/* body part */}
        <Switch>
          
          <Route exact path='/' component={Cart} />
          {token!=null ? (<Route path='/profile' component={ProfileSeller} />):(<Route path='/profile' component={Signin} />)}
          
          <Route path='/seller' component={Seller} />
          <Route path='/register' component={Register} />
          <Route path='/registerSeller' component={RegisterSeller} />
          <Route path='/Signin' component={Signin} />
          <Route path='/store' component={Store} />
          <Route path='/ProfileSeller' component={ProfileSeller} />
          <Route path='/EditStore' component={EditStore} />
          <Route path='/addItem' component={AddItemform} />
          
        </Switch>
      </Router>
      <Footer/>
    </div>


  );
}

export default App;
