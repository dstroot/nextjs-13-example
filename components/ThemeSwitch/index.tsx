'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

// icons
import { BsSun } from 'react-icons/bs';
import { BsMoonStars } from 'react-icons/bs';
import { BsGear } from 'react-icons/bs';

// library
import { cn } from '../../lib/cn';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className='flex justify-between w-20 mx-auto bg-white border-2 border-gray-500 rounded-full dark:bg-gray-300 dark:border-gray-300'>
        <button
          id='light'
          aria-label='Light Theme'
          className={cn(
            'hover:transition-all w-6 h-6 p-1 rounded-full hover:bg-gray-500 hover:text-white',
            theme === 'light' ? 'bg-gray-500 text-white' : 'text-black'
          )}
          onClick={(e) => setTheme('light')}
        >
          <BsSun />
        </button>
        <button
          id='system'
          aria-label='System Theme'
          className={cn(
            'hover:transition-all w-6 h-6 p-1 rounded-full hover:bg-gray-500 hover:text-white',
            theme === 'system' ? 'text-white bg-gray-500 dark:text-white' : 'text-black'
          )}
          onClick={(e) => setTheme('system')}
        >
          <BsGear />
        </button>
        <button
          id='dark'
          aria-label='Dark Theme'
          className={cn(
            'hover:transition-all w-6 h-6 p-1 rounded-full hover:bg-gray-500 dark:hover:text-white hover:text-white',
            theme === 'dark' ? 'bg-gray-500 text-white' : 'dark:text-black'
          )}
          onClick={(e) => setTheme('dark')}
        >
          <BsMoonStars />
        </button>
      </div>
    </>
  );
};
