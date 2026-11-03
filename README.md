# Site Dra. Malu Casini Bigi (Next.js)

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Defina `NEXT_PUBLIC_SITE_URL` (veja `.env.example`) com o domínio real antes do deploy: ele alimenta canonical, sitemap, robots, Open Graph e o JSON-LD.

Deploy recomendado: Vercel (otimização de imagens AVIF/WebP automática).

O site antigo (HTML estático) foi movido para `_legacy/`.
