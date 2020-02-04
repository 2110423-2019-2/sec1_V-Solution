import React from 'react';
import './App.css';
import Navi from './web-components/Navigationbar';
import Register from './Page/Register';
import Profile from './Page/Profile';
import Seller from './Page/Seller';
import Signin from './Page/Signin';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (

    <div>

      {/* navigation bar */}

      <Navi />

      <Router>
      {/* body part */}
        <Switch>
              <Route exact path='/' component={Register} />
              <Route path='/profile' component={Profile} />
              <Route path='/seller' component={Seller}/>
              <Route path='/register' component={Register} />
              <Route path='/signin' component={Signin} />
          </Switch>
      </Router>  

      
      
    </div>

  );
}

export default App;
