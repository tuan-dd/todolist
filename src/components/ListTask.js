import React from 'react'
import Task from './Task';
import Filleter from './Filleter'
function ListTask({ tasks, handleChanceTask, removeItem, filter, handleFilter }) { //function ListTask({ tasks, handleChanceTask, removeItem, filter, setFilter })
    return (
        <div className='list-task'>
            <Task tasks={tasks} handleChanceTask={handleChanceTask} removeItem={removeItem} filter={filter} />
            <Filleter filter={filter} handleFilter={handleFilter} />
            {/* <Filleter filter={filter} setFilter={setFilter} /> */}
        </div>
    )
};

export default ListTask;

// function ListTask({ tasks, handleChanceTask, removeItem, filter, setFilter }) {
//     return (
//         <div className='list-task'>
//             <Task tasks={tasks} handleChanceTask={handleChanceTask} removeItem={removeItem} filter={filter} />
//             <Filleter filter={filter} setFilter={setFilter} />
//         </div>
//     )
// };

// export default ListTask;