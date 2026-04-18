import React from 'react'

export default function SellerLayout({ children }) {
  return (
    <div className="seller-layout">
      {/* Seller Header */}
      <header className="seller-header">
        {/* Seller Navbar component will go here */}
      </header>

      <div className="seller-container">
        {/* Seller Sidebar */}
        <aside className="seller-sidebar">
          {/* Seller navigation/menu component will go here */}
        </aside>

        {/* Seller Main Content */}
        <main className="seller-main-content">
          {children}
        </main>
      </div>
    </div>
  )
}
