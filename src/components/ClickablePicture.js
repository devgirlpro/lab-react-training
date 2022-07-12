import React, { useState } from 'react'

export default function ClickablePicture(props) {
    const imgArr = [props.img, props.imgClicked];
    const [imageIndex, setImageIndex] = useState(0);


    const handleImage = () => {
        setImageIndex(imageIndex === 0 ? 1 : 0)
    }
    // const img:'./assets/images/maxence.png' ? './assets/images/maxence-glasses.png'
  return (
    <div>
           <img src={imgArr[imageIndex]} onClick={handleImage} width="300" height="300" alt="" />
    </div>
  )
}

// import React from 'react'
// import { useState } from 'react'

// export default function ClickablePicture(props) {

//     const [showImg, setShowImg] = useState(true)
//     function handleClick() {
//         setShowImg(!showImg)
//     }

//     return (


//         <img onClick={handleClick} height="128px" width="128px" 
//         src= {showImg ? props.img : props.imgClicked} alt="pic" />

       


//     )
// }
