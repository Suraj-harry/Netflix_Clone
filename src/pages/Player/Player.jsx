import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { TMDB_Access_Key } from '../../config'

const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_Access_Key}`
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data => {
        const youtubeVideo = data.results.find(
          video => video.site === "YouTube"
        );
        if (youtubeVideo) {
          setApiData(youtubeVideo);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>

      <img
        src={back_arrow_icon}
        alt="back"
        onClick={() => navigate(-1)}
      />

      <iframe
        src={`https://www.youtube.com/embed/${apiData?.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{apiData?.published_at?.slice(0,10)}</p>
        <p>{apiData?.name}</p>
        <p>{apiData?.type}</p>
      </div>

    </div>
  )
}

export default Player