# 赵恒 · 个人简介（示例）

这是一个用于体验 GitHub Pages 的示例静态网站，不是正式个人站点。页面上的自我介绍和技能标签都是占位文案，方便之后替换。

预期访问地址：<https://zh370565973.github.io/zhaoheng/>

## 本地预览

用浏览器直接打开根目录的 `index.html`，或在仓库根目录启动任意静态服务器。样式与图标放在 `assets/` 下，页面使用相对路径（例如 `assets/style.css`），这样在项目站点路径 `/zhaoheng/` 下也能正确加载。

## 发布到 GitHub Pages

### 方式一：GitHub Actions（仓库已附工作流）

`.github/workflows/pages.yml` 会在推送到 `main` 时，用 `actions/upload-pages-artifact` 打包根目录静态文件，再用 `actions/deploy-pages` 发布。

首次使用需要你在网页上点一次设置（Actions 无法代为打开这个开关）：

1. 打开仓库 **Settings → Pages**。
2. 在 **Build and deployment** 里，将 **Source** 选为 **GitHub Actions**。
3. 保存后，到 **Actions** 查看 “Deploy static content to Pages” 是否成功。

如果 Pages 尚未启用，工作流可能失败。完成上面的设置后，在 Actions 页面重新运行该工作流即可。合并到 `main` 的后续提交会自动再次发布。

### 方式二：从分支部署

也可以不走 Actions：

1. 打开 **Settings → Pages**。
2. **Source** 选择 **Deploy from a branch**。
3. **Branch** 选择 `main`，文件夹选择 `/ (root)`，然后保存。

仓库根目录有 `.nojekyll`，从分支部署时会跳过 Jekyll 处理。发布完成后同样访问 <https://zh370565973.github.io/zhaoheng/>。

两种方式选一种即可。若已把 Source 设为 GitHub Actions，就以工作流发布为准。

## 修改内容

直接编辑 `index.html` 里的简介、技能标签和链接，提交并推送到 `main`。联系方式目前只放了公开的 GitHub 主页：<https://github.com/zh370565973>。
