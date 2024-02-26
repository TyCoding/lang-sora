# Lang-Sora

这是Sora AI Videos的案例站点，使用此项目可以帮助你快速构建Sora AI的演示项目。

> Sora AI的api不可用，lang-sora中的所有视频均来自OpenAI官方。后续将会接入API接口

[English](./README.md)

## 预览

![](imgs/MIK-BRECdI.png)

## 文档

这个项目基于 [T3 Stack](https://create.t3.gg/) 项目，如果你想对此项目架构有跟深入的了解可以查看官方文档。

UI部分基于 [DaisyUI](https://daisyui.com/)，快速使用tailwind构建精美的网站

## 快速开始

1. 克隆项目

```shell
git clone https://github.com/TyCoding/lang-sora.git
```

2. 安装依赖

```shell
cd lang-sora
pnpm install
```

3. 设置数据库

支持使用postgres类型的数据库或者相关供应商

你可以使用 `start-database.sh` 脚本快速利用docker构建postgres数据库

备注：`start-database.sh` 脚本中的数据库登录账户密码配置在 `.env`文件中

```shell
## 如果你想使用docker构建postgres数据库，执行此脚本
./start-database.sh

## 设置数据库的连接信息
## edit `.env`

## 初始化数据库的表结构(基于 prisma, see `prisma/prisma.prisma`)
## 执行下列构建脚本
pnpm run db:push

## 生成prisma的表结构对象
pnpm run postinstall
```

## 技术栈

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## 如何部署它？

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
