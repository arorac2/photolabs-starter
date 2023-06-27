import React from 'react';
import { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';

/*
* Purpose: Manages the state of favorite photos and the currently selected photo, and provides functions to handle favorite and click events
*/

const HomeRoute = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const handlePhotoFavorite = (photo) => {
    setFavoritePhotos((prevFavoritePhotos) => [...prevFavoritePhotos, photo]);
  };
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };
  const closeModal = () => {
    setSelectedPhoto(null);
  };
  const isFavPhotoExist = favoritePhotos.length > 0;

  return (
    <div>
      <TopNavigationBar favoritePhotos={favoritePhotos} />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        onPhotoFavorite={handlePhotoFavorite}
        onPhotoClick={handlePhotoClick}
      />
    </div>
  );
};
export default HomeRoute;