function Loding() {
  return (
    <div className="bg-slate-800 w-full  flex items-center justify-center pb-20">
      <div className="spinner  ">
        <h2>Loding </h2>
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
    </div>
  );
}

export default Loding;
