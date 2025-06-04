interface ButtonProps {
  description: string;
  colour: string;
}

export default function Button({ description, colour }: ButtonProps) {
  return (
    <div>
      <button className={`text-white px-4 py-2 rounded ${colour}`}>{description}</button>
    </div>
  );
}
