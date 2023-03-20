import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Banner() {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, []);


  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const opts = {
    height: "390",
    width: "100%",
    playVars: {
      autoplay: 1,
    }
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setrailerUrl("");
    }
    else {
      movieTrailer(movie?.title || movie?.original_title || movie?.name || "")
        .then((url) => {
          const urlName = new URLSearchParams(new URL(url).search)
          setrailerUrl(urlName.get("v"));
        })
        .catch((err) => {
          console.log("Error bola:", err);
        })

    }
  }

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={true}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            movies.map(movie => (
              <Link style={{ textDecoration: "none", color: "white" }} onClick={() => handleClick(movie)} >
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : "" || movie ? movie.title : "" || movie ? movie.name : ""}</div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview:"" }</div>
                </div>
              </Link>
            ))
          }
        </Carousel>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Banner;
