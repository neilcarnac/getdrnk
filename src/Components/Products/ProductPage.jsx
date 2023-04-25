import React from 'react';
import PropTypes from 'prop-types';
import './ProductPage.css';

const ProductPage = ({ products }) => {
  return (
    <div className="product-page">
      <center><h1>Products</h1></center>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.heading} />
            <h2>{product.heading}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductPage;
