"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, {useState} from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo,setTodo] = useState('');
  let num = 0;

  const handleAdd = (e) => {
    e.preventDefault();
    if(todo.trim()){
      addTask(todo);
      setTodo('');
    }
  };
  
  const addTask = (task) =>{
    const newTodo= {
      id: num+1,
      text: task,
    };
    setTodos([...todos,newTodo]);
    console.log(todos);
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.listContainer}>
        <div className={styles.title}><h1>JCS ToDo List</h1></div>
        <button className={styles.add}>+</button>
        <form onSubmit={handleAdd}>
          <input
            className={styles.tasksToAdd}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add Task"
          />
        </form>
      </div>
    </main>
  );
}
