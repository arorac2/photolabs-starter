import React, { useCallback, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFavorite, handleFavoriteClick }) => {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleFavoriteClick}>
        <FavIcon width={20} height={17} fill={isFavorite ? 'red' : 'transparent'} />
      </div>
    </div>
  );
};

export default PhotoFavButton;