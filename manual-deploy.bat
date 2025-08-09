@echo off
echo 手动创建 gh-pages 分支并部署...

echo 1. 构建项目...
call npm run build

echo 2. 安装部署工具...
call npm install --save-dev gh-pages

echo 3. 部署到 gh-pages 分支...
call npx gh-pages -d dist

echo.
echo 部署完成！
echo 现在您可以在 GitHub Pages 设置中看到 gh-pages 分支选项了。
echo.
echo 请按照以下步骤设置：
echo 1. 进入 GitHub 仓库的 Settings 页面
echo 2. 找到 Pages 设置
echo 3. Source 选择 "Deploy from a branch"
echo 4. Branch 选择 "gh-pages"
echo 5. 点击 Save
echo.
pause
