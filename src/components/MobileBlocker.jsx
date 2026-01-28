
const MobileBlocker = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8 text-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Desktop Access Only</h1>
        <p className="text-gray-600 mb-6">
          This application is designed for large screens to ensure the best experience. 
          Please open this link on your desktop or laptop computer.
        </p>
      </div>
    </div>
  );
};

export default MobileBlocker;