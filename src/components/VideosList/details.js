import React from 'react'
import '../../styles/style.css'
import { URL } from '../../const/consts'

const Detail = ({params}) => {
  return (
    <div className="video-details">
      <iframe src={`${URL}${params.videoId}`}></iframe>
    </div>
  );
}

export default Detail;