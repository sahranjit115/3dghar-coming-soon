import { MetadataRoute } from 'next'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://3dghar.com/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}

