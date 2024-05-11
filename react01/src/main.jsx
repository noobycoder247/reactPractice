import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BasicComponent from './Basic.jsx'

function MyElementFunction() {
  return(<p>This is Para()</p>)
}
const MyElementFunction2 = (
  <p>This is Para!!!</p>
)
const myVariable = "Hey!!!"
const MyReactEle = React.createElement('a', {href: 'https://bing.com', target: '_blank'}, 'Click Here', myVariable)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // MyElementFunction()
    // <MyElementFunction />
    // <p>This is Para!</p>
    // MyElementFunction2
    // MyReactEle
)
