import React from 'react';
import { Link } from 'react-router';


const Item = ({video, onMovieChoose}) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;
  const videoId = video.id.videoId;

  return (
    <li className="media" onClick={() => onMovieChoose(video.id.videoId)}>
      <div className="media-left">
        <Link to={`/movies/${videoId}`}>
          <img className="media-object" src={imageUrl} alt="{title}" />
          <h5 className="media-heading">{snippet.title}</h5>
        </Link>
      </div>
    </li>
  )
}

export default Item