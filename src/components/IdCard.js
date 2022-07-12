import React from 'react'

export default function IdCard(props) {
  return (
    <div>
     <p>{props.lastName}</p>
     <p>{props.firstName}</p>
     <span>{props.gender}</span>
     <span>{props.height}</span>
     <p>{props.birth.toDateString()}</p>
     <img src={props.picture} alt=""></img>
    </div>
  )
}
