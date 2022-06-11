const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex p-5 space-x-3 bg-brand-500 rounded-full">
        <div className="w-2 h-2 bg-brand-800 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-brand-800 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-brand-800 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
