import React from 'react';
import '../styles/TopicListItem.scss'

const TopicListItem = ({label}) => {
  return(
  <p className="topic-list__item">
   {label}
  </p>
)}

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem