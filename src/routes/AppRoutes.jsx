import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/public/Home'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import VerifyEmail from '../pages/auth/VerifyEmail'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ResetPassword from '../pages/auth/ResetPassword'

// Dashboards
import AdminDashboard from '../pages/admin/Dashboard'
import SellerDashboard from '../pages/seller/Dashboard'
import UserDashboard from '../pages/user/Dashboard'
import UserCart from '../pages/user/Cart'
import UserOrders from '../pages/user/MyOrders'
import DeliveryDashboard from '../pages/delivery/Dashboard'
import DeliveryOrders from '../pages/delivery/MyDeliveries'

// Layouts
import AdminLayout from '../components/layouts/AdminLayout'
import SellerLayout from '../components/layouts/SellerLayout'
import DeliveryLayout from '../components/layouts/DeliveryLayout'
import MainLayout from '../components/layouts/MainLayout'

// Route Guards
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import SellerRoute from './SellerRoute'
import DeliveryRoute from './DeliveryRoute'
import User from '../pages/admin/User'
import AddCategory from '../pages/admin/AddCategory'
import CategoryList from '../pages/admin/CategoryList'

const AppRoutes = () => {
  const auth = useSelector(state => state.auth)
  const isAuthenticated = auth.isAuthenticated
  const userRole = auth.user?.userType?.role

  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Admin Routes */}
        <Route 
          path="/admin/dashboard" 
          element={
            <AdminRoute isAdmin={userRole === 'admin'}>  
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </AdminRoute>
          } 
        />
    <Route 
          path="/admin/users" 
          element={
            <AdminRoute isAdmin={userRole === 'admin'}>  
              <AdminLayout>
                <User />
              </AdminLayout>
            </AdminRoute>
          } 
        />
        
    <Route 
          path="/admin/categories" 
          element={
            <AdminRoute isAdmin={userRole === 'admin'}>  
              <AdminLayout>
                <AddCategory />
              </AdminLayout>
            </AdminRoute>
          } 
        />
             
    <Route 
          path="/admin/categoriesList" 
          element={
            <AdminRoute isAdmin={userRole === 'admin'}>  
              <AdminLayout>
                <CategoryList />
              </AdminLayout>
            </AdminRoute>
          } 
        />
        {/* Seller Routes */}
        <Route 
          path="/seller/dashboard" 
          element={
            <SellerRoute isSeller={userRole === 'seller'}>
              <SellerLayout>
                <SellerDashboard />
              </SellerLayout>
            </SellerRoute>
          } 
        />

        {/* User Routes */}
        <Route 
          path="/user/dashboard" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MainLayout>
                <UserDashboard />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/user/cart" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MainLayout>
                <UserCart />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/user/orders" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MainLayout>
                <UserOrders />
              </MainLayout>
            </PrivateRoute>
          } 
        />

        {/* Delivery Routes */}
        <Route 
          path="/delivery/dashboard" 
          element={
            <DeliveryRoute isDelivery={userRole === 'delivery'}>
              <DeliveryLayout>
                <DeliveryDashboard />
              </DeliveryLayout>
            </DeliveryRoute>
          } 
        />
        <Route 
          path="/delivery/orders" 
          element={
            <DeliveryRoute isDelivery={userRole === 'delivery'}>
              <DeliveryLayout>
                <DeliveryOrders />
              </DeliveryLayout>
            </DeliveryRoute>
          } 
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}

export default AppRoutes
