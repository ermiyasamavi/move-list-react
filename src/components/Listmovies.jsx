import { useEffect, useState } from "react";

import StarRaiting from "./StarRaiting";
import Loding from "./Loding";
import { Link } from "react-router-dom";

const KEY = "5dcb5fd5";
function Listmovies({ watched, selectedId, onHandelAddWatched }) {
  const [movies, setMove] = useState({});
  const [userRating, setUserRating] = useState(0);
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const {
    Title: title,
    Runtime: runtime,
    Actors: actors,
    Year: year,
    imdbRating,
    Released: released,
    Director: director,
    Genre: genre,
    Poster: poster,
    Plot: plot,
  } = movies;

  function handelAdd() {
    const newWatchedMovies = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split("").at(0)),
      userRating,
    };
    onHandelAddWatched(newWatchedMovies);
  }

  useEffect(
    function () {
      async function getMovieDataList() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMove(data);
      }
      getMovieDataList();
    },
    [selectedId]
  );
  return (
    <div className="w-full h-full py-20 px-10 flex   flex-col md:flex-row md:justify-between gap-4 md:gap-12 bg-slate-900 ">
      {selectedId ? (
        <>
          <div className=" w-full md:w-1/2 ">
            <div className="w-full h-32 md:h-52 flex  items-center gap-2 md:gap-8 bg-slate-800 rounded-md">
              <img
                src={poster}
                alt={`${poster} of poster`}
                className="w-24 h-28 md:w-48 md:h-52 object-contain	"
              />
              <div className="flex md:flex-col items-center md:justify-center md:w-96 py-2 md:py-4 gap-14 md:gap-6">
                <div>
                  <h3 className="text-base md:text-2xl	md:font-bold	text-white pb-2">
                    {title}
                  </h3>

                  <p className=" text-sm md:text-xl text-white">
                    <span>
                      {released} &bull; {runtime}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row  gap-2  md:gap-10 items-center">
                  <p className="text-sm md:text-xl text-white">{genre}</p>
                  <p className=" text-sm  md:text-xl text-white">
                    <span>⭐</span>
                    {imdbRating} IMDB rating
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="full md:w-1/2 h-36 pt-10 md:pt-0 flex flex-row md:items-center md:flex-col gap-4 md:gap-8 ">
            <div className="w-1/2 flex flex-col gap-5">
              <p className=" text-sm md:text-xl text-white">
                <em>{plot}</em>
              </p>
              <p className="text-sm md:text-xl text-white">
                Starring : {actors}
              </p>
              <p className="text-sm md:text-xl text-white">
                Director by {director}
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-8 w-1/2 md:w-80 bg-slate-800 mt-2 md:mt-4 p-3">
              {!isWatched ? (
                <>
                  <StarRaiting
                    maxRatind={10}
                    rating={userRating}
                    setRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <Link to="/score" className="w-full ">
                      <button
                        className="bg-indigo-700 text-white w-full py-2 text-sm md:text-2xl rounded-xl"
                        onClick={handelAdd}
                      >
                        +Add To List
                      </button>
                    </Link>
                  )}{" "}
                </>
              ) : (
                <p className="flex items-center text-white text-2xl">
                  You rated with Move🤔
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-white text-2xl flex items-center w-full h-full justify-center">
          🤷‍♀️ NOT MOVIES HERE YET
        </h2>
      )}
    </div>
  );
}

export default Listmovies;
