import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './demo.jsx'
import Profile  from './profile.jsx'
import Stund from './card.jsx'
import Hello2 from './Helloapp.jsx'
import Id from './idcard.jsx'
import Counter from './counter.jsx'
import Cart from './cart.jsx'
import Simple from './sipal.jsx'
import Login from './login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
