import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    // function dragDrop() {
    //   let dragEl = document.querySelector('.drag');
    //   dragEl.draggable = true;
    // }
    // dragDrop();
    return (
        <div className="App">
          <div className='wrapper'>
          <ul className='list' >
          <li className='list_caption'>Planned</li>
          <li className='list_caption'>In dev</li>
          <li className='list_caption'>QA</li>
          <li className='list_caption'>Production</li>
            <li className='list_cell js_cell'>
              <div className='list_card js-card'>
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
