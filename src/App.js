import React from 'react';
import './App.css';
import { FooterContainer } from './component/main/footer/footer'
import Navbar from './component/main/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/services' component={Services} />
                <Route path='/contact-us' component={Contact} />
                <Route path='/sign-up' component={SignUp} />
            </Switch>
            <FooterContainer/>
        </Router>
    );
}

export default App;
