# CustomStepper

<!-- STORY -->

<hr>

Presentational component for visualization of progress.

##### Import

```js
import { CustomStepper } from 'joovence-stepper';
```

##### Usage

```jsx
const [activeStep, setActiveStep] = useState<number>(0)
const steps = [
  'Description of step 1',
  'Description of step 2',
  'Description of step 3'
]

<CustomStepper steps={steps} activeStep={activeStep} />
```

##### Required props

| Name         | Type       | Description          |
| ------------ | ---------- | -------------------- |
| `steps`      | `string[]` | Description of steps |
| `activeStep` | `number`   | Current active step  |

##### Optional props

| Name                 | Type              | Default | Description                                                                                                     |
| -------------------- | ----------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `withoutStepNumber`  | `boolean`         | `false` | `If set to true, there won't be a step number under each circle`                                                |
| `childAfterLastStep` | `React.ReactNode` | `null`  | `If child is passed here, it will appear after last step. There will be a line, connecting last step and child` |

You can also pass all native Stepper props from @material-ui/core library.
