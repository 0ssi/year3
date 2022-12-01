import React, { useState, FormEvent } from "react";
import styles from './Todo.module.css';

type TodoItemType = {
content: string,
completed: boolean

};

//lmao
function Todo() {

    const [items, setItems] = useState<TodoItemType[]>([])
    const [inputValue, setInputValue] = useState('');
    
    const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, { content: inputValue, completed: false } ]);
    setInputValue('');
    }

    const toggle = (i: number) => {
     const itemsCopy = [...items];
     itemsCopy[i].completed = !itemsCopy[i].completed;
     setItems(itemsCopy);
    }


    const deleteAll = () => {
        setItems([])
    }

    const removeCompleted = () => {
        setItems(items.filter(item => !item.completed))
    }
    

    return (
        <div>
           <form onSubmit={add}>
            <input type="text" value={inputValue} onChange={({target}) => setInputValue(target.value)} />
            <button type="submit">Add</button>
           </form>

        <div>
        { items.map((item, i) => (
        <div
        className={ styles.item + ' ' + (item.completed ? styles.completed : '') }
         key={item.content}
         onClick={() => toggle(i)}>
         
        { item.content }</div>    
        ))}
        </div>

        <div>
         <div>
          <button onClick={deleteAll}>Remove all</button>
          <button onClick={removeCompleted}>Remove completed</button>  
         </div>   
        </div>

        </div>
    );
}

export default Todo;