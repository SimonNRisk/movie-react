import { Heart } from 'phosphor-react';

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  favourited: boolean;
  className?: string;
};

export default function FavouriteButton({ onClick, className, favourited }: Props) {
  const heartClass = favourited ? 'text-red-500' : 'text-white';
  return (
    <button onClick={onClick} className={`hover:scale-110 transition-transform ${className}`}>
      <Heart size={48} className={`${heartClass} transition-colors`} weight="fill" />
    </button>
  );
}
