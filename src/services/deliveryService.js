import api from './api'

export const deliveryService = {
  getAssignedDeliveries: () => api.get('/delivery/orders'),
  updateDeliveryStatus: (orderId, status) => api.put(`/delivery/orders/${orderId}`, { status }),
  getDeliveryDetails: (orderId) => api.get(`/delivery/orders/${orderId}`),
  confirmDelivery: (orderId) => api.post(`/delivery/orders/${orderId}/confirm`)
}
