import React from "react";
import { addReadme } from 'storybook-readme';
import { create } from '@storybook/theming';
import { addDecorator, addParameters, configure } from "@storybook/react";

const basicTheme = create({
  base: 'light',
  brandTitle: 'joovence-mui',
  brandUrl: 'todo',
  brandImage: null
});

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: basicTheme
  },
  readme: {
    codeTheme: 'github',

    StoryPreview: ({ children }) => (
      <div style={{ padding: 16 }}>{children}</div>
    ),
    
    /**
     * Wrapper for header docs. Usually used to set some styles
     * NOTE: will be applied only for content docs (docs around the story)
     */
    HeaderPreview: ({ children }) => <div>{children}</div>,
    
    /**
     * Wrapper for footer docs. Usually used to set some styles
     * NOTE: will be applied only for content docs (docs around the story)
     */
    FooterPreview: ({ children }) => <div>{children}</div>,
              
    /**
     * Wrapper for content and sidebar docs. Usually used to set some styles
     * NOTE: will be applied only for content docs (docs around the story)
     */
    DocPreview: ({ children }) => <div style={{ padding: 16 }}>{children}</div>
  }
});

addDecorator(addReadme);

const loaderFn = () => {
  
  // put welcome screen at the top of the list so it's the first one displayed
  const allExports = [require("./welcome.stories.tsx")];
  
  // automatically import all story ts files that end with *.stories.tsx
  const req = require.context("../src/components", true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);