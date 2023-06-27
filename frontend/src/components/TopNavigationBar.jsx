import React from 'react';
import { useState } from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

/* 
* Props: favourites, notificationCount
* Purpose: Represents the top navigation bar, and displays a notification
* based on the favorites prop.  
*/

const TopNavigation = ({ favourites, notificationCount}) => {
  const [favoriteCount, setFavoriteCount] = useState(favourites ? favourites.length : 0);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <FavBadge count={favoriteCount} notificationCount={notificationCount} />
    </div>
  );
};

export default TopNavigation;