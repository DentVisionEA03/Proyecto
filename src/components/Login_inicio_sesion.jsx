import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [recoverEmail, setRecoverEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setErrors({});
    setSuccessMessage("");
    setLoading(false);
  };

  const validateLogin = () => {
    const err = {};

    if (!form.email.trim()) {
      err.email = "El correo es obligatorio";
    } else if (!EMAIL_REGEX.test(form.email)) {
      err.email = "Ingresa un correo válido";
    }

    if (!form.password) {
      err.password = "La contraseña es obligatoria";
    } else if (form.password.length < 6) {
      err.password = "Mínimo 6 caracteres";
    }

    setErrors(err);
    setSuccessMessage("");
    return Object.keys(err).length === 0;
  };

  const validateRegister = () => {
    const err = {};

    if (!registerForm.name.trim()) {
      err.name = "El nombre es obligatorio";
    }

    if (!registerForm.email.trim()) {
      err.email = "El correo es obligatorio";
    } else if (!EMAIL_REGEX.test(registerForm.email)) {
      err.email = "Ingresa un correo válido";
    }

    if (!registerForm.password) {
      err.password = "La contraseña es obligatoria";
    } else if (registerForm.password.length < 6) {
      err.password = "Mínimo 6 caracteres";
    }

    setErrors(err);
    setSuccessMessage("");
    return Object.keys(err).length === 0;
  };

  const validateRecover = () => {
    const err = {};

    if (!recoverEmail.trim()) {
      err.email = "El correo es obligatorio";
    } else if (!EMAIL_REGEX.test(recoverEmail)) {
      err.email = "Ingresa un correo válido";
    }

    setErrors(err);
    setSuccessMessage("");
    return Object.keys(err).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!validateLogin()) return;

    setLoading(true);

    setTimeout(() => {
      onLogin({ remember: form.remember });
      setLoading(false);
      setSuccessMessage("¡Inicio de sesión exitoso!");
    }, 1200);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!validateRegister()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Registro exitoso. Ya puedes iniciar sesión.");
      setForm((current) => ({ ...current, email: registerForm.email }));
      setRegisterForm({ name: "", email: "", password: "" });
      setMode("login");
    }, 900);
  };

  const handleRecoverSubmit = (e) => {
    e.preventDefault();

    if (!validateRecover()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(`Enviamos instrucciones a ${recoverEmail}.`);
      setRecoverEmail("");
      setMode("login");
    }, 900);
  };

  return (
    <div className="login-page">
      <div className="login-overlay"></div>

      <div className="login-card animate-fadeIn">
        <h2>
          {mode === "login" && "Iniciar Sesión"}
          {mode === "register" && "Crear Cuenta"}
          {mode === "recover" && "Recuperar Contraseña"}
        </h2>

        {mode === "login" && (
          <form onSubmit={handleLoginSubmit} className="login-form">

            <div className="form-field">
              <input
                type="email"
                placeholder="Correo"
                className="form-input"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="form-error">{errors.email}</p>
              )}
            </div>

            <div className="form-field password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="form-input"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />

              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="show-password-btn"
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>

              {errors.password && (
                <p className="form-error">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="login-options">
              <label className="remember-field">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) =>
                    setForm({ ...form, remember: e.target.checked })
                  }
                />
                Recordarme
              </label>

              <button
                type="button"
                className="text-link"
                onClick={() => changeMode("recover")}
              >
                Olvidé mi contraseña
              </button>
            </div>

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner"></div>
              ) : (
                "Ingresar"
              )}
            </button>

            <p className="form-switch">
              ¿No tienes cuenta?{" "}
              <button
                type="button"
                className="text-link"
                onClick={() => changeMode("register")}
              >
                Registrarse
              </button>
            </p>
          </form>
        )}

        {mode === "register" && (
          <form onSubmit={handleRegisterSubmit} className="login-form">
            <div className="form-field">
              <input
                type="text"
                placeholder="Nombre completo"
                className="form-input"
                value={registerForm.name}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, name: e.target.value })
                }
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-field">
              <input
                type="email"
                placeholder="Correo"
                className="form-input"
                value={registerForm.email}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, email: e.target.value })
                }
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-field">
              <input
                type="password"
                placeholder="Contraseña"
                className="form-input"
                value={registerForm.password}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  })
                }
              />
              {errors.password && (
                <p className="form-error">{errors.password}</p>
              )}
            </div>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Crear cuenta"}
            </button>

            <p className="form-switch">
              ¿Ya tienes cuenta?{" "}
              <button
                type="button"
                className="text-link"
                onClick={() => changeMode("login")}
              >
                Iniciar sesión
              </button>
            </p>
          </form>
        )}

        {mode === "recover" && (
          <form onSubmit={handleRecoverSubmit} className="login-form">
            <p className="form-help">
              Escribe tu correo y te enviaremos instrucciones para recuperar tu contraseña.
            </p>

            <div className="form-field">
              <input
                type="email"
                placeholder="Correo"
                className="form-input"
                value={recoverEmail}
                onChange={(e) => setRecoverEmail(e.target.value)}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Enviar instrucciones"}
            </button>

            <p className="form-switch">
              <button
                type="button"
                className="text-link"
                onClick={() => changeMode("login")}
              >
                Volver al inicio de sesión
              </button>
            </p>
          </form>
        )}

        {successMessage && (
          <p className="form-success">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}
