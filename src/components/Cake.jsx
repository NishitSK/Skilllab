import React from 'react';
import { Link } from 'react-router-dom';
import chococake from '../assets/chococake.jpg';
import bluecake from '../assets/bluecake.jpg';
import straw from '../assets/straw.jpg';
import './cake.css'
import surprise from '../assets/surprise.jpg'
import orange from '../assets/orange.jpg'
import whatisthis from '../assets/whatisthis.jpg'

const cakesList = [
  { id: 1, name: 'Chocolate Delight', description: 'A rich chocolate cake perfect for any occasion.', image: chococake },
  { id: 2, name: 'Blue Delight', description: 'A blue surprise that awaits you.', image: bluecake },
  { id: 3, name: 'Strawberry Bliss', description: 'A fresh strawberry cake with a smooth cream filling.', image: straw },
  { id: 4, name: 'gâteau cafard', description: 'A Cake for a lot of protien', image: surprise },
  { id: 5, name: 'Orange Cake', description: 'A fresh cake with lots of vitamin C.', image: orange },
  { id: 6, name: 'Warai Keeki', description: 'A cake of japanese origins some find it tasty.', image: whatisthis },
];

export default function Cake() {
  return (
    <div className="cake-list">
      <h2>Our Cakes</h2>
    <div className="cake-items">
        {cakesList.map(cake => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <Link to={`/cake/${cake.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

