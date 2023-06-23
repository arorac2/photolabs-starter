import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import { useState } from 'react';

const TopNavigation = ({ favourites, notificationCount, topics }) => {
  const [favoriteCount, setFavoriteCount] = useState(favourites ? favourites.length : 0);
  const showNotification = Array.isArray(favourites) && favourites.length > 0;


  // Function to update the favorite count and trigger the notification
  const handleFavorite = () => {
    setFavoriteCount(prevCount => prevCount + 1);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <FavBadge count={favoriteCount} notificationCount={notificationCount} />
    </div>
  );
};

export default TopNavigation;