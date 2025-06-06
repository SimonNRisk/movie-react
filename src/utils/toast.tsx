import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseOptions: ToastOptions = {
  position: 'top-right',
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export function showAddFavouriteToast(movieTitle?: string) {
  toast.success(`⭐ Added${movieTitle ? `: ${movieTitle}` : ''}`, {
    ...baseOptions,
    autoClose: 1000,
    icon: () => <span>🎬</span>,
  });
}

export function showRemoveFavouriteToast(movieTitle?: string) {
  toast.error(`❌ Removed${movieTitle ? `: ${movieTitle}` : ''}`, {
    ...baseOptions,
    autoClose: 1000,
    icon: () => <span>🗑️</span>,
  });
}
