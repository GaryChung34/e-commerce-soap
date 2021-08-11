import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Route, Link, Switch ,Redirect
  } from 'react-router-dom'

import Home from './screens/home.js'
import AboutUs from './screens/aboutUs.js'
import ProductsList from './screens/productsList.js'


function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">Simple Soap</Link>
          </div>
          <div className="header-link">
            <a href="">Cart</a>
            <a href="">Log in</a>
          </div>
        </header>

      <main className="main">
        <div className="center">
          <img src="images/logo-center.jpg" alt="logo-wide.jpg" />
        </div>
        <div className="center">
          <Link to='/aboutUs'>
            <button className="button blue-button">About us</button>
          </Link>
          <Link to='/productsList'>
            <button className="button blue-button">Products</button>
          </Link>
          <button className="button blue-button">News</button>
          <button className="button blue-button">Contact us</button>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutUs' component={AboutUs} />
          <Route exact path='/productsList' component={ProductsList} />
          <Redirect to='/' />
        </Switch>
      </main>

      <footer className="footer">footer</footer>
    </div>
  </Router>
  );
}

export default App;
