import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow = false, displayBackdrop = undefined }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/";

  const [trailerUrl, setrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

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
      <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">

          {movies!==undefined ? movies.map(

            (movie) => 
              (
                (isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                  <img
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    src={`${base_url}${isLargeRow ? ("w185/" + movie.poster_path) : ("w300/" + movie.backdrop_path)
                      }`}
                    alt={movie.name}
                  />
                
                )
            )
            :console.log(undefined)
            }
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    );
   
}

export default Row;
