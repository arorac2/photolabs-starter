import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

/* 
* Props:  NotificiationCount, isFavPhotoExist
* Purpose: Indicates a notification if a photo is favorited by a user. 
* If a photo is favorited, a blue icon will appears on the 'favorites' heart badge.
*/

export const FavBadge = ({ isFavPhotoExist, notificationCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill={notificationCount > 0 ? 'blue' : 'red'} />
      {isFavPhotoExist}
      {!isFavPhotoExist}
    </div>
  )
};
export default FavBadge;