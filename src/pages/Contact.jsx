import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里可以添加发送邮件的逻辑
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // 重置表单
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact">
      <div className="container">
        <header className="contact-header">
          <h1>联系我</h1>
          <p>有任何问题或想要合作？欢迎随时与我联系！</p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <h2>联系方式</h2>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h3>邮箱</h3>
                  <a href="mailto:your-email@example.com">your-email@example.com</a>
                  <p>我通常会在24小时内回复邮件</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💼</div>
                <div className="method-info">
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/yourusername
                  </a>
                  <p>专业网络和职业相关的联系</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🐙</div>
                <div className="method-info">
                  <h3>GitHub</h3>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    github.com/yourusername
                  </a>
                  <p>查看我的开源项目和代码</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🐦</div>
                <div className="method-info">
                  <h3>Twitter</h3>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    @yourusername
                  </a>
                  <p>技术讨论和日常分享</p>
                </div>
              </div>
            </div>

            <div className="availability">
              <h3>工作时间</h3>
              <p>周一至周五：9:00 - 18:00 (北京时间)</p>
              <p>周末：根据情况回复</p>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>发送消息</h2>
            
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>消息已发送！</h3>
                <p>感谢您的消息，我会尽快回复您。</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">邮箱 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的邮箱地址"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">主题 *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="请简要描述您要讨论的内容"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">消息 *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="请详细描述您的问题或想法..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  发送消息
                </button>

                <p className="form-note">
                  * 必填字段。您的信息将被保密处理。
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="faq-section">
          <h2>常见问题</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>如何与您合作？</h3>
              <p>您可以通过邮件或LinkedIn联系我，详细描述您的项目需求和时间安排。我会根据我的时间安排和专业领域来评估合作可能性。</p>
            </div>

            <div className="faq-item">
              <h3>您提供哪些服务？</h3>
              <p>我主要提供前端开发、技术咨询、代码审查和技术写作等服务。具体可以根据您的需求进行定制。</p>
            </div>

            <div className="faq-item">
              <h3>您的技术专长是什么？</h3>
              <p>我专注于现代前端开发，包括React、Vue.js、JavaScript/TypeScript、性能优化、UI/UX实现等领域。</p>
            </div>

            <div className="faq-item">
              <h3>回复时间是多久？</h3>
              <p>我通常在收到邮件后24小时内回复。如果是紧急事项，请在邮件标题中注明"紧急"。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
