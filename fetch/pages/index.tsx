import React, {useState, useEffect} from "react"
import type { NextPage } from 'next'
import styles from "../styles/Home.module.css"
import ShowUsers from "../components/ShowUsers"


const Home: NextPage = () => {

  const [users, setUsers] = useState([])
  const fetchData = async ()=>{
    const res = await fetch("https://randomuser.me/api/?results=40")
    const data = await res.json()
    setUsers(data.results)
  }
  useEffect(()=> {
    fetchData()
  },[])
  console.log(users)
  return (
    <div className={styles.container}>
        <ShowUsers users={users} />
    </div>
  )
}

export default Home
