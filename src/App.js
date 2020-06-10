import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
componentDidMount() {
    const resultBlock = document.querySelector('#result');
    const  clickMeButton = document.querySelector('#clickMe');
    const  pageNumber = document.querySelector('#page-number');
    clickMeButton.addEventListener('click', makeRequest);
    function makeRequest () {
        $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, {
            success: function (data) {
                data.forEach(el => {
                    const img = document.createElement('img');
                    img.src = el.thumbnail;
                    document.querySelector("#result").appendChild(img);
                })
            }
        });
    }
    const dragDrop = () => {
        const card = document.querySelector('.js-card');
        const cells = document.querySelectorAll('.js_cell');
        const dragStart = function () {
            setTimeout(() => { this.classList.add('hide')}, 0)

        };
        const dragEnd = function () {
            setTimeout(() => { this.classList.remove('hide')}, 0)
        };
        const dragOver = function (event) {
            event.preventDefault();
        };
        const dragEnter = function (event) {
            event.preventDefault();
            this.classList.add('hover');
        };
        const dragLeave = function () {
            this.classList.remove('hover');
        };
        const dragDrop = function () {
            this.append(card);
            this.classList.remove('hover');
        };
        cells.forEach((cell) => {cell.addEventListener('dragover', dragOver);
            cell.addEventListener('dragenter', dragEnter);
            cell.addEventListener('dragleave', dragLeave);
            cell.addEventListener('drop', dragDrop);
        });

        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);

    };
    dragDrop();
    (function dragSmallEl () {
        let coordX;
        let coordY;
        const dragEl = document.querySelector('.square');
        const dropZone = document.querySelector('.drop_zone');
        dragEl.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/html', 'dragstart');
            coordX = e.offsetX;
            coordY = e.offsetY;
            // console.log('start');
        });
        // dragEl.addEventListener('dragend', (e) => {
        //     dragEl.style.position = 'absolute';
        //     dragEl.style.top = (e.pageY - coordY) + 'px';
        //     dragEl.style.left = (e.pageX - coordX) + "px";
        // });
        dropZone.addEventListener('dragenter', (e) => {
        });
        dropZone.addEventListener('dragleave', (e) => {
        });
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        dropZone.addEventListener('drop', (e) => {
            dragEl.style.position = 'absolute';
              dragEl.style.top = (e.pageY - coordY) + 'px';
               dragEl.style.left = (e.pageX - coordX) + "px";
        })

    } ())
}

    render() {




// $.ajax('https://repetitora.net/api/JS/Images?page=2&count=4', {
//     success: function (data) {
//         data.forEach(el => {
//             const img = document.createElement('img');
//             img.src = el.thumbnail;
//             document.querySelector("#result").appendChild(img);
//         })
//     }
// });

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
            <hr></hr>
            <div className='square' draggable='true'>Move me NOT into these 4 cells!</div>
            <div className="drop_zone"></div>
            <div>
            <button id = 'clickMe'>click me</button>
            </div>
            <div>
             <input type = 'number'  id = 'page-number'></input>
            </div>
            <div id='result'></div>
        </div>
    );
  }
}

export default App;
