import { useState } from "react";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Scores({ watched, onDeletWatched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="w-full h-full px-20 md:px-32 flex flex-col  md:flex-row gap-2 md:gap-4">
      <div className=" w-full md:w-1/2  p-2  ">
        <div className="w-full h-32 flex flex-col justify-center items-center  gap-2 md:gap-4 bg-slate-800 rounded-md ">
          <h2 className="text-white md:text-xl md:font-semibold	">
            MOVIES YOUR WATCHED
          </h2>
          <div className="flex md:justify-around w-full text-white text-sm md:text-xl gap-3">
            <p>
              <span>🖥</span>
              <span>{watched.length} movies</span>
            </p>
            <p>
              <span>⭐</span>
              <span>{avgImdbRating}</span>
            </p>
            <p>
              <span>✨</span>
              <span>{avgUserRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{avgRuntime} min</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-48 md:w-1/2   flex items-center bg-slate-800 rounded-md relative">
        {watched?.map((movie) => {
          return (
            <div className="flex items-center">
              <div className="w-44">
                <button
                  className="absolute  text-xl right-1 w-8  bg-red-700 text-center rounded-sm cursor-pointer"
                  onClick={() => onDeletWatched(movie.imdbID)}
                >
                  X
                </button>
                <img
                  src={movie.poster}
                  alt={`${watched.title} poster`}
                  className="w-40 h-44 object-contain block"
                />
              </div>
              <div className="flex flex-col items-left gap-4 w-80">
                <h1 className="text-white text-xl  md:text-2xl md:font-bold">
                  {movie.title}
                </h1>
                <p className="text-white font-xl flex gap-8 ">
                  <span>⭐ {movie.imdbRating}</span>
                  <span>✨ {movie.userRating}</span>
                  <span> ⏳{movie.runtime}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Scores;
