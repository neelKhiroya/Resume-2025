import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const proptypes = {
  showMobile: PropTypes.bool,
};

const defaultProps = {
  showMobile: false,
};

export default function DarkModeToggle({ showMobile }) {
  const [darkMode, setDarkMode] = useState(false);

  // Check device preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  // Apply class based on darkMode state
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`cursor-pointer
        ${showMobile
          ? 'absolute top-[.5rem] right-[.5rem] z-50 rounded-full bg-black/70 dark:bg-white/70 dark:shadow-none h-[48px] w-[48px] flex justify-center items-center text-2xl'
          : ''}`}
    >
      {showMobile
        ? darkMode
          ? '🌞'
          : '🌙'
        : darkMode
        ? '🌞 Light Mode'
        : '🌙 Dark Mode'}
    </button>
  );
}

DarkModeToggle.propTypes = proptypes;
DarkModeToggle.defaultProps = defaultProps;
