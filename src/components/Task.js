import React from 'react'

function Task({ tasks, handleChanceTask, removeItem }) {
    return (
            (<ul className='task'>
                {tasks.map(item => (
                    <li className={item.filter === false ? 'item' : 'item fall'} key={item.id}>
                        <label className={item.done === false ? 'work' : 'work done'}>{item.inputNewTask}</label>
                        <div className="action">
                            {/* <input checked={Boolean(item.done)} onChange={(e) => handleChanceTask(item.id,e.target.checked) } name={item.id} type="checkbox" className="action-btn action-checkbox-done" /> */}
                            <input checked={Boolean(item.done)} onChange={handleChanceTask} name={item.id} type="checkbox" className="action-btn action-checkbox-done" />
                            <button onClick={() => removeItem(item.id)} className="action-btn action-delete">❌</button>
                        </div>
                    </li>
                )
                )}
            </ul>)
    )
}

export default Task
// function Task({ tasks, handleChanceTask, removeItem, filter }) {
//     return (
//         (<ul className='task'>
//             {tasks.filter(item => filter ? item.done !== true : true).map(item => (
//                 <li className='item' key={item.id}>
//                     <label className={item.done === true ? 'work done' : 'work'}>{item.inputNewTask}</label>
//                     <div className="action">
//                         {/* <input checked={Boolean(item.done)} onChange={(e) => handleChanceTask(item.id,e.target.checked) } name={item.id} type="checkbox" className="action-btn action-checkbox-done" /> */}
//                         <input checked={Boolean(item.done)} onChange={handleChanceTask} name={item.id} type="checkbox" className="action-btn action-checkbox-done" />
//                         <button onClick={() => removeItem(item.id)} className="action-btn action-delete">❌</button>
//                     </div>
//                 </li>
//             )
//             )}
//         </ul>)
//     )
// }

// export default Task