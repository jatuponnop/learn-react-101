import React from 'react'

function MyCard(props) {
  return (
    <div className="card">
      <img src={props.coverImage} alt={props.name} style={{ width: "100%" }} />
      <div className="container">
        <h4><b>{props.name}</b></h4>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}

export default MyCard