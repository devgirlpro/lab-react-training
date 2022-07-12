import React from 'react'

export default function Greetings(props) {
let greetText;
if(props.lang === "de"){
    greetText = "Hallo"
}else if(props.lang === "en") {
    greetText = "Hello"
}else if(props.lang === "es") {
    greetText = "Olla"
}else if (props.lang === "fr") {
    greetText = "Bonjour"
}


  return (
    <div className="greeting">
        <p>{greetText} {props.children}</p>
        
    </div>
  )
}
