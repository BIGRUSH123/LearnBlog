import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Leran's Blog</h3>
            <p>分享技术、生活与思考</p>
          </div>
          
          <div className="footer-section">
            <h4>快速链接</h4>
            <ul className="footer-links">
              <li><a href="/">首页</a></li>
              <li><a href="/blog">博客</a></li>
              <li><a href="/about">关于</a></li>
              <li><a href="/contact">联系</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>社交媒体</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="mailto:your-email@example.com">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Leran's Blog. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
