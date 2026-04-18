import api from './api'

export const orderService = {
  getOrders: () => api.get('/orders'),
  getOrderById: (orderId) => api.get(`/orders/${orderId}`),
  createOrder: (orderData) => api.post('/orders', orderData),
  updateOrderStatus: (orderId, status) => api.put(`/orders/${orderId}`, { status }),
  cancelOrder: (orderId) => api.post(`/orders/${orderId}/cancel`)
}
