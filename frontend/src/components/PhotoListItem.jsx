import { useState } from 'react';
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = ({ id, location, imageSource, username, profile, isFavorite,handleFavoriteClick, handlePhotoClick, similar_photos  }) => {
  const handleClick = () => {
    handlePhotoClick({ id, location, imageSource, username, profile, isFavorite, similar_photos});
  };
  return (
    <div className={`photo-list-item ${isFavorite ? 'active' : ''}`}>
      <PhotoFavButton isFavorite={isFavorite} handleFavoriteClick={() => handleFavoriteClick(id)} />
      <img src={imageSource} alt="Photograph" onClick={handleClick}/>
      <img className='profile' src={profile} alt="Profile" />
      <h2>{username}</h2>
      <p>{location.city}, {location.country}</p>  
    </div>
  );
};


PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem;