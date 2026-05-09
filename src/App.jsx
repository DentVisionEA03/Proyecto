import { AuthProvider, useAuth } from "./components/context/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login_inicio_sesion";

function AppContent() {
  const { isAuthenticated, login } = useAuth();

  return (
    <div className="app-shell">
      {isAuthenticated ? <Home /> : <Login onLogin={login} />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
