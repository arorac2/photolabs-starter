import React from 'react';
import { useState } from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

/* 
* Props: favourites, notificationCount
* Purpose: Represents the top navigation bar, and displays a notification
* based on the favorites prop.  
*/

const TopNavigation = ({ favourites, notificationCount, fetchPhotosByTopic, topics}) => {
  const [favoriteCount, setFavoriteCount] = useState(favourites ? favourites.length : 0);
  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <FavBadge count={favoriteCount} notificationCount={notificationCount} />
      <TopicList topics={topics} handleTopicClick={handleTopicClick} />
    </div>
  );
};

export default TopNavigation;