import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="">Simple Soap</a>
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
        <button className="button blue-button">About us</button>
        <button className="button blue-button">Products</button>
        <button className="button blue-button">Gallery</button>
        <button className="button blue-button">Blog</button>
      </div>

      <div className="center">
        <img src="//placehold.it/1200x600" />
      </div>

      <div className="heading">
        <h2>Favorites:</h2>
      </div>

      <div className="all-products">
        <div className="product">
          <img className="product-image" src="images/soap1.jpg" alt="soap1" />
          <h2>Soap 1</h2>
          <div>$ 45.00</div>
        </div>
        <div className="product">
          <img className="product-image" src="images/soap2.png" alt="soap2" />
          <h2>Soap 2</h2>
          <div>$ 60.00</div>
        </div>
        <div className="product">
          <img className="product-image" src="images/soap3.jpg" alt="soap3" />
          <h2>Soap 3</h2>
          <div>$ 70.00</div>
        </div>
        <div className="product">
          <img className="product-image" src="images/soap4.jpg" alt="soap4" />
          <h2>Soap 4</h2>
          <div>$ 50.00</div>
        </div>
      </div>
    </main>

    <footer className="footer">footer</footer>
  </div>
  );
}

export default App;
