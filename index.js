import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sum from './Sum';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <Sum a={10} b={5}/>
);


