type BannerProps = {
  title?: string;
  message?: string;
  className?: string;
};

export default function Banner({ title, message, className }: BannerProps) {
  return (
    <div>
      <p> {title} </p>
      <p className={className}> {message} </p>
    </div>
  );
}
