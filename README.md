# Next.js + Tailwindcss + Jest + Cypress + Prisma Starter

## Requirements

- [pnpm](https://pnpm.io/)
- [zsh](https://www.zsh.org/)
- zmv - Add `autoload -U zmv` to `~/.zshrc`

## Setup

1. Start new project with `pnpm create next-app --example https://github.com/jake-waldron/next-starter-repo/tree/prisma`
2. Run `zmv -w '.env(*.)local.example' '.env${1}local'` to rename env files
   - Example: `.env.local.example` to `.env.local`
3. Set environment variables
4. Run `prisma generate` to set up Prisma for development
5. Run `dotenv -e .env.development.local prisma db push` to set up database with Prisma Schema
