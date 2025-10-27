import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Task1 from './practiceTask.jsx'
// import { ContextP } from './Context.jsx'
import ToDoList from './toDoList.jsx'
import HomePage from './HomePage.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //  {/* <BrowserRouter>  */}
   
  //  <ContextP>
  //   <App />
  // </ContextP>
  // {/* </BrowserRouter> */}
 
  // </StrictMode>
    <StrictMode>
<HomePage/>
  </StrictMode>,
)
