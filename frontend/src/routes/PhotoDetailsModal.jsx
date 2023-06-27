import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';

/*
* Props: closeModal, selectedPhoto, isFavorite, handleFavoriteClick, setFavoritePhotos, setNotificationCount, favoritePhotos, handlePhotoClick
* Purpose: Represents a modal that displays detailed information about a selected photo.
* It includes the photo image, favorite icon, and a list of similar photos.
*/

export const PhotoDetailsModal = ({ closeModal, selectedPhoto, handleFavoriteClick, setFavoritePhotos, setNotificationCount, favoritePhotos, handlePhotoClick }) => {
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={closeModal} >
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {selectedPhoto && (
        <div className="photo-details-modal--content">
          <div className='photolist-main' >
            <img src={selectedPhoto.imageSource} alt="Selected Photo" />
            <div
              className={`favorite-icon ${selectedPhoto.isFavorite ? 'active' : ''}`}
            >
              <PhotoFavButton isFavorite={selectedPhoto.isFavorite} fill={selectedPhoto.isFavorite ? 'red' : 'transparent'}
                handleFavoriteClick={() => handleFavoriteClick(selectedPhoto.id)}
              />
            </div>
          </div>
          <span className='tag'> Similar Photos</span>
          <div className='photolist-similar'>
            <PhotoList photos={selectedPhoto.similar_photos}
              setFavoritePhotos={setFavoritePhotos}
              handleFavoriteClick={handleFavoriteClick}
              setNotificationCount={setNotificationCount}
              favoritePhotos={favoritePhotos}
              handlePhotoClick={handlePhotoClick}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoDetailsModal;