export const Tabs = () => {
  return (
    <div className="bg-white px-6 flex gap-8 border-b border-gray-200">
      <button className="py-4 relative text-blue-500 font-medium">
        Favoritos
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
      </button>
      <button className="py-4 text-gray-500 font-medium hover:text-gray-700 transition-colors">
        Sala
      </button>
    </div>
  );
};
