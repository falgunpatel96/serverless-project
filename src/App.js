import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


import Register from "./registerpage/components/Register";
import GetCluster from "./getcluster/components/GetCluster";
// import Login from "./loginpage/components/Login"
// import Error from './common/Error';


function App() {
  return (
    <div>
      {/* <Header /> */}
      <Router>

        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/getCluster' component={GetCluster} />
          {/* <Route exact path='/login' component={Login} /> */}
          {/* <Route exact path="/error" component={Error} /> */}
          {/* <Redirect to="/error" /> */}
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
