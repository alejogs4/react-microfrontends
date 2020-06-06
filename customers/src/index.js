import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/**
 * This is the contract between micro frontends here we will be passing container router history and
 * the container where we will be rendering entire microfrontend
 */
window.renderCustomers = function renderCustomers({ history, container }) {
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(container)
  );
}

/**
 * Unmount microfrontend
 */
window.unmountCustomers = function unmountCustomers(container) {
  ReactDOM.unmountComponentAtNode(document.getElementById(container))
}

