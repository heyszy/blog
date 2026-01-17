# 博客迁移清单

下面是把你的博客内容与品牌迁移到本仓库的最小步骤清单，按顺序执行即可。

## 1. 备份与初始检查
- 备份原博客内容与图片资源。
- 本地安装依赖并确认可运行：`pnpm install`、`pnpm dev`。

## 2. 替换站点品牌信息
- 站点标题/描述/OG 元信息：编辑 `app/layout.tsx` 的 `metadata` 与 `openGraph`。
- 站点 Logo 与导航：编辑 `app/logo.tsx`、`app/header.tsx`、`app/footer.tsx`。
- 全站样式与主题：编辑 `app/globals.css`、`tailwind.config.js`。

## 3. 迁移页面与文章
- 首页内容：编辑 `app/page.tsx`。
- 关于页：编辑 `app/about/page.mdx`。
- 文章内容：按年份创建 `app/(post)/年份/slug/page.mdx`。
- 文章索引：更新 `app/posts.json`（标题、日期、描述、slug 等）。

## 4. 迁移图片与资源
- 静态资源放入 `public/`（示例：`public/images/...`、`public/og/...`）。
- 文内引用统一使用绝对路径：`/images/xxx.jpg`。

## 5. OG 预览与分享卡片
- 全站默认 OG：`app/layout.tsx`。
- 文章/页面 OG：如需自定义，查看 `app/opengraph-image/route.tsx` 或 `app/**/opengraph-image/route.tsx`。

## 6. 功能与数据（可选）
- 站内链接：更新 `links.json` 与 `app/links/[id]/page.tsx`。
- 统计/分析：检查 `app/analytics.tsx` 是否需要替换为你的方案。
- Redis/Upstash：如不使用可移除相关逻辑（`app/redis.ts`、相关 API）。

## 7. 本地验证与构建
- 本地预览：`pnpm dev`。
- 生产构建：`pnpm build`。
- 如需对齐 Vercel：`vc dev`、`vc --prod`（需安装 Vercel CLI）。

## 8. 发布前检查
- 移除旧品牌、旧作者与旧链接。
- 检查所有图片与 OG 预览是否能正常加载。
- 确认新增内容与注释均为中文、符合项目风格。
