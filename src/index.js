import React from 'react';
import ReactDOM from 'react-dom';
import App from './common/App';
import {Provider} from "react-redux";
import store from './redux/index'
import { BrowserRouter } from "react-router-dom";
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);





