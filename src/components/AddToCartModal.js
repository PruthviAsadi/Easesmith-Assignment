import React from 'react';
import './AddToCartModal.css';

const AddToCartModal = ({ product, closeModal }) => {
  if (!product) return null;
  
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Product Added to Cart!</h2>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
