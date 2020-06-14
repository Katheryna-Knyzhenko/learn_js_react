import React, {Component} from 'react';
import './App.css';
import {deleteTasks, getImages, updateTasks} from "./requests";
import {getTasks} from "./requests";
import {createTasks} from "./requests";


class App extends Component {
  constructor() {
    super();
    this.state = {value: '',
    isDisabled: true};
    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }
  handleChange (event) {
      this.setState({value: event.target.value, isDisabled: false});
      if (event.target.value <= 0) {
          this.setState({value: '', isDisabled: true});
      }
  }
  submitButton (event) {
      event.preventDefault();

  }
componentDidMount() {
    const resultBlock = document.querySelector('#result');
    const  clickMeButton = document.querySelector('#clickMe');
    const  pageNumber = document.querySelector('#page-number');
    const showTasksButton = document.querySelector('#get-tasks');

    // updateTasks('super', '15da9242-ef97-4ab4-ae04-4051408584f8', true);
    // createTasks('SecondTask');
    // updateTasks('FirstTask').then((data) => {console.log(data)});
    // updateTasks('SecondTask').then((data) => {console.log(data)});
   if (!this.state.value) {
       clickMeButton.addEventListener('click', () => {const promise = getImages(pageNumber.value);
           promise.then(onImagesRecieved);
       });
   }
   else if (this.state.value) {
       clickMeButton.addEventListener('click', () => {alert('error!')})
   }
    showTasksButton.addEventListener('click', () => {
        const promise = getTasks();
        promise.then(onTasksRecieved);
    });



   function onDeleteTask(tasks) {
      // var resultZone = document.querySelector("#tasks-result").innerHTML;
      //  resultZone.pop();
       alert('Мне надо удалить один из запросов в списке книпки ShowTasks');
    }

   function onImagesRecieved (data) {
        data.forEach(el => {
                    const img = document.createElement('img');
                    img.src = el.thumbnail;
                    document.querySelector("#result").appendChild(img);
                })
    }

    function onTasksRecieved (tasks) {
        createTasks('FirstTask');
        const result = document.querySelector("#tasks-result");
        result.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task.title}        ${task.id}`;
            li.id = task.id;
            result.appendChild(li);
            const buttonDelete = document.createElement('button');
            buttonDelete.innerHTML = 'delete task';
            buttonDelete.id = 'delete-task';
            buttonDelete.addEventListener('click', () => { deleteTasks(task.id)} );
            li.appendChild(buttonDelete);

        })
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
            <button type="submit" id = 'clickMe' onSubmit={this.submitButton} disabled={this.state.isDisabled}>click me</button>
            </div>
            <div>
             <input type = 'number'   value={this.state.value} id = 'page-number' onChange = {this.handleChange}></input>
            </div>
            <div id='result'></div>
            <ul id='tasks-result'></ul>
            <div>
            <button id='get-tasks'>Show tasks</button>
        </div>
        </div>
    );
  }
}

export default App;
