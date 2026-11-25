# fruityrooters

My personal website at https://fruityrooters.com

## Development

```
bun vite
```

## Deploys and previews

Every push is built and deployed to Cloudflare Pages by `.github/workflows/defaultworkflow.yml`.

- Pushes to `main` deploy to production.
- Pushes to any other branch become a preview deployment at
  `https://<branch>.fruityrooters.pages.dev`. When the branch has an open pull
  request, the workflow posts the preview link as a comment on it and keeps that
  comment updated on every push.
