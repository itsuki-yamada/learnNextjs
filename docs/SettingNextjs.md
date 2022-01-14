# Next.js Setting手順

1. `npx create-next-app@latest [app-name] --typescript`
2. `npm run dev`
3. TypeScript設定
   1. tsconfigに`"strictNullChecks": true`を設定
4. ES-Lint設定
   1. `touch .eslintrc.json`
   2. `npm i -D eslint-config-next`
   3. [.eslintrc.json](SettingNextjsLib/.eslintrc.json)を設定
5. Prettier設定
   1. `npm i -D prettier`
   2. `npm i -D eslint-config-prettier`
   3. `touch .prettierrc.js`
      1. [.prettierrc.js](SettingNextjsLib/.prettierrc.js)を設定
   4. `touch .prettierignore`
      1. [.prettierignore](SettingNextjsLib/.prettierignore)を設定
6. material-ui設定([example](https://github.com/mui-org/material-ui/tree/master/examples/nextjs))
   1. `npm i @mui/material`
      1. material ui をimportして使うときの注意点
         1. [バンドルサイズ](https://mui.com/components/icons/#:~:text=The%20safest%20for%20bundle%20size%20is%20Option%201%2C%20but%20some%20developers%20prefer%20Option%202.%20Make%20sure%20you%20follow%20the%20minimizing%20bundle%20size%20guide%20before%20using%20the%20second%20approach.)