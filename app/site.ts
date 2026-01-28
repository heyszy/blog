// 站点基础 URL：优先从环境变量读取，便于不同环境部署时切换域名
// 需包含协议头（例如 https://），否则 URL 解析会失败
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zheyu.vercel.app";

// 统一去掉末尾斜杠，避免拼接路径时出现双斜杠
export const SITE_ORIGIN = SITE_URL.replace(/\/+$/, "");

// 用于展示的域名文本（如 OG 图右上角展示）
export const SITE_HOSTNAME = new URL(SITE_ORIGIN).hostname;
