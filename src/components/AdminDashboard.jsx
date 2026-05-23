import { useEffect, useMemo, useState } from 'react'
import AppLayout from './AppLayout'
import {
  cancelAppointment,
  getAllAppointments,
  updateAppointmentStatus,
} from '../services/appointmentService'

const statusLabels = {
  pending: 'Pendiente',
  confirmed: 'Confirmada',
}

const formatDate = (date) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}

function AdminDashboard() {
  const [appointments, setAppointments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const loadAppointments = async () => {
      setIsLoading(true)
      setError('')

      try {
        const savedAppointments = await getAllAppointments()
        setAppointments(savedAppointments)
      } catch (loadError) {
        setError(loadError.message || 'No pudimos cargar las citas.')
      } finally {
        setIsLoading(false)
      }
    }

    loadAppointments()
  }, [])

  const stats = useMemo(() => {
    const pending = appointments.filter((appointment) => appointment.status === 'pending').length
    const confirmed = appointments.filter((appointment) => appointment.status === 'confirmed').length

    return {
      total: appointments.length,
      pending,
      confirmed,
    }
  }, [appointments])

  const confirmAppointment = async (appointment) => {
    setActiveId(appointment.id)
    setError('')

    try {
      const updatedAppointment = await updateAppointmentStatus(
        appointment.id,
        'confirmed',
        appointment.ownerId,
      )

      setAppointments((currentAppointments) =>
        currentAppointments.map((currentAppointment) =>
          currentAppointment.id === appointment.id
            ? {
                ...currentAppointment,
                ...updatedAppointment,
                ownerId: currentAppointment.ownerId,
                ownerLabel: currentAppointment.ownerLabel,
              }
            : currentAppointment,
        ),
      )
    } catch (confirmError) {
      setError(confirmError.message || 'No pudimos confirmar la cita.')
    } finally {
      setActiveId('')
    }
  }

  const deleteAppointment = async (appointment) => {
    setActiveId(appointment.id)
    setError('')

    try {
      await cancelAppointment(appointment.id, appointment.ownerId)
      setAppointments((currentAppointments) =>
        currentAppointments.filter((currentAppointment) => currentAppointment.id !== appointment.id),
      )
    } catch (deleteError) {
      setError(deleteError.message || 'No pudimos eliminar la cita.')
    } finally {
      setActiveId('')
    }
  }

  return (
    <AppLayout>
      <main className="admin-page">
        <section className="admin-hero">
          <div>
            <span className="section-kicker">Administrador</span>
            <h1>Panel de citas</h1>
            <p>Revisa las solicitudes de los usuarios y confirma las reservas pendientes.</p>
          </div>
        </section>

        <section className="admin-stats" aria-label="Resumen de citas">
          <article>
            <span>Total</span>
            <strong>{stats.total}</strong>
          </article>
          <article>
            <span>Pendientes</span>
            <strong>{stats.pending}</strong>
          </article>
          <article>
            <span>Confirmadas</span>
            <strong>{stats.confirmed}</strong>
          </article>
        </section>

        {isLoading && <p className="appointments-state">Cargando citas...</p>}

        {!isLoading && error && (
          <div className="appointment-error" role="alert">
            {error}
          </div>
        )}

        {!isLoading && appointments.length === 0 && !error && (
          <div className="appointments-empty">
            <h3>No hay citas registradas</h3>
            <p>Cuando los usuarios agenden citas, apareceran en este panel.</p>
          </div>
        )}

        {!isLoading && appointments.length > 0 && (
          <section className="admin-table" aria-label="Listado de citas">
            <div className="admin-table-row admin-table-head">
              <span>Paciente</span>
              <span>Servicio</span>
              <span>Fecha</span>
              <span>Usuario</span>
              <span>Estado</span>
              <span>Acciones</span>
            </div>

            {appointments.map((appointment) => (
              <article className="admin-table-row" key={appointment.id}>
                <div>
                  <strong>{appointment.patient.fullName}</strong>
                  <small>{appointment.patient.phone}</small>
                </div>
                <div>
                  <strong>{appointment.appointment.service}</strong>
                  <small>{appointment.appointment.specialist}</small>
                </div>
                <div>
                  <strong>{formatDate(appointment.appointment.date)}</strong>
                  <small>{appointment.appointment.time}</small>
                </div>
                <span>{appointment.ownerLabel}</span>
                <span className={`appointment-status status-${appointment.status}`}>
                  {statusLabels[appointment.status] || appointment.status}
                </span>
                <div className="admin-actions">
                  {appointment.status !== 'confirmed' && (
                    <button
                      className="admin-confirm"
                      disabled={activeId === appointment.id}
                      onClick={() => confirmAppointment(appointment)}
                      type="button"
                    >
                      Confirmar
                    </button>
                  )}
                  <button
                    className="admin-delete"
                    disabled={activeId === appointment.id}
                    onClick={() => deleteAppointment(appointment)}
                    type="button"
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
    </AppLayout>
  )
}

export default AdminDashboard
