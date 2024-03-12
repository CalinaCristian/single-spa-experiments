import React from 'react';
import ReactDOM from 'react-dom';

import singleSpaReact from 'single-spa-react';

import App from './App.jsx';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary() {
    // Customize the root error boundary for your microfrontend here.
    return <div>Error</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
