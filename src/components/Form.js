import React from 'react'

function Form({handleSubmit,formData,handleChance}) {
  return (
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
  )
}

export default Form