import React, { useCallback, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

/*
* Props:  isFavorite, handleFavoriteClick
* Purpose: If the PhotoFavButton is clicked on an image, it will handle the click and
* add it to favorites accordingly. If favorited, heart will appear red, if not it will 
* appear transparent. 
*/

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