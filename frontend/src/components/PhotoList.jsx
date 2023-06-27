import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

/* 
* Props:  photos: an array of photo objects with included properties. 
* favoritePhotos: an array of photoID's,
* handlePhotoClick, handleFavoriteClick: handles favorited photos, and button click
* Purpose: PhotoList takes a bunch of photoListItems and displays the accordingly.
* Displays images, as well as image information and whether or not it has been favorited.
*/

const PhotoList = ({ photos, favoritePhotos, handlePhotoClick, handleFavoriteClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
          isFavorite={favoritePhotos.includes(photo.id)}
          handleFavoriteClick={handleFavoriteClick}
          handlePhotoClick={handlePhotoClick}
          topic={photo.topic_id}
          similar_photos={photo.similar_photos}
        />
      ))}
    </ul>)
}

PhotoList.defaultProps = {
  favoritePhotos: [],
  photos: [
    {
      "id": "1",
      "location": {
        "city": "Montreal",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
      },
      "user": {
        "id": "1",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    },
    {
      "id": "2",
      "location": {
        "city": "Toronto",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`
      },
      "user": {
        "id": "2",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    },
    {
      "id": "3",
      "location": {
        "city": "Ottawa",
        "country": "Canada"
      },
      "urls": {
        "full": `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
        "regular": `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`
      },
      "user": {
        "id": "3",
        "username": "exampleuser",
        "name": "Joe Example",
        "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
      }
    }
  ]

}

export default PhotoList