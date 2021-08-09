import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Welcome", module);

stories.add("to custom material-ui library", () => (
  <div>This is a demo of custom material-ui library. As for now, there is only one component - CustomStepper.</div>
));