# [Recoil](https://recoiljs.org/)

## 参考リンク
- [Recoil最速理解](https://blog.uhy.ooo/entry/2020-05-16/recoil-first-impression/)
  - [codeSandBox](https://codesandbox.io/s/recoil-sandbox-20200516-v40v7)
  - Redux vs Recoil
    - Redux
      - 個々のステートを宣言する最終目的は「巨大なステートの部品となること」であり、この点が特徴的
    - Recoil
      - フックとの相性の良さを念頭に設計されている
        - [カスタムフックによるカプセル化](https://blog.uhy.ooo/entry/2020-05-16/recoil-first-impression/#:~:text=%E5%AE%9F%E7%8F%BE%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82-,Recoil%E3%81%A8%E3%82%AB%E3%83%97%E3%82%BB%E3%83%AB%E5%8C%96,-%E3%81%93%E3%82%8C%E3%81%BE%E3%81%A7%E3%81%AE%E4%BE%8B)
      - 個々のステートはそのステートを使いたいコンポーネントたちの間で直接共有される。これによりステートがcode splittingの対象になる
- [使用例/「3種類」で管理するReactのState戦略](https://zenn.dev/yoshiko/articles/607ec0c9b0408d#2.-global-state)

## 所感

Reduxを使っていて課題と感じていた巨大なステート管理を分けて管理できる点がとても魅力的である。  
Recoilではデータを持つAtomと加工したデータを返すSelectorがあり、これらを共通して操作するAPIが提供されている。  
しかし、実際に使うときはhooks内にカプセル化して使うことになりそう。  
印象としてはReduxの上位互換

懸念としてはversionが2022/01/06現在でv0.5.2であることだが、これから広く使われるポテンシャルはあると感じる
