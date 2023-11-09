import React, { useState }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloComponent />
    <CarComponent />
  </React.StrictMode>
);


function HelloComponent() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <label for=''>Enter your Name:{inputText}</label>
      <p></p>
      <input type="text" value={inputText} onChange={handleInputChange} />
    </div>
  );
}

function CarComponent() {
  const Cars = ["Ford", "BMW", "Audi"];

  return (
    <div>
      <h2>Who lives in my garage?</h2>
      <ul>
        {Cars.map((car) => (
          <li key={car.id}>I am {car}</li>
        ))}
      </ul>
    </div>
  );
}



export default {HelloComponent,CarComponent};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
