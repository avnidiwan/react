import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Task1 from './practiceTask.jsx'
import { ContextP } from './Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <BrowserRouter>  */}
   
   <ContextP>
    <App />
  </ContextP>
  {/* </BrowserRouter> */}
 
  </StrictMode>,
)
