interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessPopup = ({ isOpen, onClose }: PopupProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-3xl p-8 shadow-lg max-w-md w-full transform transition-transform duration-300 ease-in-out">
        <h2 className="text-xl font-semibold text-[#505D90] mb-4">Success!</h2>
        <p className="text-gray-600 mb-6">
          Please check your email address for additional instructions
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup; 