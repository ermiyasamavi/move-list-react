import { Link } from "react-router-dom";

function WatchMoves({ movies, ocSelectMovie }) {
  return (
    <div className="bg-slate-800 w-full h-auto flex flex-col items-center">
      <div className="w-3/4 h-auto mt-20 grid grid-cols-2 gap-4  justify-center items-center pb-5 md:pb-10 ">
        {movies?.map((movie) => (
          <div
            key={movie.imdbID}
            className="flex  items-center  gap-2 md:gap-4 w-full bg-slate-900 hover:bg-slate-800 rounded-xl   border border-neutral-500 cursor-pointer relative"
            onClick={() => ocSelectMovie(movie.imdbID)}
          >
            <img
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              className="w-20 h-24 object-contain   md:w-44 md:h-48 object-contain "
            />
            <div className=" flex flex-col items-center justufy-center gap-1 md:gap-4">
              <h3 className="text-sm md:text-lg md:font-semibold text-white py-1">
                {movie.Title}
              </h3>
              <h2 className="text-white flex gap-2">
                <span>📅</span>
                {movie.Year}
              </h2>
            </div>
            <Link to="/move">
              <button className="md:w-14 md:h-8 text-white text-xs md:text-sm bg-blue-700 border-sky-800 rounded-sm absolute right-2 bottom-2">
                Mor Data
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchMoves;
