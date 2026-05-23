import apiClient from './apiClient'

const useMockApi = import.meta.env.VITE_USE_MOCK_API !== 'false'

const wait = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })

export const loginUser = async ({ email, password }) => {
  if (useMockApi) {
    await wait(600)

    const normalizedEmail = email.trim().toLowerCase()
    const isAdmin = normalizedEmail === 'admin@dentvision.com'

    return {
      token: `fake-jwt-${Date.now()}`,
      user: {
        id: normalizedEmail,
        name: normalizedEmail.split('@')[0],
        email: normalizedEmail,
        role: isAdmin ? 'admin' : 'user',
      },
    }
  }

  return apiClient.post('/auth/login', { email, password })
}

export const registerUser = async ({ name, email, password }) => {
  if (useMockApi) {
    await wait(600)

    return {
      id: crypto.randomUUID(),
      name,
      email,
    }
  }

  return apiClient.post('/auth/register', { name, email, password })
}

export const recoverPassword = async ({ email }) => {
  if (useMockApi) {
    await wait(600)

    return {
      message: `Enviamos instrucciones a ${email}.`,
    }
  }

  return apiClient.post('/auth/recover-password', { email })
}
