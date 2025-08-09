# Leran's Blog

一个使用 React + Vite 构建的现代化个人博客网站，部署在 GitHub Pages 上。

## 🌟 特性

- **现代化设计**: 简洁、响应式的UI设计
- **快速加载**: 使用 Vite 构建工具，提供极快的开发体验
- **移动友好**: 完全响应式设计，适配各种设备
- **SEO优化**: 良好的HTML结构和元数据
- **GitHub Pages部署**: 自动化部署流程

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **路由**: React Router DOM
- **样式**: CSS3 + CSS变量
- **部署**: GitHub Pages + GitHub Actions

## 📁 项目结构

```
LeranBlog/
├── public/                 # 静态资源
│   └── favicon.svg
├── src/
│   ├── components/         # 可复用组件
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/             # 页面组件
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Blog.jsx
│   │   ├── Blog.css
│   │   ├── BlogPost.jsx
│   │   ├── BlogPost.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx            # 主应用组件
│   ├── App.css
│   ├── main.jsx           # 应用入口
│   └── index.css          # 全局样式
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions部署配置
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/LeranBlog.git
cd LeranBlog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站。

### 4. 构建生产版本

```bash
npm run build
```

构建文件将生成在 `dist` 目录中。

## 🌐 部署到 GitHub Pages

### 方法一：自动部署（推荐）

1. 将代码推送到 GitHub 仓库的 `main` 分支
2. GitHub Actions 会自动构建并部署到 GitHub Pages
3. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

### 方法二：手动部署

```bash
npm run deploy
```

## 📝 自定义内容

### 修改个人信息

1. **基本信息**: 编辑 `src/pages/About.jsx` 中的个人信息
2. **联系方式**: 更新 `src/pages/Contact.jsx` 和 `src/components/Footer.jsx` 中的联系信息
3. **博客文章**: 在 `src/pages/Blog.jsx` 和 `src/pages/BlogPost.jsx` 中添加或修改文章内容

### 修改样式

- **主题色彩**: 编辑 `src/index.css` 中的 CSS 变量
- **布局样式**: 修改各个组件对应的 CSS 文件
- **响应式设计**: 调整媒体查询断点

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.jsx` 中添加新的路由
3. 在 `src/components/Header.jsx` 中添加导航链接

## 🎨 设计特色

- **渐变背景**: Hero区域使用现代渐变效果
- **卡片设计**: 内容区域采用卡片式布局
- **动画效果**: 悬停和过渡动画提升用户体验
- **typography**: 清晰的字体层级和阅读体验

## 📱 响应式设计

网站在以下设备上都能完美显示：

- 桌面电脑 (1200px+)
- 平板电脑 (768px - 1199px)
- 手机 (< 768px)

## 🔧 开发指南

### 添加新的博客文章

1. 在 `src/pages/Blog.jsx` 的 `posts` 数组中添加文章元数据
2. 在 `src/pages/BlogPost.jsx` 的 `posts` 对象中添加文章内容
3. 文章内容支持 HTML 格式，可以包含代码块、图片等

### 性能优化

- 使用 React.lazy() 进行代码分割
- 优化图片大小和格式
- 使用 CSS 变量减少样式重复
- 合理使用缓存策略

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 邮箱: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- 网站: [https://yourusername.github.io/LeranBlog](https://yourusername.github.io/LeranBlog)

---

⭐ 如果这个项目对你有帮助，请给个 star 支持一下！
