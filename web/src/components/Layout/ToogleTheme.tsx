'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    const handleToggleClick = () => {
        setTheme(isDarkMode ? 'light' : 'dark');
    };

    return (
        <button
            onClick={handleToggleClick}
            className={`transition-all duration-100 text-2xl`}
        >
            {theme === "light" ? (
                <RiMoonLine className='fill-gray-50 dark:fill-black' />
            ) : (
                <RiSunLine className='fill-gray-50 dark:fill-black' />
            )}
        </button>
    );
};

export default ToggleTheme;
