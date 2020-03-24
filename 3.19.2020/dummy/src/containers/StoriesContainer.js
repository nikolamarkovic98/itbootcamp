import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNews';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds,setStoryIds] = useState([])
  const [num, setNum] = useState(20)

  useEffect(() => {
    getStoryIds().then(dunja => setStoryIds(dunja))
  }, [])

  // useEffect waits ...

  return (
    <div>
        <button onClick={e => {setNum(num+10)}}>+</button>
        <button onClick={e => {setNum(num-10)}}>-</button>
        <div className="flex">
          {storyIds.slice(0,num).map(storyId => <Story storyId={storyId} key={storyId}/>)}
        </div>
    </div>
  )
}