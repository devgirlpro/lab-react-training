import React from 'react'




export default function BoxColor(props) {
    const divStyle = {
        color: 'blue',
        backgroundColor: 'yellow'
        // backgroundColor: `rgb(${props.r}${props.g}${props.b})`
    }
  return (
    <div style= {divStyle}>
          Boxolor
    </div>
  )
}
