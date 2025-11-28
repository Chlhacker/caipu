# 🍳 崔宝的御膳房

一个使用 LeanCloud 云端存储的 H5 菜谱应用。

## 📋 功能特点

- ✅ 菜品管理（添加、编辑、删除）
- ✅ 购物车功能
- ✅ 订单管理
- ✅ 心愿墙
- ✅ 云端存储（LeanCloud）
- ✅ 图片上传
- ✅ 数据导出

## 🚀 快速开始

### 1. 配置 LeanCloud

1. 访问 [LeanCloud 控制台](https://console.leancloud.cn/)
2. 创建应用，获取 AppID 和 AppKey
3. 在 `index.html` 中找到 `initLeanCloud()` 方法（约 2398 行）
4. 替换 `APP_ID`、`APP_KEY`、`SERVER_URL` 为你的凭证
5. 在 LeanCloud 控制台创建三个 Class：`Dish`、`Order`、`Wish`

### 2. 启动项目

```bash
# 方式 1：使用 Python（推荐）
python -m http.server 8080

# 方式 2：直接双击 index.html

# 方式 3：VS Code Live Server
```

### 3. 访问

浏览器打开 `http://localhost:8080/index.html`

## 📂 项目结构

```
caipu/
├── index.html                  # 主应用文件
├── manifest.json              # PWA 配置
├── sw.js                      # Service Worker
├── import_to_leancloud.html   # 数据导入工具
├── data.json                  # 历史数据（可选）
├── package.json               # Node.js 配置（已废弃）
└── server.js                  # 本地服务器（已废弃）
```

## 💡 技术栈

- Vue 3 (CDN)
- LeanCloud JavaScript SDK
- 原生 CSS
- PWA 支持

## 📝 说明

- `server.js` 和 `package.json` 已不再需要（已集成 LeanCloud）
- 数据保存在 LeanCloud 云端，刷新不会丢失
- 图片上传到 LeanCloud CDN，加载快速
- 支持多设备数据同步

## 🔧 开发

项目是纯前端应用，无需构建工具。直接编辑 `index.html` 即可。

## 📱 PWA

应用支持添加到主屏幕，可像原生 App 一样使用。
