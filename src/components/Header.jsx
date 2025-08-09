import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span>Leran's Blog</span>
          </Link>
          
          <nav className="nav">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              首页
            </Link>
            <Link to="/blog" className={`nav-link ${isActive('/blog')}`}>
              博客
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              关于
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              联系
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
