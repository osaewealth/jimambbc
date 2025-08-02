import React, { useEffect } from 'react';

type ImageModalProps = {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, onClose }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt="Full View"
          className="max-w-screen-md max-h-[90vh] object-contain rounded-lg shadow-lg transition duration-300"
        />

        {/* Optional Caption */}
        <div className="text-center text-white mt-2 text-sm">
          Click anywhere or press <kbd>Esc</kbd> to close
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
