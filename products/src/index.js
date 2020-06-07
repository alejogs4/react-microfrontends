import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderProducts = function renderProducts({ container, history }) {
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(container)
  );
}

window.unmountProducts = function unmountProducts(container) {
  ReactDOM.unmountComponentAtNode(document.getElementById(container))
}
