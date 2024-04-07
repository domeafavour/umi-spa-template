import { useSettings } from '@/stores/settings';

export function ToggleDark() {
  const toggleDark = useSettings((state) => state.toggleDark);
  return (
    <button type="button" onClick={toggleDark}>
      toggle dark
    </button>
  );
}
