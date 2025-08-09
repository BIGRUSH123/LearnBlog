import { Link } from 'react-router-dom'
import './Blog.css'

function Blog() {
  const posts = [
    {
      id: 1,
      title: "欢迎来到我的博客",
      excerpt: "这是我个人博客的第一篇文章，分享一些关于技术学习和生活感悟的内容。在这里，我会记录我的学习历程、工作经验以及对技术发展的思考。",
      date: "2024-01-15",
      readTime: "3分钟阅读",
      tags: ["博客", "介绍", "个人"]
    },
    {
      id: 2,
      title: "React开发最佳实践",
      excerpt: "分享一些在React开发中积累的经验和最佳实践，包括组件设计、状态管理、性能优化等方面的内容。这些经验来自于实际项目开发中的总结。",
      date: "2024-01-10",
      readTime: "5分钟阅读",
      tags: ["React", "前端", "最佳实践"]
    },
    {
      id: 3,
      title: "前端性能优化技巧",
      excerpt: "探讨现代前端应用的性能优化策略，从代码分割到图片优化的实用技巧。包括webpack优化、懒加载、缓存策略等多个方面的内容。",
      date: "2024-01-05",
      readTime: "7分钟阅读",
      tags: ["性能优化", "前端", "webpack"]
    },
    {
      id: 4,
      title: "JavaScript ES6+新特性详解",
      excerpt: "深入解析JavaScript ES6及以上版本的新特性，包括箭头函数、解构赋值、模块化、async/await等，帮助你更好地使用现代JavaScript。",
      date: "2024-01-01",
      readTime: "8分钟阅读",
      tags: ["JavaScript", "ES6", "前端"]
    },
    {
      id: 5,
      title: "Git版本控制实用指南",
      excerpt: "从基础到进阶的Git使用指南，包括常用命令、分支管理、冲突解决、团队协作等实用技巧，让你更高效地使用Git进行版本控制。",
      date: "2023-12-28",
      readTime: "6分钟阅读",
      tags: ["Git", "版本控制", "工具"]
    },
    {
      id: 6,
      title: "CSS Grid布局完全指南",
      excerpt: "全面介绍CSS Grid布局系统，从基本概念到高级应用，包含大量实例和最佳实践，帮助你掌握这个强大的布局工具。",
      date: "2023-12-20",
      readTime: "10分钟阅读",
      tags: ["CSS", "Grid", "布局"]
    }
  ]

  return (
    <div className="blog">
      <div className="container">
        <header className="blog-header">
          <h1>博客文章</h1>
          <p>分享技术经验、学习心得和生活感悟</p>
        </header>

        <div className="blog-content">
          <div className="posts-list">
            {posts.map(post => (
              <article key={post.id} className="blog-post-card">
                <div className="post-header">
                  <h2 className="post-title">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
                
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-footer">
                  <div className="post-tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    阅读全文 →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-section">
              <h3>热门标签</h3>
              <div className="tag-cloud">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">前端</span>
                <span className="tag">CSS</span>
                <span className="tag">性能优化</span>
                <span className="tag">Git</span>
                <span className="tag">最佳实践</span>
                <span className="tag">工具</span>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>归档</h3>
              <div className="archive-list">
                <a href="#" className="archive-item">
                  <span>2024年1月</span>
                  <span className="count">(3)</span>
                </a>
                <a href="#" className="archive-item">
                  <span>2023年12月</span>
                  <span className="count">(3)</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Blog
