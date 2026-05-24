import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './components/context/AuthContext'
import AdminDashboard from './components/AdminDashboard'
import AppointmentPage from './components/AppointmentPage'
import ContactPage from './components/ContactPage'
import Home from './components/Home'
import Login from './components/Login_inicio_sesion'
import ServicesPage from './components/ServicesPage'
import SpecialistsPage from './components/SpecialistsPage'

const protectedRoute = (isAuthenticated, element) =>
  isAuthenticated ? element : <Navigate to="/login" replace />

const adminRoute = (isAuthenticated, isAdmin, element) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/home" replace />

  return element
}

function AppContent() {
  const { isAuthenticated, login, user } = useAuth()
  const isAdmin = user?.role === 'admin'

  return (
    <div className="app-shell">
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login onLogin={login} />
          }
        />
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />}
        />
        <Route
          path="/home"
          element={protectedRoute(isAuthenticated, <Home />)}
        />
        <Route
          path="/servicios"
          element={protectedRoute(isAuthenticated, <ServicesPage />)}
        />
        <Route
          path="/especialistas"
          element={protectedRoute(isAuthenticated, <SpecialistsPage />)}
        />
        <Route
          path="/contacto"
          element={protectedRoute(isAuthenticated, <ContactPage />)}
        />
        <Route
          path="/citas"
          element={protectedRoute(isAuthenticated, <AppointmentPage />)}
        />
        <Route
          path="/admin"
          element={adminRoute(isAuthenticated, isAdmin, <AdminDashboard />)}
        />
        <Route
          path="/agenda"
          element={<Navigate to="/citas" replace />}
        />
        <Route path="*" element={<Navigate to={isAuthenticated ? '/home' : '/login'} replace />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
