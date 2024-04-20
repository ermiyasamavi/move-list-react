function Search({ query, setQuery, movies }) {
  return (
    <div className="w-full flex items-center justify-center bg-slate-800 pt-20 md:pt-32 ">
      <div className="w-1/2 border border-gray-600	 py-2 px-3 flex justify-between items-center rounded">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search Movies ..."
          className="bg-slate-700 text-current  border-0 outline-none px-2 text-base md:text-xl  border border-teal-200 rounded-full bg-slate-700 w-1/2 md:w-3/4 py-1 md:py-2 px-2  md:px-3 text-white"
        />
        <h1 className="text-sm md:text-lg font-semibold text-green-600	">
          Found{" "}
          <strong className="text-white mx-1 md:mx-2">{movies.length}</strong>
          results
        </h1>
      </div>
    </div>
  );
}

export default Search;
