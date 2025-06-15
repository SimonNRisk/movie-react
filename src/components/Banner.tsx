type BannerType = 'success' | 'warning' | 'info';

type BannerProps = {
  title?: string;
  message?: string;
  type: BannerType;
};

const bannerStyleMap: Record<BannerType, string> = {
  success: 'bg-green-600 border-green-600',
  warning: 'bg-yellow-400 border-yellow-600',
  info: 'bg-blue-400 border-blue-600',
};

export default function Banner({ title, message, type }: BannerProps) {
  const typeStyle = bannerStyleMap[type];
  return (
    <div className={`py-6 rounded-lg border border-2 ${typeStyle}`}>
      <h1 className="text-xl"> {title} </h1>
      <p> {message} </p>
    </div>
  );
}
