import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import fondoImagen from '../assets/fondo.jpg'

const RegisterPage = () => {
  const pageStyle = {
    backgroundImage: `url(${fondoImagen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={pageStyle}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Crear Cuenta</h2>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" placeholder="Juan Pérez" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="nombre@ejemplo.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Tipo de Documento</label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Seleccionar Tipo de Documento
                      </option>
                      <option value="1">Cédula de Ciudadanía (C.C.)</option>
                      <option value="2">Tarjeta de Identidad (T.I.)</option>
                      <option value="3">Cédula de Extranjería (C.E.)</option>
                      <option value="4">Permiso Especial de Permanencia (PEP)</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="documento" className="form-label">
                      Número de Documento
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="form-control"
                      id="documento"
                      placeholder="Ingresa tu número de documento"
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" required />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Registrarse
                  </button>
                </form>

                <div className="text-center mt-3">
                  <small>
                    ¿Ya tienes cuenta? <Link to="/register">Inicia sesión</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
