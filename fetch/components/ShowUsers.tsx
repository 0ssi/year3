import React from 'react'
import styles from "../styles/Home.module.css"


interface User {
  id: number
  email: string
  picture: {
    large: string
  }
}
interface Users {
  users: User[]
}



const ShowUsers = ({users}:User) => {
  return (
    <div className={styles.grid}>
        {users.map(user=>(
        <div key={user.email} onClick={()=>{console.log(user.email)}} className={styles.card}>
                <h1>{user.email}</h1>
                <img src={user.picture.large} alt="" />
            </div>

        ))}
            
    </div>
  )
}

export default ShowUsers