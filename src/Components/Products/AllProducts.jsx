import React from 'react'
import ProductPage from './ProductPage';
const products = [
    {
      image: 'drnklogo.png',
      heading: 'Product 1',
      description: 'This is the first product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 2',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 3',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 4',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 5',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 6',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 7',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 8',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 9',
      description: 'This is the second product.',
    },
    {
      image: 'drnklogo.png',
      heading: 'Product 10',
      description: 'This is the second product.',
    },
    // and so on, up to 10 products
  ];

const AllProducts = () => {
  return (
<>
<div>
    <h1>My Component</h1>
    <ProductPage products={products} />
  </div>
</>
  )
}

export default AllProducts
