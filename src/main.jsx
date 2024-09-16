import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider, { AuthContext } from './AuthProvider/AuthProvider.jsx'

export const RootComponent = () => {
  const { isDarkMode } = useContext(AuthContext)

  return (
    <div className={isDarkMode ? 'bg-[#191d28] min-h-screen py-5 px-5' : 'bg-[#ffffff] min-h-screen py-5 px-5'}>
      <App />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RootComponent />
    </AuthProvider>
  </StrictMode>,
)
