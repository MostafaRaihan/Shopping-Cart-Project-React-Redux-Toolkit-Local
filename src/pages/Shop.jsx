import React from 'react';
import items from '../item.json';  // fixed import
import ProductCard from '../components/ProductCard';
import './CSS/Shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="products">
        {items.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
