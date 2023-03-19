# Next.js + Tailwindcss + Jest + Cypress Starter

## Requirements

- [pnpm](https://pnpm.io/)
- [zsh](https://www.zsh.org/)
- zmv - Add `autoload -U zmv` to `~/.zshrc`

## Setup

1. Start new project with `pnpm create next-app --example https://github.com/jake-waldron/next-starter-repo`
2. Run `zmv -w '.env(*.)local.example' '.env${1}local'` to rename env files
   - Example: `.env.local.example` to `.env.local`
3. Set environment variables
4. Run `pnpx prisma migrate dev --name init` to create database

TODO:

- [ ] Add Prisma
- [ ] Add Supabase
