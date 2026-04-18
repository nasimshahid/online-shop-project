import React from 'react'
import { Navigate } from 'react-router-dom'

const DeliveryRoute = ({ children, isDelivery }) => {
  return isDelivery ? children : <Navigate to="/login" replace />
}

export default DeliveryRoute
