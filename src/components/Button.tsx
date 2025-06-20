interface ButtonProps {
  description: string;
  colour?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  count?: number;
}

export default function Button({
  description,
  colour = 'bg-blue-500',
  onClick,
  count,
}: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-white px-4 py-2 rounded ${colour} m-2 shadow-lg hover:opacity-70 transition duration-300`}
      >
        {description} {count ? `(${count})` : null}
      </button>
    </div>
  );
}
