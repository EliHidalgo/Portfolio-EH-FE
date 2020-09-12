import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Navbar from './Components/Navbar';
//import Home from './Components/Home';
//import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <Home/>
       <AboutMe/>
       <Projects/>
       <Skills/>
       <Contact/>
       <Footer/>



      {/* <BrowserRouter>
        
         
          <Switch>        
            <Route path = '/aboutme' component = {withRouter(AboutMe)} />
            <Route path = '/projects' component = {withRouter(Projects)} />
            <Route path = '/skills' component = {withRouter(Skills)} />
            <Route path = '/contact' component = {withRouter(Contact)} />
            <Route path = '/' component = {withRouter(Home)} />
          </Switch>
        
   
      </BrowserRouter> */}
     
    </div>
  );
}

export default App;
