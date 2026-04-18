import api from './api'

export const adminService = {
  getDashboardStats: () => api.get('/admin/stats'),
  getUsers: () => api.get('/admin/users'),
  getOrders: () => api.get('/admin/orders'),
  createCategory: (categoryData) => api.post('/admin/categories', categoryData),
  createSeller: (sellerData) => api.post('/admin/sellers', sellerData),
  createDeliveryBoy: (deliveryData) => api.post('/admin/delivery', deliveryData),
  assignDelivery: (orderId, deliveryId) => api.post(`/admin/orders/${orderId}/assign`, { deliveryId })
}
