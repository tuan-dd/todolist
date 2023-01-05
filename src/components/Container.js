import React, { useState } from "react";
import Header from './Header';
import ListTask from './ListTask';
import Form from './Form'
function App() {
  const [tasks, setTasks] = useState([
    { id: "task-1", inputNewTask: "learn react", done: false, filter: false, },
    { id: "task-2", inputNewTask: "learn every day", done: false, filter: false, },
  ]);
  const [filter, setFilter] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    inputNewTask: "",
    done: false,
    filter: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.inputNewTask) {
      setTasks(tasks.concat(formData))
      setFormData({ ...formData, inputNewTask: '', id: '' })
    }
  }
  const handleChance = (e) => {
    setFormData({ ...formData, inputNewTask: e.target.value, id: Date.now().toString(), })
  }
  // const handleChanceTask = (itemId,checked) => {
  //   setTasks(tasks.map(task => {
  //     if (itemId === task.id) {
  //       return { ...task, done: checked }
  //     } else {
  //       return task;
  //     }
  //   }))
  // }
  const handleChanceTask = (e) => {
    setTasks(tasks.map(task => {
      if (e.target.name === task.id) {
        return { ...task, done: e.target.checked, }
      } else {
        return task;
      }
    }))
  }
  const removeItem = (itemId) => {
    setTasks(tasks.filter(task => task.id !== itemId))
  }
  const handleFilter = (e) => {
    setFilter(e.target.checked)
    setTasks(tasks.map(task => {
      if (task.done === true) {
        return { ...task, filter: e.target.checked }
      } else {
        return task;
      }
    }))
  }
  return (
    <div className="container">
      <Header title="Todo List" type="Get thing done , one time at a time" />
      <ListTask tasks={tasks} handleChanceTask={handleChanceTask} removeItem={removeItem} filter={filter} handleFilter={handleFilter} />
      <Form handleSubmit={handleSubmit} formData={formData} handleChance={handleChance} />
    </div>
  )
}

export default App;
