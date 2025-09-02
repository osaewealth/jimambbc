// src/components/ImageModal.tsx

import React, { useEffect, useCallback } from 'react';

type ImageModalProps = {
  isOpen: boolean;
  images: string[];
  caption: string;
  onClose: () => void;
  currentImageIndex: number;
  onNext: () => void;
  onPrev: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  images,
  caption,
  onClose,
  currentImageIndex,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'ArrowRight' && images.length > 1) {
        onNext();
      } else if (event.key === 'ArrowLeft' && images.length > 1) {
        onPrev();
      } else if (event.key === 'Escape') {
        onClose();
      }
    },
    [isOpen, images.length, onNext, onPrev, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col">
        <button
          className="absolute top-3 right-3 text-white text-3xl z-10 p-2 rounded-full hover:bg-black/20 transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {images.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl z-10 p-2 rounded-full hover:bg-black/20 transition-colors"
              onClick={onPrev}
              aria-label="Previous image"
            >
              &#8249; {/* Left arrow */}
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl z-10 p-2 rounded-full hover:bg-black/20 transition-colors"
              onClick={onNext}
              aria-label="Next image"
            >
              &#8250; {/* Right arrow */}
            </button>
          </>
        )}
        
        {/* === START OF THE FIX === */}
        <div className="flex-grow flex items-center justify-center bg-gray-900 overflow-hidden relative">
          {/* This is the new container for the image */}
          <div className="w-full relative" style={{ paddingTop: '75%' /* This creates a 4:3 aspect ratio */ }}>
            <img
              src={images[currentImageIndex]}
              alt={caption}
              className="absolute inset-0 w-full h-full object-cover"
              loading='lazy'
            />
          </div>
        </div>
        {/* === END OF THE FIX === */}

        <div className="p-4 bg-gray-800 text-white text-center">
          <p className="text-xl font-semibold">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;