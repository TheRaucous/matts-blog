import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { HiChevronUpDown } from 'react-icons/hi2';
import {
  MdMonitor,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    document.body.classList.add('c-trans');
  }, []);

  let Icon: IconType;

  switch (theme) {
    case 'light':
      Icon = MdOutlineLightMode;
      break;

    case 'dark':
      Icon = MdOutlineDarkMode;
      break;

    case 'system':
      Icon = MdMonitor;
      break;
    default:
      Icon = MdMonitor;
      break;
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="c-trans relative flex h-10 w-min items-center rounded border bg-c-bg px-0">
      <Icon className="pointer-events-none absolute left-2 h-5 w-5" />
      <select
        className="c-trans h-full appearance-none rounded border-none bg-c-bg px-8"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <HiChevronUpDown className="pointer-events-none absolute right-2 h-5 w-5" />
    </div>
  );
}

export default ThemeSwitcher;
