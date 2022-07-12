import React from 'react'

export default function Random(props) {
    let randomNum = Math.floor(Math.random() *(props.max - props.min));
  return (
    <div>
        {randomNum}
    </div>
  )
}


