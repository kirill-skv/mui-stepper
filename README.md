## Custom Stepper component based on @material-ui/core Stepper component.

### Installation:

```shell
yarn add joovence-stepper
```

or

```shell
npm install joovence-stepper
```

### Usage

```jsx
import Stepper from 'joovence-stepper/lib'

const [activeStep, setActiveStep] = useState<number>(0)

const steps = [
  'Description of step 1',
  'Description of step 2',
  'Description of step 3'
]

<Stepper steps={steps} activeStep={activeStep} />
```

### Contributing:

1. yarn start - starts up storybook dev server
2. yarn build - builds up project
