// CardComponent.jsx
import React from 'react';
import './cards.css'; // Import the CSS file

const Cards = ({item}) => {
  return (
    <div className="card">
      <figure><img src={item.image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-end">
          <div className="badge1 badge-outline">${item.price}</div> 
          <div className="badge1 badge-outline">Buy Now</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
