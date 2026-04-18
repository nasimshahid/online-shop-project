import React from 'react'
import { Navigate } from 'react-router-dom'

const SellerRoute = ({ children, isSeller }) => {
  return isSeller ? children : <Navigate to="/login" replace />
}

export default SellerRoute
