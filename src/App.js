import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('');
  const [catImage, setCatImage] = useState('');

  // API 1: Obtener un dato random sobre gatitos
  const getCatData = async () => {
    try {
      const factResponse = await fetch('https://catfact.ninja/fact');
      const factData = await factResponse.json();
      setCatFact(factData.fact);


  // API 2: Obtener una imagen aleatoria del gatito
      const imageResponse = await fetch('https://api.thecatapi.com/v1/images/search');
      const imageData = await imageResponse.json();
      setCatImage(imageData[0].url); // La respuesta de la API es un array, obtenemos la primera imagen
    } catch (error) {
      console.error('Error al obtener la imagen de gato:', error);
    }
  };

  // Uso useEffect para obtener datos de ambas APIs al cargar el componente
  useEffect(() => {
    getCatData();
  }, []); // [] asegura que solo se ejecute cuando el componente se renderiza en la pantalla

  return (
    <div>
      {catFact && <p><strong>Fact:</strong> {catFact}</p>}
      {catImage && <img src={catImage} alt="foto random de gatito"/>}
      <button onClick={getCatData}>Learn More</button>
    </div>
  );
}

export default App;
