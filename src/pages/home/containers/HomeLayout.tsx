import { useSettings } from '@/stores/settings';
import { twJoin } from 'tailwind-merge';

export function HomeLayout({ children }: React.PropsWithChildren) {
  const dark = useSettings((state) => state.dark);
  return (
    <div className={twJoin(dark && 'bg-black text-white')}>{children}</div>
  );
}
