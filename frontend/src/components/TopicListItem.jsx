import React from 'react';
import '../styles/TopicListItem.scss'

/*
* Props: label - represents tshe label/title of the topic
* Purpose: Renders individual topic item with its label. 
* used BY TopicList to display the list of topics
*/

const TopicListItem = ({ label, handleTopicClick, id }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log("ID IS: ",id)
    handleTopicClick(id); // Invoke the onClick prop
  };

  return (
    <button className="topic-list__item" 
    onClick={handleClick}>
      {label}
    </button>
  )
}

TopicListItem.defaultProps = {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem