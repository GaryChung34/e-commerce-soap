import React from 'react'


const Home = () => {



	return (
		<div className='grid'>
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
  	</div>
  )
}

export default Home