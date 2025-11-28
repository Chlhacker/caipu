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

## 🚀 部署到腾讯云 CloudBase

项目已配置 GitHub Actions 自动部署工作流。

### 配置步骤

#### 1. 开通 CloudBase

1. 访问 [CloudBase 控制台](https://console.cloud.tencent.com/tcb)
2. 创建新环境（选择“按量付费” - 有免费额度）
3. 记录环境 ID（如 `caipu-xxx`）
4. 开通“静态网站托管”服务

#### 2. 获取 API 密钥

1. 访问 [腾讯云 API 密钥管理](https://console.cloud.tencent.com/cam/capi)
2. 创建密钥，获取 `SecretId` 和 `SecretKey`
3. **妥善保管，不要泄露！**

#### 3. 配置 GitHub Secrets

在 GitHub 仓库中，依次点击 `Settings` → `Secrets and variables` → `Actions` → `New repository secret`。

添加以下 3 个 Secrets：

| Secret 名称 | 值 | 说明 |
|------------|-----|------|
| `TCB_SECRET_ID` | 你的 SecretId | 腾讯云 API 密钥 ID |
| `TCB_SECRET_KEY` | 你的 SecretKey | 腾讯云 API 密钥 Key |
| `TCB_ENV_ID` | 你的环境 ID | CloudBase 环境 ID |

#### 4. 自动部署

配置完成后，每次将代码 push 到 `main` 分支，GitHub Actions 会自动：

1. ✅ 检出代码
2. ✅ 安装 CloudBase CLI
3. ✅ 登录 CloudBase
4. ✅ 部署到静态托管
5. ✅ 显示部署结果

#### 5. 查看部署状态

- 在 GitHub 仓库点击 `Actions` 标签页查看部署日志
- 在 CloudBase 控制台查看托管文件
- 访问 CloudBase 提供的默认域名或自定义域名

### 手动触发部署

在 GitHub 仓库点击 `Actions` → 选择 `部署到腾讯云 CloudBase` → `Run workflow` → `Run workflow`

### 本地部署（可选）

如果不想使用 GitHub Actions，也可以本地部署：

```bash
# 1. 安装 CloudBase CLI
npm install -g @cloudbase/cli

# 2. 登录
tcb login --apiKeyId YOUR_SECRET_ID --apiKey YOUR_SECRET_KEY

# 3. 部署
tcb hosting deploy . / -e YOUR_ENV_ID
```

### 注意事项

- ✅ CloudBase 静态托管有免费额度，小项目完全够用
- ✅ 自带 CDN 加速，访问更快
- ✅ 自动配置 HTTPS
- ✅ 可绑定自定义域名
