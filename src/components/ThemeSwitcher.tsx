import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconType } from 'react-icons';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdDarkMode,
  MdMonitor,
} from 'react-icons/md';
import { HiChevronUpDown } from 'react-icons/hi2';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
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

    case 'blackout':
      Icon = MdDarkMode;
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
    <div className="relative flex px-0 w-min items-center bg-c-bg border rounded h-10 c-trans">
      <Icon className="h-5 w-5 absolute left-2 pointer-events-none" />
      <select
        className="px-8 bg-c-bg h-full rounded border-none appearance-none c-trans"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blackout">Blackout</option>
        <option value="system">System</option>
      </select>
      <HiChevronUpDown className="absolute right-2 h-5 w-5 pointer-events-none" />
    </div>
  );
}

export default ThemeSwitcher;
