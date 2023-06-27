import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

/* 
* Props:  topics - contains an array of topics, handleTopicClick - handles topic when clicked
* Purpose: Renders a list of topics and handles the click event
* when a topic is clicked
*/

const TopicList = ({ topics, handleTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list" >
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          label={topic.title}
          onClick={() => handleTopicClick(topic.id)}
        />
      ))}
    </div>
  )
}

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
}
export default TopicList