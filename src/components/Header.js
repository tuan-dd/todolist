import React from 'react'

function Header({ title, type }) {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <p className="type">{type}</p>
    </div>
  )
}

export default Header
