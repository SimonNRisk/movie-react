interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function Modal({ isOpen, onClose, title, message }: ModalProps) {
  if (!isOpen) return null;
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target == e.currentTarget) onClose();
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-black"
        >
          ×
        </button>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
}
