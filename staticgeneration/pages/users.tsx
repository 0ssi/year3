import styles from '../styles/users.module.css'

export default function UserList({ users }:any) {
    console.log(users)
    return (
      <div className={styles.container}>
        <div  className={styles.topContainer}>
          <h1 className={styles.topText}>List of users</h1>
        </div>
          <div className={styles.listContainer}>
            {
            users.map((user: any) => {
                return (
                    <div className={styles.textContainer} key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.address.zipcode}</p>
                    </div>
                )
            })
          }
          </div>
          
          
           
      </div>
    )
  }

  export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    return {
        props: {
            users: data,
        }
    }
  }
  








