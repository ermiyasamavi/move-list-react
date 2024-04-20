function Sinup() {
  return (
    <div className="border border-white w-1/2 h-auto mt-5 bg-slate-50 shadow shadow-2xl shadow-slate-600 p-4 md:p-8 flex items-center flex-col">
      <h1 className="text-lg md:text-2xl md:font-bold">
        Wellcom To World Movie
      </h1>
      <div
        className=" w-full h-full flex flex-col gap-5  pt-10 md:justify-around     
"
      >
        <input
          type="text"
          placeholder="Email ..."
          className="p-3 md:py-4 md:px-6 border border-neutral-300 rounded-2xl	md:text-xl md:font-medium text-slate-700 cursor-pointer"
        />
        <input
          type="text"
          placeholder="UserName ..."
          className="p-3 md:py-4 md:px-6 border border-neutral-300 rounded-2xl	md:text-xl md:font-medium text-slate-700 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Password ..."
          className="p-3 md:py-4 md:px-6 border border-neutral-300 rounded-2xl md:text-xl md:font-medium text-slate-700 cursor-pointer"
        />
        <button className=" border border-neutral-300 md:w-48 md:text-2xl hover:bg-slate-400 hover:text-white rounded-xl md:py-2">
          Login
        </button>
      </div>
    </div>
  );
}

export default Sinup;
