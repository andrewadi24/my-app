import Navbar from './components/Navbar'
import Premium from './components/Premium'
import Footer from './components/Footer'
import Signup from './components/Signup'
import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path ="/Premium" component={Premium}/>
          <Route path ="/signup" component={Signup}/>
        </Switch>
        <Footer></Footer>
      </Router>
      
  );
}

export default App;
