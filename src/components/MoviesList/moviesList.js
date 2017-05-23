import React from 'react';
import Item from './item'

const MoviesList = (props) => {
  return (
    <ul className="media-list">
      {props.moviesList.map((video) => {
        return <Item  video={video} key={video.etag} />
      })}
    </ul>
  )
}


export default MoviesList