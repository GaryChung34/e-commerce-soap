import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSeedling } from '@fortawesome/free-solid-svg-icons'


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
          <div className="center">
            <img className="product-image" src="images/soap1.jpg" alt="soap1" />
          </div>
          <div style={{fontSize: '1.5rem'}}>Earthy Blend</div>
          <div>
            <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'gold'}} icon={faStar} />
            <FontAwesomeIcon style={{color: 'lightgray'}} icon={faStar} />
          </div>
          <div style={{textDecoration:'line-through'}}>$ 90.50</div>
          <div style={{color:'crimson', fontSize:'1.5rem', fontWeight:'900'}}>$ 45.90</div>
          <div style={{color:'lightgray'}}>
            <FontAwesomeIcon icon={faSeedling} />
            vanilla,&nbsp;
            <FontAwesomeIcon style={{color:'lightgray'}} icon={faSeedling} />
            basil
          </div>
        </div>

        {/*<div className="product">
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
        </div>*/}
      </div>
  	</div>
  )
}

export default Home