
const usersList = ({ users}:any) => {



  return (
      <>
        <h1>List of Users</h1>
        {
         users.map((item:any, id:number)=>{
          return (
           <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <button>Delete</button>
           </div>
          )
         })
        }
        
      </>
    
  )
}

export default usersList

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  console.log(data, "clear");
  return {
    props: {
      users: data,
    },
  }
}
