import React, { useState, useEffect } from 'react'
import { getStory, storyUrl } from '../services/hackerNews'

const mapTimeString = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} god`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} mes`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} dan/a`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} h`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} min`;
    }
    return `${Math.floor(seconds)} sec`;
  };

export const Story = ({storyId}) => {
    const [story,setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) // Lazy eval
    },[])

    return (
        <div className="box">
            <a href={story.url} target="_blank">
                <h3>{story.title}</h3>
            </a>
            <hr />
            <p>{story.by}</p>
            <p className="time">{mapTimeString(story.time)}</p>
        </div>
    )
}