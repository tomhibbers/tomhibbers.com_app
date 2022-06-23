import React from 'react';

const LightIcon = (props) => <Icon {...props} name="sun-outline" />;
const DarkIcon = (props) => <Icon {...props} name="moon-outline" />;
export const ThemeContext = React.createContext({
  isDark: true,
  theme: 'light',
  toggleTheme: () => {},
});