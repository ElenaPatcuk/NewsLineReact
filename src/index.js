import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(

  // При помощи jsx
  // <div>
  //   Приложение работает!
  //   <button>CLICK</button>
  // </div>,

  // через дом элементы
  // React.createElement('button', {
  //   onClick: ()=> alert('CLACK!')
  // }, 'CLICK'),

  // компонент, который необходимо отрисовать
 <App/>,

  // блок
  document.getElementById('root')
);
