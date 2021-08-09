import React from 'react';
import { useCustomStyles } from './styles';

export const CustomStepConnector: React.FC = () => {
  const cls = useCustomStyles();

  return <div className={cls.connector} />;
};
