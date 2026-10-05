import React from 'react'

function ICard(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border:'4px solid green', height:'300px', width:'300px', margin:'10px'}}>
      <img src={props.url} alt="Placeholder" style={{marginBottom: '10px', width: '90px', height: '90px', objectFit: 'cover'}} />
      <h3>{props.name}</h3>
      <p>Roll: {props.roll}</p>
      <p>Branch: {props.branch}</p>
      <p>College: {props.college}</p>
    </div>
  )
}

export default ICard