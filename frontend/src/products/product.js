import React from 'react'


const Product = ({ product }) => {


	return(
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
	)
}