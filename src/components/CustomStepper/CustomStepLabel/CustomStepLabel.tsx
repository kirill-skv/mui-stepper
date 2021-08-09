import React from 'react';
import cn from 'classnames';

import { useCustomStyles } from './styles';

export interface CustomStepLabelProps {
  label: string;
  index: number;
  activeStep: number;
  withoutStepNumber: boolean;
}

export const CustomStepLabel: React.FC<CustomStepLabelProps> = ({
  label,
  activeStep,
  index,
  withoutStepNumber
}) => {
  const cls = useCustomStyles();
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
};
