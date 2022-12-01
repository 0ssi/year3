import type { NextPage } from 'next'
import ToDoList from '../components/todolist/todo'



const Home: NextPage = () => {
  return (
    <div>
      <ToDoList />
    </div>
  )
}

export default Home