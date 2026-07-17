# Chateau & Capital

The official website of Chateau & Capital, a private operating investment
company and development finance platform headquartered in Lagos, Nigeria.

Built with Next.js 15, TypeScript, Tailwind CSS v4 and Framer Motion.
Fully static, brand-aligned, dark-mode aware, SEO-complete.

## Getting started

```bash
npm install
npm run dev        # develop at http://localhost:3000
```

## Production

```bash
npm run build && npm start
```

## Static export (GitHub Pages)

```bash
STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
# output in ./out
```

## Editing content

All copy and data, portfolio companies, insight articles, capabilities,
navigation, live in [`lib/content.ts`](lib/content.ts). Add an entry there
and every page updates; no design work required.

Brand rules and architecture notes for AI-assisted development are in
[`CLAUDE.md`](CLAUDE.md).
