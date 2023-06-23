import React from 'react';
import TopNavigationBar  from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import FavBadge from '../components/FavBadge';
import { useState } from 'react';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {

const [favoritePhotos, setFavoritePhotos] = useState([]);
const [selectedPhoto, setSelectedPhoto] = useState(null);


const handlePhotoFavorite = (photo) => {
  setFavoritePhotos((prevFavoritePhotos) => [...prevFavoritePhotos, photo]);
};

const handlePhotoClick = (photo) => {
  setSelectedPhoto( photo);
};

const closeModal = () => {
  setSelectedPhoto(null);
};

const isFavPhotoExist = favoritePhotos.length > 0;

return (
  <div>
    <TopNavigationBar favoritePhotos={favoritePhotos}  />
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