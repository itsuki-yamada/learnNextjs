# [SWR](https://swr.vercel.app/ja)

## 参考リンク

- [SWRを使ったサーバーデータのキャッシュ](https://swr.vercel.app/ja)
  - SPAで管理する必要のあるGlobal Stateって、そのうちほとんどがサーバーデータのキャッシュだよね.=>SWRのキャッシュ機構使えばGlobalStateすごく小さくなるんじゃね？みたいな感じの採用例
    - これはその通りだと思うし、データ取得にはSWRて決めることで実装に迷いが無くなりそうで好き。
      - ただ、取得したデータをフロントで再加工する場合はRecoilのほうが強そう
- [Next.jsの状態管理2020](https://zenn.dev/takepepe/articles/state-manegement-in-nextjs-2020)
  - `「SSG出来ない認証必要な部分レンダリングはSSRを使わず、SWR(CSR)を使ってほしい。そうすればSSG可能なページは多くなる」 という、Vercel提供ライブラリならではのメッセージが伝わってきます。`
    - ここだけ見るとSSRを使わない要件の場合にもかなりマッチしそうな予感
- [そうです。わたしがReactをシンプルにするSWRです。](https://zenn.dev/uttk/articles/b3bcbedbc1fd00)
  - 具体な実装の話 公式ドキュメント+αといった印象の記事。実際にSWRを採用時に重宝しそう
- [SWR を 状態管理 として活用しているよという話](https://zenn.dev/itizawa/articles/9f71e1f636d3d2#global-state-%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE-swr-%E3%81%AE%E6%B4%BB%E7%94%A8%E4%BA%8B%E4%BE%8B)
  - [関連：SWRはローカルの状態管理としても使える](https://zenn.dev/tak_iwamoto/articles/39aefec675c323)
    - こちらの記事のほうが理解はしやすかった。Recoilと共存可能だと思うけど、ややこしくなる気もする

## 所感

vercel社が提供しているため、Next.jsと相性良さそう。  
`データ取得のための React Hooks ライブラリ`なので状態管理ライブラリとは別軸？  
=>[そういうわけでもなさそう](https://zenn.dev/itizawa/articles/9f71e1f636d3d2#global-state-%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE-swr-%E3%81%AE%E6%B4%BB%E7%94%A8%E4%BA%8B%E4%BE%8B)  
React18で登場するとされているサスペンスとの相性は良さそう。  
キャッシュ戦略についてクライアント側のコードで制御するのは分かりやすくていい。  
GlobalState管理としても使えそうだけど、Recoilはselectorでデータを再加工しやすかったりするのがSWRより良さげな気がする