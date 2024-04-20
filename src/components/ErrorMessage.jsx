function ErrorMessage({ message }) {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center bg-slate-800">
      <h1 className="text-2xl text-white font-bold">⛔ {message}</h1>
    </div>
  );
}

export default ErrorMessage;
