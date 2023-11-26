import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuestionContext from './components/Context/QuestionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <QuestionContext>
    <App />
    </QuestionContext>
  </React.StrictMode>
);

