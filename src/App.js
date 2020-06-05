import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    function dragDrop() {
      const dragEl = document.querySelector('.drag');
      dragEl.draggable = true;
    }
    dragDrop();
    return (
        <div className="App"> Я Drag Drop пример
          <div className='drag' >Перетащи меня! Ну же!</div>
        </div>
    );
  }
}

export default App;
