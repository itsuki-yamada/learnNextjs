# TwitterMockApp

## ディレクトリ構成

- src
  - components/ : すべてのコンポーネントを管理する
    - hooks/ : hooksを管理する
    - model/ : モデルに紐づくコンポーネントを管理する(TweetやUserなど)
    - page/ : pagesと1対1の関係
    - ui/ : データに依存しない見た目のみのコンポーネントを管理する
  - pages/ : ルーティングのみ、components/pageから対応するコンポーネントをimportして表示
  - styles/ : globalCSSのみ管理する

### 参考リンク

- [SPA Componentの推しディレクトリ構成について語る](https://zenn.dev/yoshiko/articles/99f8047555f700#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90)
- [dailydotdev](https://github.com/dailydotdev/apps/tree/master/packages/webapp)