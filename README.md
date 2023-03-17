# Next.js + Tailwindcss + Jest + Cypress Starter

## Requirements

- [pnpm](https://pnpm.io/)
- [zsh](https://www.zsh.org/)
- zmv - Add `autoload -U zmv` to `~/.zshrc`

## Setup

1. Start new project with `pnpm create next-app --example https://github.com/jake-waldron/next-starter-repo`
2. Run `zmv -w '.env(*.)local_template' '.env${1}local' ` to rename env files
   - Example: `.env.local_template` to `.env.local`

TODO:

- [ ] Add Prisma
- [ ] Add Supabase
