import React from 'react';
import './App.css';

function App() {
  (function dragDrop() {
    const dragEl = document.querySelector('.drag');
    dragEl.draggable = true;
  }());
  return (
    <div className="App"> Я Drag Drop пример
      <div className='drag'>Перетащи меня! Ну же!</div>
    </div>
  );
}

export default App;
