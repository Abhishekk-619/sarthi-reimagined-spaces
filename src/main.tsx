import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource-variable/playfair-display'
import '@fontsource-variable/manrope'

createRoot(document.getElementById("root")!).render(<App />);
