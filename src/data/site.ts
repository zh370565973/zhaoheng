export const navItems = [
  { label: '首页', en: 'HOME', to: '/' }, { label: '关于', en: 'ABOUT', to: '/about' },
  { label: '项目', en: 'PROJECTS', to: '/projects' }, { label: 'AI 实验室', en: 'AI LAB', to: '/ai-lab' },
  { label: '资源', en: 'RESOURCES', to: '/resources' }, { label: '作品集', en: 'GALLERY', to: '/gallery' },
]
export const profile = {
  name: '赵恒', handle: 'zh370565973', location: 'Digital space',
  headline: '探索技术的边界，\n把想法变成现实。',
  intro: '一名持续探索软件工程与 AI 创作的开发者。这里是我的数字工作台，收录项目、实验、灵感与值得收藏的资源。',
  focus: ['AI Engineering', 'Full-stack Development', 'Creative Technology'],
  github: 'https://github.com/zh370565973',
}
export const projects = [
  { slug:'agri-intelligence', number:'01', title:'数智三农', category:'PRODUCT DESIGN', desc:'面向农业农村重点工作的指标、任务、监测与预警协同平台。', tags:['Vue 3','Java','Data Dashboard'], color:'mint', status:'CONCEPT' },
  { slug:'wuxia-studio', number:'02', title:'Wuxia AI Studio', category:'AI CREATIVE', desc:'从原创武侠故事到角色资产、分镜设计与 AI 视频生产的创作工作台。', tags:['ComfyUI','AI Video','Workflow'], color:'violet', status:'EXPLORING' },
  { slug:'dev-foundation', number:'03', title:'Dev Foundation', category:'ENGINEERING', desc:'面向中后台业务的轻量模块化工程底座，兼顾安全、扩展与国产数据库适配。', tags:['Spring Boot','Vue','MySQL / DM'], color:'blue', status:'DESIGN' },
]
export const resources = [
  { title:'GitHub', desc:'开源项目、代码协作与技术社区', url:'https://github.com', type:'CODE', icon:'github' },
  { title:'Vue.js', desc:'渐进式 JavaScript 框架', url:'https://vuejs.org', type:'FRONTEND', icon:'layers' },
  { title:'Vite', desc:'下一代前端构建工具', url:'https://vite.dev', type:'FRONTEND', icon:'zap' },
  { title:'Three.js', desc:'浏览器 3D 图形与交互体验', url:'https://threejs.org', type:'3D & WEBGL', icon:'box' },
  { title:'ComfyUI', desc:'节点式生成式 AI 工作流', url:'https://www.comfy.org', type:'AI CREATIVE', icon:'workflow' },
  { title:'Hugging Face', desc:'模型、数据集与 AI 社区', url:'https://huggingface.co', type:'AI MODELS', icon:'brain' },
  { title:'GSAP', desc:'高性能 Web 动画平台', url:'https://gsap.com', type:'MOTION', icon:'move' },
  { title:'Codex', desc:'面向软件工程任务的 AI 编码助手', url:'https://openai.com/codex/', type:'AI CODING', icon:'code' },
]
export const activities = [
  { date:'NOW', title:'搭建个人数字门户', desc:'将项目、AI 实验与技术收藏整理为统一入口。' },
  { date:'RECENT', title:'探索 AI 视频生产链路', desc:'研究角色一致性、镜头设计与可复用工作流。' },
  { date:'ONGOING', title:'沉淀轻量工程架构', desc:'关注稳定技术栈、模块边界与交付效率。' },
]
export const gallery = [
  { title:'东方幻想 · 角色概念', type:'AI VISUAL', tone:'art-violet', mark:'01' },
  { title:'数字宇宙 · 交互实验', type:'3D STUDY', tone:'art-blue', mark:'02' },
  { title:'未来界面 · 视觉探索', type:'UI EXPERIMENT', tone:'art-mint', mark:'03' },
]