# 📱 菜谱助手 H5 - 手机安装指南

## ✅ 项目已创建完成！

这是一个纯 H5 页面，无需构建工具，可以直接在手机浏览器打开使用。

---

## 🚀 快速开始

### 方式一：本地测试（推荐）

1. **启动本地服务器**

在项目目录打开终端，运行以下任一命令：

```bash
# 使用 Python 3（推荐）
python -m http.server 8080

# 或使用 Python 2
python -m SimpleHTTPServer 8080

# 或使用 Node.js（需要先安装 http-server: npm install -g http-server）
http-server -p 8080
```

2. **在手机上访问**
   - 确保手机和电脑在同一 WiFi
   - 查看电脑 IP 地址（Windows: `ipconfig`，Mac/Linux: `ifconfig`）
   - 在手机浏览器打开：`http://你的电脑IP:8080/index.html`
   - 例如：`http://192.168.1.100:8080/index.html`

3. **添加到主屏幕（可选）**
   - Android Chrome：菜单 → "添加到主屏幕"
   - iOS Safari：分享按钮 → "添加到主屏幕"

---

### 方式二：部署到服务器（正式使用）

#### 选项 A：GitHub Pages（免费）

1. **创建 GitHub 仓库**
   - 登录 GitHub，创建新仓库（例如：caipu-h5）

2. **上传文件**
   ```bash
   cd d:/code/caipu
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/caipu-h5.git
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库设置（Settings）
   - 找到 Pages 选项
   - Source 选择 main 分支
   - 保存后会得到地址：`https://你的用户名.github.io/caipu-h5/`

4. **在手机上访问**
   - 打开上述地址
   - 添加到主屏幕

#### 选项 B：Vercel/Netlify（免费，推荐）

**Vercel 步骤：**
1. 访问 https://vercel.com/
2. 用 GitHub 登录
3. 导入你的 caipu-h5 仓库
4. 自动部署，获得 HTTPS 地址
5. 在手机浏览器打开 → 添加到主屏幕

**Netlify 步骤：**
1. 访问 https://www.netlify.com/
2. 拖拽整个 `d:/code/caipu` 文件夹到 Netlify
3. 自动部署，获得 HTTPS 地址
4. 在手机浏览器打开 → 添加到主屏幕

---

## 📱 在安卓手机上安装

### 步骤详解（以 Chrome 浏览器为例）：

1. **打开网址**
   - 在 Chrome 浏览器打开你的页面地址

2. **查看安装提示**
   - 部分浏览器会自动弹出"添加到主屏幕"提示
   - 点击"安装"或"添加"

3. **手动添加（如果没有自动提示）**
   - 点击右上角菜单（⋮）
   - 选择"添加到主屏幕"或"安装应用"
   - 输入名称（默认"菜谱助手"）
   - 点击"添加"

4. **完成！**
   - 桌面会出现"🍳 菜谱助手"图标
   - 点击图标像 App 一样打开
   - 全屏显示，没有浏览器地址栏

---

## ✨ 功能说明

### 已实现功能：
- ✅ **菜品管理**：查看、添加、删除菜品
- ✅ **菜品录入**：菜名、标签、难度、制作步骤
- ✅ **购物车**：添加菜品、调整数量、删除
- ✅ **下单功能**：生成订单并保存历史
- ✅ **本地存储**：所有数据保存在手机本地
- ✅ **离线支持**：已浏览的内容可离线访问
- ✅ **移动适配**：专为手机优化的界面

### 使用说明：
1. **添加菜品**：点击"+ 添加新菜品"，填写信息后保存
2. **加入购物车**：在菜品列表点击"加入购物车"
3. **调整数量**：在购物车页面使用 +/- 按钮
4. **确认下单**：点击"确认下单"生成订单记录

---

## 🎨 技术特点

- **零依赖构建**：无需 npm、webpack 等工具
- **轻量级**：单个 HTML 文件，加载快速
- **PWA 支持**：可安装、可离线
- **响应式设计**：适配各种手机屏幕
- **现代 UI**：渐变色、阴影、圆角设计

---

## 🐛 常见问题

### 1. 手机无法访问本地服务器
- 确保手机和电脑在同一 WiFi
- 检查防火墙是否允许端口 8080
- 尝试使用电脑的其他 IP 地址

### 2. "添加到主屏幕"选项不出现
- 确保使用 Chrome 或 Safari 浏览器
- 如果是本地测试，某些浏览器可能不支持
- 部署到 HTTPS 服务器后即可正常使用

### 3. 数据会丢失吗？
- 所有数据保存在浏览器 localStorage
- 清除浏览器数据会导致数据丢失
- 建议定期备份（后续可添加导出功能）

---

## 📂 文件说明

```
caipu/
├── index.html      # 主页面（包含所有功能）
├── manifest.json   # PWA 配置文件
├── sw.js          # Service Worker（离线支持）
└── README.md      # 本说明文档
```

---

## 🔧 本地快速启动

**最简单的方式（Python）：**

```bash
cd d:/code/caipu
python -m http.server 8080
```

然后在手机浏览器打开：`http://你的电脑IP:8080/index.html`

---

## 🎉 立即体验

1. **电脑上预览**：双击 `index.html` 文件
2. **手机上使用**：按照上述方式启动服务器并访问
3. **部署上线**：选择 GitHub Pages、Vercel 或 Netlify

---

**祝你使用愉快！如有问题随时反馈。🎊**
