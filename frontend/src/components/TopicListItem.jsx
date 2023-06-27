import React from 'react';
import '../styles/TopicListItem.scss'

/*
* Props: label - represents tshe label/title of the topic
* Purpose: Renders individual topic item with its label. 
* used BY TopicList to display the list of topics
*/

const TopicListItem = ({ label }) => {
  return (
    <p className="topic-list__item">
      {label}
    </p>
  )
}

TopicListItem.defaultProps = {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem