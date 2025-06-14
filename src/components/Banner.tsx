type BannerProps = {
  title?: string;
  message?: string;
  className?: string;
};

export default function Banner({ title, message, className }: BannerProps) {
  return (
    <div className={className}>
      <h1 className="text-xl"> {title} </h1>
      <p> {message} </p>
    </div>
  );
}
