import type { NextPage } from 'next'
import Todo from '../components/Todo/Todo'
import styles from "../styles/IndexPage.module.css"

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Todo />
    </div>
  )
}

export default IndexPage
