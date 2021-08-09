import React from 'react';
import { StylesProvider } from '@material-ui/core';

import './customStyles.css';

interface PropsI {
  children: React.ReactNode;
}

export function Styles({ children }: PropsI): JSX.Element {
  return <StylesProvider injectFirst>{children}</StylesProvider>;
}
