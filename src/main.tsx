import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavProvider } from './context/navContext.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </StrictMode>
);
