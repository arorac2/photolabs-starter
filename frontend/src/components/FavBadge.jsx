import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';



export const FavBadge = ({ isFavPhotoExist, notificationCount }) => {

  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill={notificationCount > 0 ? 'blue' : 'red'} />
      {isFavPhotoExist }
      {!isFavPhotoExist}
    </div>
  ) 
};

export default FavBadge;