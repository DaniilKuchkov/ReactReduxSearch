import React from 'react'

const Detail = ({params}) => {
  let url = `https://www.youtube.com/embed/${params.videoId}`;
  return (
    <div className="embed-responsive embed-responsive-4by3">
      <iframe className="embed-responsive-item" src={url}></iframe>
    </div>
  );
}

export default Detail;