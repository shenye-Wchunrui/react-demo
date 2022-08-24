/*
 * @Author: wenchunrui w_chunrui@163.com
 * @Date: 2022-08-24 22:06:11
 * @LastEditors: wenchunrui w_chunrui@163.com
 * @LastEditTime: 2022-08-24 22:58:16
 * @FilePath: \my-react-ts\src\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by wenchunrui w_chunrui@163.com, All Rights Reserved. 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
