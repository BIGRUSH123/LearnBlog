import './About.css'

function About() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Vue.js', level: 80 },
    { name: 'CSS/SCSS', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'Webpack', level: 70 }
  ]

  const experiences = [
    {
      title: "前端开发工程师",
      company: "某科技公司",
      period: "2022年 - 至今",
      description: "负责Web应用的前端开发，主要使用React和Vue.js框架，参与多个大型项目的开发和维护。"
    },
    {
      title: "初级前端开发",
      company: "某互联网公司",
      period: "2021年 - 2022年",
      description: "参与公司官网和内部系统的前端开发工作，学习并应用现代前端开发技术栈。"
    }
  ]

  const education = [
    {
      degree: "计算机科学与技术学士",
      school: "某大学",
      period: "2017年 - 2021年",
      description: "主修计算机相关课程，参与多个课程项目和实习项目。"
    }
  ]

  return (
    <div className="about">
      <div className="container">
        <header className="about-header">
          <div className="profile-section">
            <div className="profile-image">
              <div className="avatar">L</div>
            </div>
            <div className="profile-info">
              <h1>关于我</h1>
              <h2>Leran - 前端开发工程师</h2>
              <p className="intro">
                你好！我是Leran，一名热爱技术的前端开发工程师。
                我专注于创建优秀的用户体验和高质量的代码，
                喜欢学习新技术并分享我的经验和想法。
              </p>
            </div>
          </div>
        </header>

        <section className="about-content">
          <div className="content-section">
            <h3>个人简介</h3>
            <p>
              我是一名有着3年以上前端开发经验的工程师，专注于JavaScript生态系统和现代前端框架。
              我热衷于编写干净、可维护的代码，并且始终关注用户体验和性能优化。
            </p>
            <p>
              除了编程，我还喜欢阅读技术书籍、参与开源项目，并通过博客分享我的学习心得。
              我相信持续学习和分享是成为更好开发者的关键。
            </p>
          </div>

          <div className="content-section">
            <h3>技能专长</h3>
            <div className="skills-grid">
              {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h3>工作经历</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <div className="company-period">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h3>教育背景</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <div className="company-period">
                      <span className="company">{edu.school}</span>
                      <span className="period">{edu.period}</span>
                    </div>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section">
            <h3>兴趣爱好</h3>
            <div className="interests">
              <div className="interest-item">
                <h4>🚀 技术探索</h4>
                <p>关注最新的前端技术发展，喜欢尝试新的工具和框架</p>
              </div>
              <div className="interest-item">
                <h4>📚 阅读学习</h4>
                <p>阅读技术书籍和文章，持续学习新知识</p>
              </div>
              <div className="interest-item">
                <h4>✍️ 写作分享</h4>
                <p>通过博客分享技术经验和学习心得</p>
              </div>
              <div className="interest-item">
                <h4>🎮 开源贡献</h4>
                <p>参与开源项目，为社区贡献代码</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h3>联系方式</h3>
            <div className="contact-info">
              <div className="contact-item">
                <strong>邮箱：</strong>
                <a href="mailto:your-email@example.com">your-email@example.com</a>
              </div>
              <div className="contact-item">
                <strong>GitHub：</strong>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </div>
              <div className="contact-item">
                <strong>LinkedIn：</strong>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
