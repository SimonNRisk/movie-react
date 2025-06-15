import { AlertTriangle, Info, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type BannerType = 'success' | 'warning' | 'info';

type BannerProps = {
  title?: string;
  message?: string;
  type: BannerType;
};

type BannerConfig = {
  color: string;
  icon: LucideIcon;
};

const bannerStyleMap: Record<BannerType, BannerConfig> = {
  success: {
    color: 'bg-green-500 border-green-600',
    icon: CheckCircle,
  },
  warning: {
    color: 'bg-red-500 border-red-700',
    icon: AlertTriangle,
  },
  info: {
    color: 'bg-sky-400 border-sky-500',
    icon: Info,
  },
};

export default function Banner({ title, message, type }: BannerProps) {
  const { icon: Icon, color } = bannerStyleMap[type];

  return (
    <div
      className={`py-6 rounded-lg border border-2 text-left px-4 flex items-start gap-4 text-white ${color}`}
    >
      <Icon className="w-12 h-12 stroke-2" />
      <div>
        <h1 className="text-xl"> {title} </h1>
        <p> {message} </p>
      </div>
    </div>
  );
}
