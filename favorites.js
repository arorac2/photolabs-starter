
import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (photoId) => {
    setFavorites((prevFavorites) => [...prevFavorites, photoId]);
  };

  const removeFromFavorites = (photoId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== photoId));
  };

  const isFavorite = (photoId) => {
    return favorites.includes(photoId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
