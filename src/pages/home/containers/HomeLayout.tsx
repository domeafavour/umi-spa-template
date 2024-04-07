import { useSettings } from "@/stores/settings";

export function HomeLayout({ children }: React.PropsWithChildren) {
  const dark = useSettings((state) => state.dark);
  return (
    <div style={dark ? { backgroundColor: 'black', color: 'white' } : {}}>
      {children}
    </div>
  );
}
