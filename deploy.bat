@echo off
echo 正在初始化Git仓库...
git init

echo 添加所有文件到Git...
git add .

echo 提交文件...
git commit -m "Initial commit: Personal blog website"

echo 请输入您的GitHub仓库URL (格式: https://github.com/用户名/LeranBlog.git):
set /p REPO_URL="GitHub仓库URL: "

echo 添加远程仓库...
git remote add origin %REPO_URL%

echo 推送到GitHub...
git branch -M main
git push -u origin main

echo.
echo 部署完成！
echo 请到GitHub仓库设置中启用GitHub Pages：
echo 1. 进入仓库的Settings页面
echo 2. 找到Pages设置
echo 3. 选择"Deploy from a branch"
echo 4. 选择"gh-pages"分支
echo 5. 等待GitHub Actions自动部署
echo.
echo 您的网站将在以下地址可用：
echo https://用户名.github.io/LeranBlog
echo.
pause
