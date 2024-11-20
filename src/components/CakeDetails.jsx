import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import chococake from '../assets/chococake.jpg';
import bluecake from '../assets/bluecake.jpg';
import straw from '../assets/straw.jpg';
import surprise from '../assets/surprise.jpg';
import orange from '../assets/orange.jpg';
import whatisthis from '../assets/whatisthis.jpg';
import './CakeDetails.css'
import './Cart.css';

const cakesList = [
  { id: 1, name: 'Chocolate Delight', description: 'A rich chocolate cake perfect for any occasion.', ingredients: 'Chocolate, Butter, Eggs, Flour, Sugar, Cocoa', image: chococake },
  { id: 2, name: 'Blue Delight', description: 'A blue surprise that awaits you.', ingredients: 'Blueberry, Butter, Eggs, Flour, Sugar, Vanilla', image: bluecake },
  { id: 3, name: 'Strawberry Bliss', description: 'A fresh strawberry cake with a smooth cream filling.', ingredients: 'Strawberries, Cream, Sugar, Eggs, Flour', image: straw },
  { id: 4, name: 'Gâteau Cafard', description: 'A cake for a lot of protein', ingredients: 'A lot of protein from a fairy available resource', image: surprise },
  { id: 5, name: 'Orange Cake', description: 'A fresh cake with lots of vitamin C.', ingredients: 'Oranges, Flour, Eggs, Sugar', image: orange },
  { id: 6, name: 'Warai Keeki', description: 'A cake of Japanese origins some find it tasty.', ingredients: 'I don’t know who made this; they will be soon fired from our company, so please stop ordering it.', image: whatisthis },
];

export default function CakeDetails({ isLoggedIn, cart, setCart }) {
  const { id } = useParams();
  const cake = cakesList.find(cake => cake.id === parseInt(id));

  if (!cake) {
    return <h2>Cake not found</h2>;
  }

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    setCart([...cart, cake]);
    alert(`${cake.name} added to cart!`);
  };

  return (
    <div className="cake-details">
      <h2>{cake.name}</h2>
      <img src={cake.image} alt={cake.name} />
      <p>{cake.description}</p>
      <p><strong>Ingredients:</strong> {cake.ingredients}</p>
      {isLoggedIn ? (
        <button onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <p>You need to <a href="/login">login</a> to add items to your cart.</p>
      )}
    </div>
  );
}
