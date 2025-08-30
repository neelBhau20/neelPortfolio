import React from 'react';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) {
    return null;
  }

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div 
        className="bg-slate-800 rounded-lg p-8 border border-slate-700 shadow-2xl shadow-emerald-500/10 w-full max-w-md animate-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title" className="text-2xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-400 mb-8">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-600 text-gray-300 rounded-md hover:bg-slate-700 font-semibold transition-all duration-300"
            aria-label="Cancel download"
          >
            No
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 glow-on-hover"
            aria-label="Confirm download"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;