import { useState } from 'react'
import './App.css'
import CardComponent from './components/Card'

function App() {
  const userInfo = {
    username: 'user1',
    age: 25
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <CardComponent userInformation = {userInfo} />
    </>
  )
}

export default App
