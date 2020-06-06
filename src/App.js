import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
componentDidMount() {
    const dragDrop = () => {
        const card = document.querySelector('.js-card');
        const cells = document.querySelectorAll('.js_cell');
        const dragStart = function () {
            alert('dragStart');
        };
        card.addEventListener('dragstart', dragStart);
    };
    dragDrop();
}

    render() {

    return (
        <div className="App">
          <div className='wrapper'>
          <ul className='list' >
          <li className='list_caption'>Planned</li>
          <li className='list_caption'>In dev</li>
          <li className='list_caption'>QA</li>
          <li className='list_caption'>Production</li>
            <li className='list_cell js_cell'>
              <div className='list_card js-card' draggable='true'>
                <div className='list_card-header'>Task title</div>
                <div className="list_card-info">Task description</div>
              </div>
            </li>
            <li className='list_cell js_cell'></li>
            <li className='list_cell js_cell'></li>
            <li className='list_cell js_cell'></li>
          </ul>
        </div>
        </div>
    );
  }
}

export default App;
