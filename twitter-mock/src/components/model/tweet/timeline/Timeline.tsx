// TODO 型定義を管理する方法を考える
interface User {
  userId: string,
  name: string,
  iconImage: string,
}

interface Tweet {
  user: User,
  contents: string,
  images: string[],
  createdDate: Date,
}

type TimeLine = Tweet[];

const timeline: TimeLine = [
  {
    user: {
      userId: 'peke',
      name: 'Itsuki',
      iconImage: '',
    },
    contents: 'いい家に引っ越したい',
    images: [],
    createdDate: new Date(`2022/01/20 21:00:00`),
  },
]

// TODO レイアウトをいい感じに整える
// TODO データをhooksから取る、もしくはこれ自体hooksにする?
export const Timeline = () => {
  return (
    <>
      {
        timeline.map((tweet: Tweet, index: number) => {
          return (
            <div key={index}>
              {tweet.createdDate.toLocaleString()}<br/>
              {tweet.user.name} @{tweet.user.userId}<br/>
              {tweet.contents}
            </div>
          )
        })
      }
    </>
  )
}