import React from 'react'
import "./MyBar.css"

function MyBar() {
  return (
    <div>
      <ul>
        <li><a className="active" href="/">My App</a></li>
        <li><a href="/">News</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div >
  )
}

export default MyBar