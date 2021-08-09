import React from 'react';
import { customStyles } from './styles';

export function CustomStepConnector(): JSX.Element {
  const cls = customStyles();

  return <div className={cls.connector} />;
}
