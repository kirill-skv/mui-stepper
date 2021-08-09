import React from 'react';
import {
  Stepper,
  StepperProps as InitialStepperProps,
  Step,
  StepLabel
} from '@material-ui/core';

import { Theme } from '../Theme/Theme';

import { CustomStepIcon } from './CustomStepIcon/CustomStepIcon';
import { CustomStepConnector } from './CustomStepConnector/CustomStepConnector';
import { CustomStepLabel } from './CustomStepLabel/CustomStepLabel';

import { useCustomStyles } from './styles';

export interface StepperProps extends Omit<InitialStepperProps, 'children'> {
  steps: string[];
  activeStep: number;
  withoutStepNumber?: boolean;
  childAfterLastStep?: React.ReactNode;
}

export const CustomStepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  withoutStepNumber,
  childAfterLastStep,
  ...props
}) => {
  const cls = useCustomStyles();

  return (
    <Theme>
      <Stepper
        activeStep={activeStep}
        connector={<CustomStepConnector />}
        alternativeLabel
        {...props}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              classes={{
                iconContainer: cls.iconContainer,
                root: cls.root,
                label: cls.label
              }}
            >
              <CustomStepLabel
                label={label}
                index={index}
                activeStep={activeStep}
                withoutStepNumber={!!withoutStepNumber}
              />
            </StepLabel>
          </Step>
        ))}
        {childAfterLastStep && <Step>{childAfterLastStep}</Step>}
      </Stepper>
    </Theme>
  );
};

CustomStepper.defaultProps = {
  withoutStepNumber: false,
  childAfterLastStep: null
};
