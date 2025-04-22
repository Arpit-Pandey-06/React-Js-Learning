import { StrictMode } from 'react'
import React from'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <h1>I think i am creating somthing</h1>
  )
}
// const reactElement={
//   type:'a',
//   props:{
//   href:'https://google.com',
//   target:'_blank'
//   },
//   children:'click me to visit google'
// }

 

// const AnotherElemnet = (
//   <a href='https://Gooogle.com' target='_blank'>click to visit</a>
// )
const anotherUser="MyVariable";

const anotherreactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to vist',
  anotherUser
)


createRoot(document.getElementById('root')).render(
//  AnotherElemnet
anotherreactElement
/* <App/> */
)
