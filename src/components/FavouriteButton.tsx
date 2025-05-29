import { Heart } from "phosphor-react";

type Props = {
  onClick: () => void;
  favourited: boolean;
  className?: string;
};

export default function FavouriteButton({
  onClick,
  className,
  favourited,
}: Props) {
  const heartClass = favourited ? "text-red-500" : "text-gray-400";
  return (
    <button
      onClick={onClick}
      className={`hover:scale-110 transition-transform ${className}`}
    >
      <Heart
        size={24}
        className={`${heartClass} transition-colors`}
        weight="fill"
      />
    </button>
  );
}
