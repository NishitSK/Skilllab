import React from 'react';
import { Link } from 'react-router-dom';
import chococake from '../assets/chococake.jpg';
import bluecake from '../assets/bluecake.jpg';
import straw from '../assets/straw.jpg';
import './Home.css';

const featuredCakes = [
  { id: 1, name: 'Chocolate Delight', description: 'A rich chocolate cake perfect for any occasion.', image: chococake },
  { id: 2, name: 'Blue Delight', description: 'A blue surprise that awaits you.', image: bluecake },
  { id: 3, name: 'Strawberry Bliss', description: 'A fresh strawberry cake with a smooth cream filling.', image: straw },
];

export default function Home() {
  return (
    <div className="home">
      <section className="welcome-section">
        <h1>Welcome to Our Cake Shop!</h1>
        <p>Discover delicious cakes for every occasion!</p>
        <div className="browse-cakes-box">
          <Link to="/cake" className="btn">Browse Cakes</Link>
        </div>
      </section>

      <section className="featured-cakes">
        <h2>Featured Cakes</h2>
        <div className="cake-list">
          {featuredCakes.map(cake => (
            <div key={cake.id} className="cake-card">
              <img src={cake.image} alt={cake.name} />
              <h3>{cake.name}</h3>
              <p>{cake.description}</p>
              <Link to={`/cake/${cake.id}`} className="btn">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
