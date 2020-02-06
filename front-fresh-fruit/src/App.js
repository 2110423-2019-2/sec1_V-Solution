import React from 'react';
import Navi from './web-components/Navigationbar';
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

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (

    <div>

      {/* navigation bar */}

      <Router>
      {/* body part */}
        <Switch>
              <Route exact path='/' component={RegisterSeller} />
              <Route path='/profile' component={Profile} />
              <Route path='/seller' component={Seller}/>
              <Route path='/register' component={Register} />
              <Route path='/registerSeller' component={RegisterSeller} />
              <Route path='/Signin' component={Signin} />
              <Route path='/addItem' component={AddItem} />
              <Route path='/store' component={Store} />
              <Route path='/EditProfile' component={EditProfile}/>
              <Route path='/EditStore' component={EditStore}/>
          </Switch>
      </Router>  

      
      
    </div>

  );
}

export default App;
