import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

/*
* Props:  id, location, imageSource, username, profile, isFavorite, handleFavoriteClick, handlePhotoClick, similar_photos
* All of the props work together to provide the data to interact with the 
* photo item.
* Purpose: Renders the individual photo item with the associated information,
* and handling the interactions (such as, favoriting an image).
*/

const PhotoListItem = ({ id, location, imageSource, username, profile, isFavorite, handleFavoriteClick, handlePhotoClick, similar_photos }) => {
  const handleClick = () => {
    handlePhotoClick({ id, location, imageSource, username, profile, isFavorite, similar_photos });
  };
  return (
    <div className={`photo-list-item ${isFavorite ? 'active' : ''}`}>
      <PhotoFavButton isFavorite={isFavorite} handleFavoriteClick={() => handleFavoriteClick(id)} />
      <img src={imageSource} alt="Photograph" onClick={handleClick} />
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