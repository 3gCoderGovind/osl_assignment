import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TempElement from './user_data';
import Add_form from './add_data_form';
import Edit_form from './edit_data_form';
import View_data_form from './view_data_form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Add_form></Add_form>
    <Edit_form></Edit_form>
    <View_data_form></View_data_form>
  <TempElement></TempElement>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
