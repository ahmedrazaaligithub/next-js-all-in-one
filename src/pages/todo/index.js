"use client";

import Container from "../container";
import { useState } from "react";

function About() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex,SeteditIndex]=useState(null)
  const [isEdit,SetisEdit]=useState(false)

  const handleOnChangeTodo = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    if (!todo) alert("plese write todo");
    const add = todos;
    add.push(todo);
    setTodos([...add]);
setTodo('')

  };
  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const onEdit =(index)=>{
setTodo(todos[index]);
SeteditIndex(index)
SetisEdit(true)
  }
  const editTodo=()=>{
let updatedTodo=todos
updatedTodo[editIndex]=todo
setTodos([...updatedTodo ])
SeteditIndex(null)
SetisEdit(false)
setTodo('')
  }
  return (
   <Container>
    <div className="flex flex-col items-center justify-between p-10">
      <div>
        <h1 className="text-lg font-bold py-6 text-center">Todo-Next</h1>
      </div>
      <div>
        <input
          placeholder={"Todo"}
          onChange={handleOnChangeTodo}
          value={todo}
          className="rounded py-1"
          style={{
            border: "1px solid black !important",
          }}
        />
        <button
          class=" bg-black text-white py-1 rounded mx-2 px-2 "
          onClick={isEdit? editTodo:addTodo}
        >
          {isEdit?"Update":"Add"} 
        </button>
      </div>
      <div>
        {todos.map((data, index) => {
          return (
            <div className="flex items-center justify-between my-2  bg-gray-100 p-2 rounded">
              <div key={index} className="mt-1">
                {data}
              </div>
              <div>
                <button
                  className="mx-1  px-2 rounded bg-black text-white py-2"
                  onClick={() => onEdit(index)}
                >
                  edit
                </button>{" "}
                <button
                  className="mx-1 px-2 rounded bg-black text-white  py-2"
                  onClick={() => deleteTodo(index)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   </Container>
  );
}

export default About;

