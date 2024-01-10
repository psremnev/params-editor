import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { productModel, visibleParams } from './Constants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App params={visibleParams} model={productModel} />
  </React.StrictMode>
);
