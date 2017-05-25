import React from 'react'
import '../../styles/style.css'
const Detail = ({params}) => {
  let url = `https://www.youtube.com/embed/${params.videoId}`;
  return (
    <div className="video-details">
      <iframe src={url}></iframe>
    </div>
  );
}

export default Detail;