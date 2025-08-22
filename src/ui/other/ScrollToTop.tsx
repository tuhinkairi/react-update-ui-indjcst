import React from 'react'
import { useLocation } from 'react-router'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    const el = document.getElementById('container-main') // id of the parent
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [pathname])

  return null
}

export default ScrollToTop
