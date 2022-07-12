import React, { useState } from 'react'

export default function LikeButton() {
    const [count, setCount] = useState(0);

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

const handleClick = (props) => {
    setCount(count + 1)
}

  return (
    <div>
        <button onClick={handleClick} style={{backgroundColor: "#" + `${randomColor}`}}> {count}Likes</button>
    </div>
  )
}
