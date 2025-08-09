import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const recentPosts = [
    {
      id: 1,
      title: "欢迎来到我的博客",
      excerpt: "这是我个人博客的第一篇文章，分享一些关于技术学习和生活感悟的内容...",
      date: "2024-01-15",
      readTime: "3分钟阅读"
    },
    {
      id: 2,
      title: "React开发最佳实践",
      excerpt: "分享一些在React开发中积累的经验和最佳实践，包括组件设计、状态管理等...",
      date: "2024-01-10",
      readTime: "5分钟阅读"
    },
    {
      id: 3,
      title: "前端性能优化技巧",
      excerpt: "探讨现代前端应用的性能优化策略，从代码分割到图片优化的实用技巧...",
      date: "2024-01-05",
      readTime: "7分钟阅读"
    }
  ]

  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              你好，我是 <span className="highlight">Leran</span>
            </h1>
            <p className="hero-description">
              欢迎来到我的个人博客！这里分享技术学习、编程经验和生活感悟。
              希望我的内容能够对你有所帮助。
            </p>
            <div className="hero-actions">
              <Link to="/blog" className="btn btn-primary">
                阅读博客
              </Link>
              <Link to="/about" className="btn btn-secondary">
                了解更多
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="recent-posts">
          <h2 className="section-title">最新文章</h2>
          <div className="posts-grid">
            {recentPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-content">
                  <h3 className="post-title">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="view-all">
            <Link to="/blog" className="btn btn-outline">
              查看所有文章
            </Link>
          </div>
        </section>

        {/* About Preview */}
        <section className="about-preview">
          <div className="about-content">
            <h2>关于我</h2>
            <p>
              我是一名前端开发者，热衷于学习新技术和分享经验。
              专注于React、Vue等前端框架的开发，同时也在探索全栈开发的领域。
            </p>
            <Link to="/about" className="learn-more">
              了解更多 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
