import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';
import './ProductList.css';

const products = [
  { id: 1, name: 'Monstera Deliciosa', price: 29.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Fiddle Leaf Fig',price: 40, image: 'https://media.istockphoto.com/id/1299094421/photo/ficus-lirata-in-wickr-pot-on-wooden-table.jpg?s=2048x2048&w=is&k=20&c=8fddl5Y19IWg14VyFO5d1jWlVnVyesAXM5sIchqykT8=' },
  { id: 3, name: 'Snake Plant',price: 39, image: 'https://media.istockphoto.com/id/1302108206/photo/sansevieria-mother-in-laws-tongue-snake-plant-plant-on-a-wooden-background.jpg?s=2048x2048&w=is&k=20&c=7HyYKXb7CuFkdJwz0-rQ0l4QjX7uOQ_nGsqWu-epiQY=' },
  { id: 4, name: 'Aloe Vera', price: 22,image: 'https://images.unsplash.com/photo-1613372978247-de50228e8033?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Spider Plant', price: 45,image: 'https://media.istockphoto.com/id/1403039215/photo/chlorophytum-comosum-houseplant-in-a-decorative-pot.jpg?s=2048x2048&w=is&k=20&c=PQMurpdPzECk3LewB0dx_c_VU-y-6cMCmQ_2J19fx3E=' },
  { id: 6, name: 'Peace Lily',price: 19, image: 'https://media.istockphoto.com/id/1225566737/photo/air-puryfing-house-plants-in-home-concept-spathiphyllum-are-commonly-known-as-spath-or-peace.jpg?s=2048x2048&w=is&k=20&c=89gD3vKBE9j-mDI_Ns_sAEU9ujjmNa4-rWZMe5w20ZY=' },
  { id: 7, name: 'Pothos',price: 62, image: 'https://media.istockphoto.com/id/1310035835/photo/tropical-epipremnum-aureum-marble-queen-pothos-houseplant-with-white-variegation.jpg?s=2048x2048&w=is&k=20&c=oR2P1qGVxbUbDybSsBUwIqDjyrGS7jHU4AFWfhMIRfk=' },
  { id: 8, name: 'ZZ Plant',price: 35, image: 'https://plus.unsplash.com/premium_photo-1675864662842-6efc0ef31f67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 9, name: 'Rubber Plant',price: 46, image: 'https://media.istockphoto.com/id/1294242954/photo/sunshine-on-the-potted-ficus-elastica-interior-ornamental-plant-rubber-fig.jpg?s=2048x2048&w=is&k=20&c=pnUD9eDc2nsufWohs9MZjuWmMPiM8fbaros5hNgSzUA=' },
  { id: 10, name: 'Bird of Paradise',price: 27, image: 'https://media.istockphoto.com/id/1171494620/photo/bright-living-room-with-large-houseplant-on-wooden-floor-popular-house-plant.jpg?s=2048x2048&w=is&k=20&c=CF8WpmcM7lOkDhQH66pzSP4x9lKK-ds9O_ln9w_0q8U=' }
];

const ProductList = () => {
  const [cartProduct, setCartProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const addToCart = (product) => {
    setCartProduct(product);
  };

  const closeModal = () => {
    setCartProduct(null);
  };

  return (
    <div className="product-list-page">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="product-grid">
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
      {cartProduct && <AddToCartModal product={cartProduct} closeModal={closeModal} />}
    </div>
  );
};

export default ProductList;
