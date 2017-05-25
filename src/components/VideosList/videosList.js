import React from 'react';
import Item from './item'

const VideosList = ({ videosList }) =>{
      return (
        <ul className="video-list">
          {videosList.map((video) => {
            return <Item  
              video={video} 
              key={video.etag} 
            />
          })}
        </ul>
    );
}
export default VideosList;