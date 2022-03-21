/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { StrictMode } from "react";
import { render as DOMRender, unmountComponentAtNode } from "react-dom";
import { unregister } from "serviceWorker";

// Import root app
import { App } from "App";
import { HelmetProvider } from "react-helmet-async";
import 'index.css'

const MOUNT_NODE = document.getElementById("root");

const ConnectedApp = ({ Component }) => (
  <HelmetProvider>
    <StrictMode>
      <Component />
    </StrictMode>
  </HelmetProvider>
);
const render = (Component) => {
  DOMRender(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable js files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./"], () => {
    unmountComponentAtNode(MOUNT_NODE);
    const App = require("./App").App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
