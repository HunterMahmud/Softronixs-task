import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// import Home from './pages/Home'
import Home from './Home';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}
    <Home/>
  </StrictMode>,
)
