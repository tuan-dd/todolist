import React from 'react'

function Filleter({filter,handleFilter}) { // function Filleter({filter,setFilter}) 
  return (
    <div className="filter-task">
                <span>Showing only task unfinished</span>
                <input checked={filter} onChange={(handleFilter)} type="checkbox" className="action-btn action-checkbox-filter" />
                {/* <input checked={filter} onChange={(e) => setFilter(e.target.checkbox)} type="checkbox" className="action-btn action-checkbox-filter" /> */}
            </div>
  )
}

export default Filleter
// function Filleter({ filter, setFilter }) {
//   return (
//     <div className="filter-task">
//       <span>Showing only task unfinished</span>
//       <input checked={filter} onChange={(e) => setFilter(e.target.checked)} type="checkbox" className="action-btn action-checkbox-filter" />
//     </div>
//   )
// }

// export default Filleter