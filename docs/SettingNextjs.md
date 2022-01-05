# Next.js Setting手順

1. `npx create-next-app@latest [app-name] --typescript`
2. `npm run dev`
3. TypeScript設定
   1. tsconfigに`"strictNullChecks": true`を設定
4. Prettier設定
   1. `npm i -D prettier`
   2. `npm i -D eslint-config-prettier`
   3. `touch .prettierrc.js`
      1. [.prettierrc.js](SettingNextjsLib/.prettierrc.js)を設定
   4. `touch .prettierignore`
      1. [.prettierignore](SettingNextjsLib/.prettierignore)を設定
5. material-ui設定([example](https://github.com/mui-org/material-ui/tree/master/examples/nextjs))
   1. `npm i @mui/material`