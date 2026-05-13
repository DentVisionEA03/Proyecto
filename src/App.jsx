import { AuthProvider, useAuth } from './components/context/AuthContext'
import Home from './components/Home'
import Login from './components/Login_inicio_sesion'
import Navbar from './components/layout/NavBar'
import RegisterPage from './pages/RegisterPage'

function AppContent() {
  const { isAuthenticated, login } = useAuth()

  return (
    <div className="app-shell">
      {/* 1. Ponemos el Navbar aquí para que se vea siempre */}
      <Navbar />

      {/* 2. El contenido cambia según el login */}
      {isAuthenticated ? <Home /> : <Login onLogin={login} />}
    </div>
  )
}

// SOLO UNA FUNCIÓN APP
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
