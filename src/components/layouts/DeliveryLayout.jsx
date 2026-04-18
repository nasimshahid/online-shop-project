import React from 'react'

export default function DeliveryLayout({ children }) {
  return (
    <div className="delivery-layout">
      {/* Delivery Header */}
      <header className="delivery-header">
        {/* Delivery Navbar component will go here */}
      </header>

      <div className="delivery-container">
        {/* Delivery Sidebar */}
        <aside className="delivery-sidebar">
          {/* Delivery navigation/menu component will go here */}
        </aside>

        {/* Delivery Main Content */}
        <main className="delivery-main-content">
          {children}
        </main>
      </div>
    </div>
  )
}
