
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'clicke me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  render(
    reactElement
  )
    

)
