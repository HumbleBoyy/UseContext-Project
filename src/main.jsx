import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoContext } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <TodoContext>
     <App />
  </TodoContext>
)
