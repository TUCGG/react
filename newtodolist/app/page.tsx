"use client"
import { TodoListType } from './_types/TodoListType'
import { Button, Checkbox, FormGroup } from '@mui/material'
import { useState } from 'react'


export default function Home() {
  const [todoLists, setTodoLists] = useState<Array<TodoListType>> ([
    {
      id: 0,
      title: "제목입니다.",
      description : "설명글입니다.",
      isCheck: false
    },
    {
      id: 1,
      title: "제목입니다.2",
      description : "설명글입니다.2",
      isCheck: true
    }
  ]
  ) 
  const [addTitle, setAddTitle] = useState<string>('')
  const [addDescription, setAddDescription] = useState<string>('')


  const fnChangeTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    event?.target.id === "titleInput" ? setAddTitle(event.target.value) : setAddDescription(event.target.value)
  }


  const addTodoList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const newTodoList: TodoListType = {
      id: todoLists.length + 1,
      title: (form[0] as HTMLInputElement).value,
      description: (form[1] as HTMLInputElement).value,
      isCheck: false,
    };
    setTodoLists((prevTodoLists) => [...prevTodoLists, newTodoList]);
    setAddTitle('')
    setAddDescription('')
  };
  
  return (
    <main>
      <form onSubmit={addTodoList}>
        <input id="titleInput" value={addTitle} onChange={fnChangeTitle} placeholder='title'/>
        <input id="descriptionInput" value={addDescription} onChange={fnChangeTitle} placeholder='description'/>
        <button>Click</button>
      </form>
      <ul>
        {todoLists.map((data) => {
          return (
            <li key={data.id}>
              <p>{data.title}</p>
              <p>{data.description}</p>
              <p>{data.isCheck}</p>
              <Checkbox value={data.isCheck}/>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
