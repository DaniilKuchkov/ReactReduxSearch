import React from 'react';
import { Link } from 'react-router';


const Item = ({video}) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;
  const videoId = video.id.videoId;

  return (
    <li className="item" >
        <Link to={`/movies/${videoId}`}>
          <img  src={imageUrl} alt="{title}" />
          <h5>{snippet.title}</h5>
        </Link>
    </li>
  )
}

export default Item