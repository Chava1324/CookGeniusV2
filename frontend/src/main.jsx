import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import App from './App.jsx'

AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
