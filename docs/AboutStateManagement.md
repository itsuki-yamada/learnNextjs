# 状態管理ライブラリ調査

## 調査
- [Recoil]()
- [SWR]()
- [ContextAPI]()

## 参考リンク

- [「3種類」で管理するReactのState戦略](https://zenn.dev/yoshiko/articles/607ec0c9b0408d)
  - 概要
    - 要件
      - `ツールとしての側面が強いBtoB SaaS`
      - `SEOやページキャッシュの必要性はない`
    - ベース技術
      - TypeScript
      - React
      - Next.js
    - 要点
      - Stateを「サーバーデータのキャッシュ」「Global State」「Local State」に分類し、それぞれ管理する
      - サーバーデータのキャッシュ=>SWR
      - GlobalState=>Recoil
      - LocalState=>useState()