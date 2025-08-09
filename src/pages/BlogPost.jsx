import { useParams, Link } from 'react-router-dom'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()
  
  // 模拟博客数据
  const posts = {
    '1': {
      title: "欢迎来到我的博客",
      date: "2024-01-15",
      readTime: "3分钟阅读",
      tags: ["博客", "介绍", "个人"],
      content: `
        <h2>欢迎来到我的个人博客！</h2>
        
        <p>这是我博客的第一篇文章，我很高兴能够在这里与大家分享我的想法、经验和学习心得。</p>
        
        <h3>为什么要写博客？</h3>
        
        <p>写博客对我来说有几个重要的意义：</p>
        
        <ul>
          <li><strong>记录学习过程：</strong>通过写作来整理和巩固所学的知识</li>
          <li><strong>分享经验：</strong>将工作和学习中的经验分享给其他人</li>
          <li><strong>提升表达能力：</strong>通过文字表达来提高逻辑思维和沟通能力</li>
          <li><strong>建立个人品牌：</strong>展示自己的专业能力和思考深度</li>
        </ul>
        
        <h3>博客内容规划</h3>
        
        <p>在这个博客中，我计划分享以下几个方面的内容：</p>
        
        <blockquote>
          <p>技术文章将是主要内容，包括前端开发、JavaScript、React等相关技术的学习心得和实践经验。</p>
        </blockquote>
        
        <ol>
          <li><strong>技术教程：</strong>详细的技术学习指南和最佳实践</li>
          <li><strong>项目分享：</strong>个人项目的开发过程和技术选型</li>
          <li><strong>工具推荐：</strong>提高开发效率的工具和方法</li>
          <li><strong>行业思考：</strong>对技术发展趋势的观察和思考</li>
        </ol>
        
        <h3>联系与交流</h3>
        
        <p>如果您对我的文章有任何问题或建议，欢迎通过以下方式与我联系：</p>
        
        <ul>
          <li>邮箱：your-email@example.com</li>
          <li>GitHub：https://github.com/yourusername</li>
          <li>Twitter：@yourusername</li>
        </ul>
        
        <p>感谢您的阅读，希望我的博客能够对您有所帮助！</p>
      `
    },
    '2': {
      title: "React开发最佳实践",
      date: "2024-01-10",
      readTime: "5分钟阅读",
      tags: ["React", "前端", "最佳实践"],
      content: `
        <h2>React开发最佳实践指南</h2>
        
        <p>在React开发过程中，遵循最佳实践可以让我们的代码更加清晰、可维护和高效。以下是我在实际项目中总结的一些经验。</p>
        
        <h3>组件设计原则</h3>
        
        <h4>1. 单一职责原则</h4>
        <p>每个组件应该只负责一个功能，这样可以提高组件的可复用性和可测试性。</p>
        
        <pre><code>// ❌ 不好的例子
function UserProfile({ user, posts, comments }) {
  // 处理用户信息、文章和评论
}

// ✅ 好的例子
function UserProfile({ user }) {
  return (
    &lt;div&gt;
      &lt;UserInfo user={user} /&gt;
      &lt;UserPosts userId={user.id} /&gt;
      &lt;UserComments userId={user.id} /&gt;
    &lt;/div&gt;
  )
}</code></pre>
        
        <h4>2. Props接口设计</h4>
        <p>使用TypeScript或PropTypes来定义组件的接口，确保类型安全。</p>
        
        <pre><code>interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
}

function Button({ children, variant = 'primary', size = 'medium', ...props }: ButtonProps) {
  return (
    &lt;button className={\`btn btn-\${variant} btn-\${size}\`} {...props}&gt;
      {children}
    &lt;/button&gt;
  )
}</code></pre>
        
        <h3>状态管理</h3>
        
        <h4>1. 选择合适的状态管理方案</h4>
        <ul>
          <li><strong>useState：</strong>简单的本地状态</li>
          <li><strong>useReducer：</strong>复杂的状态逻辑</li>
          <li><strong>Context：</strong>跨组件的全局状态</li>
          <li><strong>外部库：</strong>复杂应用的状态管理（Redux、Zustand等）</li>
        </ul>
        
        <h4>2. 状态提升原则</h4>
        <p>将状态放在需要它的最小公共父组件中。</p>
        
        <h3>性能优化</h3>
        
        <h4>1. 使用React.memo</h4>
        <pre><code>const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return (
    &lt;div&gt;
      {/* 复杂的渲染逻辑 */}
    &lt;/div&gt;
  )
})</code></pre>
        
        <h4>2. 合理使用useCallback和useMemo</h4>
        <pre><code>function Parent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0)
  }, [items])
  
  const handleClick = useCallback((id) => {
    // 处理点击事件
  }, [])
  
  return (
    &lt;Child value={expensiveValue} onClick={handleClick} /&gt;
  )
}</code></pre>
        
        <h3>代码组织</h3>
        
        <p>良好的代码组织可以提高开发效率和代码可维护性：</p>
        
        <ul>
          <li>按功能模块组织文件夹结构</li>
          <li>使用自定义Hooks提取可复用逻辑</li>
          <li>保持组件文件简洁，避免过大的组件</li>
          <li>使用绝对路径导入，避免相对路径的混乱</li>
        </ul>
        
        <blockquote>
          <p>记住，最佳实践不是一成不变的规则，而是指导原则。在实际开发中，要根据具体场景灵活应用。</p>
        </blockquote>
      `
    },
    '3': {
      title: "前端性能优化技巧",
      date: "2024-01-05",
      readTime: "7分钟阅读",
      tags: ["性能优化", "前端", "webpack"],
      content: `
        <h2>前端性能优化实用指南</h2>
        
        <p>前端性能优化是提升用户体验的关键因素。本文将分享一些实用的性能优化技巧，帮助你构建更快的Web应用。</p>
        
        <h3>加载性能优化</h3>
        
        <h4>1. 代码分割（Code Splitting）</h4>
        <p>通过代码分割可以减少初始加载时间，按需加载应用的不同部分。</p>
        
        <pre><code>// 路由级别的代码分割
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/about" element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  )
}</code></pre>
        
        <h4>2. 资源预加载</h4>
        <ul>
          <li><strong>preload：</strong>预加载当前页面需要的关键资源</li>
          <li><strong>prefetch：</strong>预加载可能需要的资源</li>
          <li><strong>preconnect：</strong>预连接到第三方域名</li>
        </ul>
        
        <pre><code>&lt;!-- 预加载关键字体 --&gt;
&lt;link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin&gt;

&lt;!-- 预连接到第三方服务 --&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;</code></pre>
        
        <h3>图片优化</h3>
        
        <h4>1. 现代图片格式</h4>
        <p>使用WebP、AVIF等现代格式可以显著减少文件大小。</p>
        
        <pre><code>&lt;picture&gt;
  &lt;source srcset="image.avif" type="image/avif"&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="Description"&gt;
&lt;/picture&gt;</code></pre>
        
        <h4>2. 响应式图片</h4>
        <pre><code>&lt;img 
  src="image-800w.jpg"
  srcset="image-400w.jpg 400w, image-800w.jpg 800w, image-1200w.jpg 1200w"
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
  alt="Responsive image"
&gt;</code></pre>
        
        <h4>3. 懒加载</h4>
        <pre><code>// 原生懒加载
&lt;img src="image.jpg" loading="lazy" alt="Lazy loaded image"&gt;

// 使用Intersection Observer API
function useLazyLoading() {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]')
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          imageObserver.unobserve(img)
        }
      })
    })
    
    images.forEach(img => imageObserver.observe(img))
  }, [])
}</code></pre>
        
        <h3>渲染性能优化</h3>
        
        <h4>1. 虚拟滚动</h4>
        <p>对于大量数据的列表，使用虚拟滚动只渲染可见的项目。</p>
        
        <pre><code>import { VariableSizeList } from 'react-window'

function VirtualList({ items }) {
  const getItemSize = (index) => items[index].height
  
  const Item = ({ index, style }) => (
    &lt;div style={style}&gt;
      {items[index].content}
    &lt;/div&gt;
  )
  
  return (
    &lt;VariableSizeList
      height={600}
      itemCount={items.length}
      itemSize={getItemSize}
    &gt;
      {Item}
    &lt;/VariableSizeList&gt;
  )
}</code></pre>
        
        <h4>2. 防抖和节流</h4>
        <pre><code>// 防抖Hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return () => clearTimeout(handler)
  }, [value, delay])
  
  return debouncedValue
}

// 节流Hook
function useThrottle(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastRan = useRef(Date.now())
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value)
        lastRan.current = Date.now()
      }
    }, limit - (Date.now() - lastRan.current))
    
    return () => clearTimeout(handler)
  }, [value, limit])
  
  return throttledValue
}</code></pre>
        
        <h3>缓存策略</h3>
        
        <h4>1. HTTP缓存</h4>
        <p>合理设置缓存头，提高资源复用率：</p>
        
        <ul>
          <li><strong>静态资源：</strong>长期缓存 + 文件指纹</li>
          <li><strong>HTML文件：</strong>短期缓存或不缓存</li>
          <li><strong>API数据：</strong>根据更新频率设置合适的缓存时间</li>
        </ul>
        
        <h4>2. Service Worker缓存</h4>
        <pre><code>// 缓存关键资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/static/css/main.css',
        '/static/js/main.js'
      ])
    })
  )
})</code></pre>
        
        <h3>性能监控</h3>
        
        <p>使用Web Vitals等指标监控应用性能：</p>
        
        <pre><code>import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)</code></pre>
        
        <blockquote>
          <p>性能优化是一个持续的过程，需要根据实际的性能数据来调整优化策略。记住，过早的优化是万恶之源，要在性能问题真正出现时再进行针对性的优化。</p>
        </blockquote>
      `
    }
  }
  
  const post = posts[id] || {
    title: "文章未找到",
    date: "",
    readTime: "",
    tags: [],
    content: "<p>抱歉，您要查找的文章不存在。</p>"
  }

  return (
    <div className="blog-post">
      <div className="container">
        <article className="post-content">
          <header className="post-header">
            <nav className="breadcrumb">
              <Link to="/blog">← 返回博客列表</Link>
            </nav>
            
            <h1 className="post-title">{post.title}</h1>
            
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            
            {post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </header>
          
          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <footer className="post-footer">
            <div className="post-navigation">
              <Link to="/blog" className="nav-link">
                ← 返回博客列表
              </Link>
            </div>
            
            <div className="post-share">
              <h4>分享这篇文章</h4>
              <div className="share-buttons">
                <button onClick={() => navigator.share && navigator.share({
                  title: post.title,
                  url: window.location.href
                })}>
                  分享
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
