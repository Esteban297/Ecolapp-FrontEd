import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './points.css';

const products = [
  {
    name: 'Comida saludable',
    description: 'Una selección de productos orgánicos y saludables.',
    points: 100,
    image: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'
  },
  {
    name: 'Kit de jardinería',
    description: 'Herramientas y semillas para empezar tu propio jardín.',
    points: 200,
    image: 'https://ae01.alicdn.com/kf/Hfbbf8e95bb544c5da1f46e8c9d66ee40X.jpg'
  },
  {
    name: 'Ropa ecológica',
    description: 'Ropa sostenible hecha con materiales reciclados.',
    points: 150,
    image: 'https://norvil-web.storage.googleapis.com/cms_multimedia/cms_medias/files/000/000/965/original/ropa-ecologica%281%29.jpg?1552560131'
  },
  
];

function Points() {
  const [points, setPoints] = useState(500);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [redeemedPoints, setRedeemedPoints] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleRedeemPoints = (event) => {
    event.preventDefault();
    if (!selectedProduct) {
      setErrorMessage('Por favor, selecciona un producto.');
      return;
    }
    if (points < selectedProduct.points) {
      setErrorMessage('No tienes suficientes puntos para canjear este producto.');
      return;
    }
    setPoints(points - selectedProduct.points);
    setRedeemedPoints(selectedProduct.points);
    setSelectedProduct(null);
    setErrorMessage(null);
  };

  return (
    <div className="Points">
    <Link to="/Home">Inicio</Link>

      <h1>Tus puntos: {points}</h1>
      {redeemedPoints && <h3>Has canjeado {redeemedPoints} puntos.</h3>}
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.points} puntos</p>
            <button onClick={() => handleSelectProduct(product)}>Canjear</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <form onSubmit={handleRedeemPoints}>
          <h2>Canjear {selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p>{selectedProduct.points} puntos</p>
          <div class="buttons">
          <button class="but" type="submit">Confirmar canje</button>
          <button class="but" type="button" onClick={() => setSelectedProduct(null)}>Cancelar</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Points;
