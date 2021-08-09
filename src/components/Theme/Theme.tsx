import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './customTheme';

export interface ThemeProps {
  children: React.ReactNode;
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
