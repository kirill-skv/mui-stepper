import React from 'react';
import {
  Stepper,
  StepperProps as InitialStepperProps,
  Step,
  StepLabel
} from '@material-ui/core';

import { Styles } from '../Styles/Styles';
import { Theme } from '../Theme/Theme';

import { CustomStepIcon } from './CustomStepIcon/CustomStepIcon';
import { CustomStepConnector } from './CustomStepConnector/CustomStepConnector';
import { CustomStepLabel } from './CustomStepLabel/CustomStepLabel';

export interface StepperProps extends Omit<InitialStepperProps, 'children'> {
  steps: string[];
  activeStep: number;
  withoutStepNumber?: boolean;
  childAfterLastStep?: React.ReactNode;
}

export function CustomStepper({
  steps,
  activeStep,
  withoutStepNumber,
  childAfterLastStep,
  ...props
}: StepperProps): JSX.Element {
  return (
    <Styles>
      <Theme>
        <Stepper
          activeStep={activeStep}
          connector={<CustomStepConnector />}
          alternativeLabel
          {...props}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={CustomStepIcon}>
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
    </Styles>
  );
}

CustomStepper.defaultProps = {
  withoutStepNumber: false,
  childAfterLastStep: null
};
