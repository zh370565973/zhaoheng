# ZH / SPACE — 个人数字门户

一个以暗黑科技风为基调的个人数字门户，使用 Vue 3、TypeScript、Vite、Tailwind CSS v4 与 Three.js 构建。

## 功能页面
- 首页：数字星球 3D Hero、项目精选、AI 实验室入口、资源导航与动态记录
- 关于我：个人介绍与关注方向
- 项目：项目列表与独立项目档案
- AI 实验室：模型、工作流、AI 视频创作方向
- 资源导航：可搜索的技术工具与官方入口
- 作品集：视觉实验展示位
- 动态笔记、联系页面

## 技术栈
Vue 3 / TypeScript / Vite / Tailwind CSS v4 / Three.js / Vue Router / GSAP-ready motion design / Lucide Vue Next。

## 本地运行
```bash
npm install
npm run dev
```

生产构建与类型检查：
```bash
npm run typecheck
npm run build
npm run preview
```

## GitHub Pages
Vite 的项目站点路径已设置为 `/zhaoheng/`，路由采用 Hash History，避免 GitHub Pages 刷新子路由出现 404。GitHub Actions 会在功能分支执行构建检查，仅在 main 分支部署正式站点。

预期地址：<https://zh370565973.github.io/zhaoheng/>

首次发布前，请在仓库 Settings → Pages → Build and deployment 中将 Source 设为 GitHub Actions。

## 内容维护
个人介绍、项目、资源、AI 工具、作品与动态集中在 `src/data/site.ts`。目前项目条目与作品卡片为可替换的展示内容；没有填写未经确认的职业履历、邮箱或电话。

## 目录概览
```
src/
  assets/styles/main.css
  components/       # 导航、页脚、项目卡片、3D 星球
  data/site.ts      # 可维护的站点内容
  router/           # 页面路由
  views/            # Home / About / Projects / AI Lab / Resources / Gallery / Notes / Contact
  App.vue
  main.ts
```
