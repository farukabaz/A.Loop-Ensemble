import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Pages/Home/Home';
import Summer from './Pages/Summer/Summer';
import Winter from './Pages/Winter/Winter';
import ScrollToTop from './components/ScrollToTop';
import OurTeam from './Pages/Winter/OurTeam';
import Instructions from './Pages/Winter/Instructions';
import Pay from './Pages/Winter/Pay'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/summer' component={Summer}/>
          <Route path='/winter' component={Winter}/>
          <Route path='/ourteam' component={OurTeam}/>
          <Route path='/pay' component={Pay}/>
          <Route path='/instructions' component={Instructions}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
