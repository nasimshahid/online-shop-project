import api from './api'

export const authService = {
  signup: async (userData) => {
    try {
      const response = await api.post('http://localhost:4000/api/v1/signup', userData)
      return response.data
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Signup failed',
        status: error.response?.status
      }
    }
  },

  verifyEmail: async (data) => {
    try {
      const response = await api.post('http://localhost:4000/api/v1/verify-email', data)
      return response.data
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Email verification failed',
        status: error.response?.status
      }
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await api.post('http://localhost:4000/api/v1/forgot-password', { email })
      return response.data
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Failed to send reset code',
        status: error.response?.status
      }
    }
  },

  resetPassword: async (data) => {
    try {
      const response = await api.post('http://localhost:4000/api/v1/reset-password', data)
      return response.data
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Password reset failed',
        status: error.response?.status
      }
    }
  },

  login: async (credentials) => {
    try {
      const response = await api.post('http://localhost:4000/api/v1/login', credentials)
      return response.data
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Login failed',
        status: error.response?.status
      }
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
