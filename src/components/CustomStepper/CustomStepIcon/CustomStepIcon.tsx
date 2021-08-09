import React from 'react';
import { StepIconProps } from '@material-ui/core';
import cn from 'classnames';

import { useCustomStyles } from './styles';

export const CustomStepIcon: React.FC<StepIconProps> = ({
  completed,
  active
}) => {
  const cls = useCustomStyles();

  if (completed) {
    return (
      <div className={cn(cls.point, cls.completed, cls.bigPoint)}>
        <div className={cn(cls.point, cls.smallPoint)} />
      </div>
    );
  }

  return (
    <div
      className={cn({ [cls.active]: active, [cls.next]: !active }, cls.point)}
    />
  );
};
