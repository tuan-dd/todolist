import React, { useState } from "react";
import "./App.css";
let arrayTask = [];
function App() {
  const [formData, setFormData] = useState({
    inputNewTask: "",
    done: false,
    filter: false,
  })
  const [task, setTask] = useState(arrayTask)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.inputNewTask) {
      arrayTask.push(formData)
      setFormData({ ...formData, inputNewTask: '' })
      console.log(task)
    }
  }
  const handleChance = (e) => {
    const field = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [field]: value })
    // console.log(e.target.checked)
  }
  const handleChanceTask = (e) => {
    task.forEach((item, index) => {
      console.log(item)
    })
    // setTask({ ...task, [e.target.name]: e.target.checked })
    console.log(e.target.checked)
    console.log(task[0].done)
  }
  console.log(task.length)
  return (
    <div className="container">
      <div className="heading">
        <h1>Todo List</h1>
        <p className="type">Get thing done , one time at a time</p>
      </div>
      <div className="list-task">
        {/* <ul className="task">
          <li className="item">
            <p className={formData.done === false ? 'work' : 'work done'}>Get learn js</p>
            <div className="action">
            <input checked={formData.done} onChange={handleChance} type="checkbox" name='done' className="action-btn action-checkbox-done" />
              <button className="action-btn action-delete">❌</button>
            </div>
          </li>
          <li className="item">
            <p className="work">Study Todo List</p>
            <div className="action">
              <input type="checkbox" className="action-btn action-checkbox-done" />
              <button className="action-btn action-delete">❌</button>
            </div>
          </li>
        </ul> */}
        {(<ul className='task'>
          {task?.map(item => (
            <li className="item" key={item.inputNewTask}>
              <label className={item.done === false ? 'work' : 'work done'}>{item.inputNewTask}</label>
              <div className="action">
                <input checked={item.done} onChange={handleChanceTask} type="checkbox" name='done' id={`${item.inputNewTask}`} className="action-btn action-checkbox-done" />
                <button className="action-btn action-delete">❌</button>
              </div>
            </li>
          )
          )}
        </ul>)}
        <div className="filter-task">
          <span>Showing only task unfinished</span>
          <input checked={formData.filter} onChange={handleChance} type="checkbox" name="filter" className="action-btn action-checkbox-filter" />
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="add-task">
          <label htmlFor="newItem" className="title">Add to todo list</label>
          <input
            value={formData.inputNewTask}
            onChange={handleChance}
            name='inputNewTask'
            type="text"
            id="inputNewTask"
            placeholder="type your task that you want"
          />
          <button type='submit' className="button" value='submit' >add item</button>
        </form>
      </div>
    </div>
  )
}

export default App;
