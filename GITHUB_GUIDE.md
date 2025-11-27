# 如何推送到 GitHub

## 📋 准备工作

### 1. 安装 Git
如果还没有安装 Git，请先安装：
- Windows: 下载 https://git-scm.com/download/win
- 已安装可跳过此步骤

### 2. 配置 Git（首次使用）
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

---

## 🚀 推送步骤

### 步骤 1: 在 GitHub 创建仓库

1. 访问 https://github.com/
2. 登录你的 GitHub 账号
3. 点击右上角的 `+` → `New repository`
4. 填写信息：
   - Repository name: `caipu-h5`（或其他名字）
   - Description: `菜谱助手 - 手机点菜H5应用`
   - 选择 `Public`（公开）或 `Private`（私有）
   - **不要**勾选 "Initialize this repository with a README"
5. 点击 `Create repository`

### 步骤 2: 在本地初始化 Git 仓库

打开终端，执行以下命令：

```bash
# 进入项目目录
cd d:/code/caipu

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "首次提交：菜谱助手H5应用"
```

### 步骤 3: 连接到 GitHub 并推送

将下面的 `你的用户名` 替换为你的 GitHub 用户名：

```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/caipu-h5.git

# 重命名分支为 main
git branch -M main

# 推送到 GitHub
git push -u origin main
```

**示例：**
如果你的 GitHub 用户名是 `zhangsan`，则命令为：
```bash
git remote add origin https://github.com/zhangsan/caipu-h5.git
git branch -M main
git push -u origin main
```

### 步骤 4: 输入 GitHub 凭据

第一次推送时会要求输入：
- Username: 你的 GitHub 用户名
- Password: 你的 GitHub 密码或 Personal Access Token

> **注意：** GitHub 现在要求使用 Personal Access Token 而不是密码

#### 如何创建 Personal Access Token：

1. 访问 https://github.com/settings/tokens
2. 点击 `Generate new token` → `Generate new token (classic)`
3. 填写 Note: `caipu-upload`
4. 勾选 `repo` 权限
5. 点击 `Generate token`
6. **复制生成的 token**（只显示一次）
7. 在推送时将 token 作为密码使用

---

## 🌐 部署到 GitHub Pages（免费托管）

推送成功后，可以启用 GitHub Pages 让手机直接访问：

### 方法一：使用 GitHub Pages

1. 进入你的仓库页面
2. 点击 `Settings`（设置）
3. 左侧菜单找到 `Pages`
4. 在 `Source` 下选择：
   - Branch: `main`
   - Folder: `/ (root)`
5. 点击 `Save`
6. 等待 1-2 分钟，会得到地址：`https://你的用户名.github.io/caipu-h5/`

### 方法二：使用 Vercel（推荐，更快）

1. 访问 https://vercel.com/
2. 点击 `Sign Up` 用 GitHub 账号登录
3. 点击 `Import Project`
4. 选择你的 `caipu-h5` 仓库
5. 点击 `Deploy`
6. 等待部署完成，获得地址：`https://caipu-h5.vercel.app`

---

## 📱 在手机上安装

### 部署完成后：

1. **在手机浏览器打开**部署后的地址
   - GitHub Pages: `https://你的用户名.github.io/caipu-h5/`
   - Vercel: `https://caipu-h5.vercel.app`

2. **添加到主屏幕**
   - Android Chrome: 菜单（⋮）→ "添加到主屏幕"
   - iOS Safari: 分享按钮 → "添加到主屏幕"

3. **完成！** 桌面会出现"🍳 菜谱助手"图标

---

## 🔄 后续更新

每次修改代码后，推送更新：

```bash
# 1. 添加修改的文件
git add .

# 2. 提交更改
git commit -m "更新说明，例如：优化移动端导航"

# 3. 推送到 GitHub
git push
```

GitHub Pages 或 Vercel 会自动更新你的网站！

---

## 🆘 常见问题

### Q1: 推送时提示 "Permission denied"
**解决：** 使用 Personal Access Token 代替密码

### Q2: 提示 "fatal: remote origin already exists"
**解决：** 先删除再添加
```bash
git remote remove origin
git remote add origin https://github.com/你的用户名/caipu-h5.git
```

### Q3: GitHub Pages 打开后显示 404
**解决：** 
1. 确认 `index.html` 在根目录
2. 等待 2-3 分钟让 GitHub 完成部署
3. 检查 Settings → Pages 是否显示绿色对勾

### Q4: 手机无法添加到主屏幕
**解决：**
1. 确保使用 HTTPS（GitHub Pages 和 Vercel 自动支持）
2. 使用 Chrome 或 Safari 浏览器
3. 确认 `manifest.json` 文件存在

---

## ✅ 快速命令总结

```bash
# 一键推送到 GitHub
cd d:/code/caipu
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/你的用户名/caipu-h5.git
git branch -M main
git push -u origin main
```

---

**需要帮助？** 如果推送过程中遇到问题，告诉我具体的错误信息！
