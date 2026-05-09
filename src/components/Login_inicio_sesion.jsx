import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("token", `fake-jwt-${Date.now()}`);
      localStorage.setItem("remember", String(form.remember));
      setLoading(false);
      setSuccessMessage("¡Inicio de sesión exitoso!");
    }, 1200);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606811841689-23db3c432bda?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-900/50 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative z-10 w-[350px] p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl text-white animate-fadeIn">

        <h2 className="text-2xl font-bold text-center mb-6">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Correo"
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-indigo-400"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full p-3 rounded-lg bg-white/20 outline-none focus:ring-2 focus:ring-indigo-400"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-sm"
            >
              {showPassword ? "Ocultar" : "Ver"}
            </span>

            {errors.password && (
              <p className="text-red-400 text-sm">
                {errors.password}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition flex justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Ingresar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
import Login from "./Login_inicio_sesion";