import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/main.scss'
import App from './App.jsx'
import {GlobalProvider} from "./providers/GlobalProvider.jsx";

createRoot(document.getElementById('root')).render(<GlobalProvider>

  <App />
</GlobalProvider>)