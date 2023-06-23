import React from "react";
import { useState } from "react";
import useApplicationData from "./hooks/useApplicationData";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "./components/TopNavigationBar";
import "./App.scss";
import TopicList from "./components/TopicList";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";


const App = () => {
  const {
    favoritePhotos,
    notificationCount,
    selectedPhoto,
    setFavoritePhotos,
    setNotificationCount,
    closeModal,
    handlePhotoClick,
    handleFavoriteClick,
    photos,
    topics,
    fetchPhotosByTopic
  } = useApplicationData(); // Use the custom hook

  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="App">
      <TopNavigationBar
        favoriteCount={favoritePhotos.length}
        favoritePhotos={favoritePhotos}
        notificationCount={notificationCount}
      />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        setFavoritePhotos={setFavoritePhotos}
        handleFavoriteClick={handleFavoriteClick}
        setNotificationCount={setNotificationCount}
        handlePhotoClick={handlePhotoClick}
      />
      <TopicList topics={topics} />

      {selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          closeModal={closeModal}
          similarPhotos={selectedPhoto.similar_photos}
          handleFavoriteClick={handleFavoriteClick}
          setFavoritePhotos={setFavoritePhotos}
          favoritePhotos={favoritePhotos}
          setNotificationCount={setNotificationCount}
          handlePhotoClick={handlePhotoClick}
          photosData={photos}


        />
      )}
    </div>
  );
};

export default App;