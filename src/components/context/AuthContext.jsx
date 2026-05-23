import { createContext, useContext, useState } from "react";
import { loginUser } from "../../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("token")),
  );
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) return null;

    try {
      return JSON.parse(savedUser);
    } catch {
      return null;
    }
  });

  const login = async ({ email, password, remember = false } = {}) => {
    const session = await loginUser({ email, password });

    localStorage.setItem("token", session.token);
    localStorage.setItem("user", JSON.stringify(session.user));
    localStorage.setItem("remember", String(remember));
    setUser(session.user);
    setIsAuthenticated(true);

    return session;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
