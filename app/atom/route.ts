import { getPosts } from "@/app/get-posts";
import { SITE_ORIGIN } from "@/app/site";

export async function GET() {
  const posts = await getPosts();
  const max = 100; // max returned posts
  // Atom 订阅需要绝对链接，统一使用站点基础 URL 拼接
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Zheyu</title>
    <subtitle>Essays</subtitle>
    <link href="${SITE_ORIGIN}/atom" rel="self"/>
    <link href="${SITE_ORIGIN}/"/>
    <updated>${posts[0].date}</updated>
    <id>${SITE_ORIGIN}/</id>
    <author>
      <name>Zheyu</name>
      <email>heyszy.g@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/);
      if (!dateMatch) return "";
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="${SITE_ORIGIN}/${dateMatch[0]}/${post.id}"/>
          <updated>${post.date}</updated>
        </entry>`;
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
