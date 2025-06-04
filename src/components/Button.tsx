interface ButtonProps {
  description: string;
  colour: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ description, colour, onClick }: ButtonProps) {
  return (
    <div>
      <button onClick={onClick} className={`text-white px-4 py-2 rounded ${colour}`}>
        {description}
      </button>
    </div>
  );
}
