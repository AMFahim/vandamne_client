import React, { useRef, useEffect } from 'react';

interface UiModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const UiModal: React.FC<UiModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-[1000]">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black/40"></div>
            <div ref={modalRef} className="z-50 bg-white p-6 mx-2 md:mx-0 rounded-xl shadow">
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UiModal;
