// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      })
      .catch((err) => {
    console.error("Error fetching the data:", err);
    setDogImage(null);  
    });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  return (
    <div>
    {dogImage ? (
   <img src={dogImage} alt="A Random Dog" />
  ) : (
    <p>Loading...</p>
  )}
  </div>
);
}

export default App;