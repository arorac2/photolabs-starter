import { useState, useReducer } from "react";

/* Purpose of hook: Manages the application state using the useReducer */

/* Defines the initialState of the application  */
const initialState = {
  favoritePhotos: [],
  notificationCount: 0,
  selectedPhoto: null,
  selectedTopic: null,
  photos: [],
  topics: [],
};

/*
 * Handles state updates based on actions, uses switch statements to handle different
 * actions and update relavent state properties
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE_PHOTOS":
      return { ...state, favoritePhotos: action.payload };
    case "INCREMENT_NOTIFICATION_COUNT":
      return { ...state, notificationCount: state.notificationCount + 1 };
    case "SET_SELECTED_PHOTO":
      return { ...state, selectedPhoto: action.payload };
    case "SET_SELECTED_TOPIC":
      return { ...state, selectedTopic: action.payload };
    case "SET_PHOTOS":
      return { ...state, photos: action.payload };
    case "SET_TOPICS":
      return { ...state, topics: action.payload };

    default:
      return state;
  }
};

const fetchPhotosByTopic = (topicId) => {
  return fetch(`/api/topics/photos/${topicId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(`Error fetching photos for topic ${topicId}: ${error}`);
      return [];
    });
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModal = () => {
    dispatch({ type: "SET_SELECTED_PHOTO", payload: null });
  };

  const handlePhotoClick = (photo) => {
    dispatch({ type: "SET_SELECTED_PHOTO", payload: photo });
  };

  const handleFavoriteClick = (id) => {
    const { favoritePhotos } = state;
    if (favoritePhotos.includes(id)) {
      const updatedFavoritePhotos = favoritePhotos.filter(
        (photoId) => photoId !== id
      );
      dispatch({ type: "SET_FAVORITE_PHOTOS", payload: updatedFavoritePhotos });
    } else {
      const updatedFavoritePhotos = [...favoritePhotos, id];
      dispatch({ type: "SET_FAVORITE_PHOTOS", payload: updatedFavoritePhotos });
      dispatch({ type: "INCREMENT_NOTIFICATION_COUNT" });
    }
  };

  useState(() => {
    /*Fetch photos data*/
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PHOTOS", payload: data });
      })
      .catch((error) => {
        console.log("Error fetching photos data:", error);
      });

    /*Fetch topics data*/
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_TOPICS", payload: data });
      })
      .catch((error) => {
        console.log("Error fetching topics data:", error);
      });
  }, []);

  return {
    ...state,
    closeModal,
    handlePhotoClick,
    handleFavoriteClick,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;
