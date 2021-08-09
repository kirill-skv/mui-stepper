import React from 'react';
import { StepIconProps } from '@material-ui/core';
import cn from 'classnames';

import { customStyles } from './styles';

export function CustomStepIcon({
  completed,
  active
}: StepIconProps): JSX.Element {
  const cls = customStyles();

  if (completed) {
    return (
      <div className={cn(cls.completed, cls.bigPoint)}>
        <div className={cls.smallPoint} />
      </div>
    );
  }

  if (active) {
    return <div className={cn(cls.active, cls.mainPoint)} />;
  }

  return <div className={cn(cls.next, cls.mainPoint)} />;
}
