/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array, number } from '@storybook/addon-knobs';

import { CustomStepper } from './CustomStepper';
import readme from './README.md';

const stories = storiesOf('CustomStepper', module);

stories.addDecorator(withKnobs);
stories.addParameters({
  readme: {
    content: readme
  }
});

stories.add('default', () => {
  const steps = [
    'Description of step 1',
    'Description of step 2',
    'Description of step 3'
  ];

  return (
    <CustomStepper
      steps={array('Array of steps', steps, ',')}
      activeStep={number('Active step', 1)}
    />
  );
});
