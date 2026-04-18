import React from 'react'

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      {/* Header/Navbar */}
      <header className="main-header">
        {/* Navbar component will go here */}
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="main-footer">
        {/* Footer component will go here */}
      </footer>
    </div>
  )
}
