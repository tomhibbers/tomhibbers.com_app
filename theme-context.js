import React from 'react';

export const ThemeContext = React.createContext({
  isDark: true,
  theme: 'light',
  toggleTheme: () => {},
});