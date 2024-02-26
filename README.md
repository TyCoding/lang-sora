# Lang-Sora

This is the case site for Sora AI videos. Use this template to help you quickly build a Sora AI case project.

> Sora AI's api is not available, all videos in lang-sora are from OpenAI official

[中文文档](./README_ZH.md)

## Preview

[https://sora.langchat.cn](https://sora.langchat.cn)

![](imgs/MIK-viN5a0.png)

## Deploy with Vercel


## Document

This project is based on [T3 Stack](https://create.t3.gg/). If you want to have a deeper understanding of the project architecture, 
you can read the official documentation.

The UI part is based on [DaisyUI](https://daisyui.com/) to quickly build a beautiful tailwind page

## Get Starter

1. clone project

```shell
git clone https://github.com/TyCoding/lang-sora.git
```

2. install dependencies

```shell
cd lang-sora
pnpm install
```

3. set database

Supports the use of postgres-type databases or related providers.

You can use the `start-database.sh` script in the project to quickly build the postgres database through docker,

Tips: The `start-database.sh` script will use the database login and password configuration in the `.env` file

```shell
## If you want to build postgres database using docker
./start-database.sh

## set database info
## edit `.env`

## Init database tables (base prisma, see `prisma/prisma.prisma`)
## This a build script
pnpm run db:push

## generate prisma table object
pnpm run postinstall
```

## Technology stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
