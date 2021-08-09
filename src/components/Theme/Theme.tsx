import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './customTheme';

interface PropsI {
  children: React.ReactNode;
}

export function Theme({ children }: PropsI): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
