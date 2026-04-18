import api from './api'

export const productService = {
  getProducts: (filters) => api.get('/products', { params: filters }),
  getProductById: (productId) => api.get(`/products/${productId}`),
  createProduct: (productData) => api.post('/products', productData),
  updateProduct: (productId, productData) => api.put(`/products/${productId}`, productData),
  deleteProduct: (productId) => api.delete(`/products/${productId}`),
  getCategories: () => api.get('/categories')
}
