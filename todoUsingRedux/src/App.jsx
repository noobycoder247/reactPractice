import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import { store } from './store/store'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Provider store={store}>
        <AddTodo />
        <Todo />
      </Provider>
    </>
  )
}

export default App
