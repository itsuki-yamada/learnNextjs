import React from 'react';

type Todo = {
  title: string,
  tag: string[],
  createdAt: string
}

export default function TodoList() {
  // TODO: Todoのリストを取得する（とりあえずhooksで実装する)
  // TODO: 更新処理を追加する
  // TODO: Redux-Toolkitに書き換える
  const todos: [Todo] = [
    {
      title: '内見',
      tag: ['引越し'],
      createdAt: '2022/01/12'
    }
  ]
  return (
    <>
      <h1>TodoList</h1>
      <ul>
        {
          todos.map((todo: Todo, index: number) => (
            <li key={index}>{todo.title}</li>
          ))
        }
      </ul>
    </>
  );
}