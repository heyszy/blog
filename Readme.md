# Zheyu Blog

这是 Zheyu 的个人博客，源自 [rauchg's blog](https://github.com/rauchg/blog)，基于 Next.js，部署在 Vercel 上。

## 运行方式

### 本地开发

```bash
pnpm dev
```

### 生产构建与启动

```bash
pnpm build
pnpm start
```

## 环境变量

请在 `.env` 中设置站点基础 URL：

```
NEXT_PUBLIC_SITE_URL=https://zheyu.vercel.app
```

## 项目结构

- 页面采用 App Router，页面文件位于 `app/**/page.tsx` 或 `app/**/page.mdx`
- 博文位于 `app/(post)/年份/slug/page.mdx`
- 索引配置位于 `app/posts.json`
