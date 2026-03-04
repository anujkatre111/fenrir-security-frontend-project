import React from 'react'

const AnimatedPage = ({ children, className = '' }) => (
  <div className={`animate-page-enter ${className}`} role="main">
    {children}
  </div>
)

export default AnimatedPage
