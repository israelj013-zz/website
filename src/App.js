import React from 'react';
import Header from './Components/Layout/Header'
import Projects from './Components/pages/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
      </div>
      <Route exact path="/"></Route>
      <Route exact path="/projects" component ={Projects}>

      </Route>
    </Router>
    
  );
}

export default App;
