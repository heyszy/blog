# Repository Guidelines

## 项目结构与模块组织
- `app/` 采用 Next.js App Router；页面位于 `app/**/page.tsx` 或 `app/**/page.mdx`。
- 博文在 `app/(post)/年份/slug/page.mdx`，相关样式/组件在 `app/(post)/components/`。
- 接口与生成资源：`app/api/`、`app/atom/route.ts`、`app/*/opengraph-image/route.tsx`。
- 静态资源在 `public/` 与 `public/og/`；字体脚本在 `fonts/init.mjs`；索引/配置在 `app/posts.json`、`links.json`。

## 构建、测试与本地开发
- `pnpm install` 安装依赖，会触发 `node ./fonts/init.mjs`。
- `pnpm dev` 本地开发；`pnpm build` 生产构建；`pnpm start` 运行构建产物。
- 如需对齐 Vercel 环境，可使用 `vc dev`/`vc --prod`（需先安装 Vercel CLI）。

## 编码风格与命名规范
- 以 TypeScript/TSX 为主，双引号、分号、2 空格缩进；格式化以 Prettier 配置为准（见 `package.json`）。
- 路由与文件命名保持小写与短横线；MDX 页面统一 `page.mdx`。
- 模块化开发，禁止单体巨文件；代码中加上详细的中文注释。

## 测试指南
- 当前未配置自动化测试框架与 `test` 脚本；提交前至少运行 `pnpm build` 验证。
- 如新增测试，请在 PR 中说明运行方式与覆盖范围。

## 提交与 PR 规范
- 提交信息以英文短语、动词开头为主，可使用前缀如 `chore:`/`fix:`，必要时附 PR 号（示例：`chore: improve image optimization (#177)`）。
- PR 描述请使用中文，包含变更要点、关联问题/链接；涉及 UI 或内容更新请提供截图或预览链接。

## 安全与配置
- 禁止提交密钥或凭据；本地使用 `.env`，并维护 `.env.example` 作为安全默认值。

## AI/自动化协作注意事项
- 如使用 AI 或脚手架生成代码，请对照 `main` 分支 diff 清理“代码杂质”（多余注释、冗余防御、`any` 转换、与现有风格不一致写法）。
