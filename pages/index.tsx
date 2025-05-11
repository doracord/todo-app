import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const addTodos = () => {
    if (!text.trim()) return;
    setTodos([...todos, text]);
    setText("");
  }

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors">
      <Head>
        <title>Todo app</title>
        <meta name="description" content="Simple todo app on nextjs" />
      </Head>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-md transition-colors">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
          Todoリスト
        </h1>

        <div className="flex space-x-2 mb-4">
          <input
            className="flex-grow border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
            type="text"
            value={text}
            onChange={changeText}
            placeholder="やることを入力..."
          />
          <button
            onClick={addTodos}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          >
            追加
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={`${todo}-${index}`}
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded px-4 py-2 transition-colors"
            >
              <p className="text-gray-800 dark:text-gray-100">{todo}</p>
              <button
                onClick={() => deleteTodo(index)}
                className="text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
              >
                完了
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
