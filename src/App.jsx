import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listmoves from "./pages/Listmoves";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WatchMoves from "./components/WatchMoves";
import Listmovies from "./components/Listmovies";
import Score from "./pages/Score";
import Login from "./pages/Login";
import Search from "./components/Search";
import Loding from "./components/Loding";
import ErrorMessage from "./components/ErrorMessage";
import { useEffect, useState } from "react";
import Scores from "./components/Scores";

const KEY = "5dcb5fd5";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handelSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handelAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handelDeletWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      async function fetchedMovie() {
        try {
          setIsLoding(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok)
            throw new Error("Somthin went wrong with fetching movies");
          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie is not Found");

          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoding(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchedMovie();
    },
    [query]
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <Home>
              <Header />
              <Search query={query} setQuery={setQuery} movies={movies} />
              {isLoding && <Loding />}
              {!isLoding && !error && (
                <WatchMoves movies={movies} ocSelectMovie={handelSelectMovie} />
              )}
              {error && <ErrorMessage message={error} />}
            </Home>
          }
        />
        <Route
          path="/move"
          element={
            <Listmoves>
              <Listmovies
                isLoding={isLoding}
                selectedId={selectedId}
                onHandelAddWatched={handelAddWatched}
                watched={watched}
              />
            </Listmoves>
          }
        />
        <Route
          path="/score"
          element={
            <Score>
              <Scores
                watched={watched}
                movies={movies}
                onDeletWatched={handelDeletWatched}
              />
            </Score>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
