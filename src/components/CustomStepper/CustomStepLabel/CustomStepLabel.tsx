import React from 'react';
import cn from 'classnames';

import { customStyles } from './styles';

interface PropsI {
  label: string;
  index: number;
  activeStep: number;
  withoutStepNumber: boolean;
}

export function CustomStepLabel({
  label,
  activeStep,
  index,
  withoutStepNumber
}: PropsI): JSX.Element {
  const cls = customStyles();
  return (
    <div
      className={cn(cls.wrapper, {
        [cls.active]: activeStep === index,
        [cls.completed]: activeStep > index,
        [cls.next]: activeStep < index
      })}
    >
      {!withoutStepNumber && <p className={cls.step}>{`Step ${index + 1}`}</p>}
      <p className={cls.label}>{label}</p>
    </div>
  );
}
