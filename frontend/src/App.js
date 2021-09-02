import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Route, Link, Switch ,Redirect
  } from 'react-router-dom'

import Home from './screens/home.js'
import AboutUs from './screens/aboutUs.js'
import ProductsList from './screens/productsList.js'
import NaviBar from './components/naviBar.js'
import CartPage from './screens/cartPage.js'
import SignIn from './screens/signIn.js'
import ProductDetail from './screens/productDetail.js'
import SearchPage from './screens/searchPage.js'
import Register from './screens/register.js'
import ManageItem from './screens/manageItem.js'


function App() {
  return (
    <Router>
      <div className="grid-container">
      <NaviBar />

      <main className="main">
        <div className="center">
          <Link to="/">
            <img class="logo" src="images/logo-center.jpg" alt="logo-wide.jpg" />
          </Link>
        </div>
        <div className="center">
          <Link to='/aboutUs'>
            <button className="button blue-button">About us</button>
          </Link>
          <Link to='/productsList'>
            <button className="button blue-button">Products</button>
          </Link>
          <Link to='/manageItem'>
            <button className="button blue-button">News</button>
          </Link>
          <button className="button blue-button">Contact us</button>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/aboutUs' component={AboutUs} />
          <Route exact path='/productsList' component={ProductsList} />
          <Route exact path='/signIn' component={SignIn} />
          <Route exact path='/Cart' component={CartPage} />
          <Route exact path='/product/:productId' component={ProductDetail} />
          <Route exact path='/search/:searchString' component={SearchPage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/manageItem' component={ManageItem} />
          <Redirect to='/' />
        </Switch>
      </main>

      <footer className="footer">footer</footer>
    </div>
  </Router>
  );
}

export default App;
