import Link from "next/link"
import Home from ".."

function PostList({posts}:any) {
    return (
        <>
            <Home/>
            <h1>List of Posts</h1>
            {
                posts.map((post:any, id:number)=>{
                    return(
                        <Link href={`/posts/${post.id}`}>
                        <div key={id}>
                            <h2>{post.id} {post.name}</h2><hr/>
                        </div>
                        </Link>
                    )
                })
            }
        
        </>
    )

}
export default PostList
export async function getStaticProps() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()
        // console.log(data,"clear");

        return {
            props: {
                posts: data.slice(0,3)
            }
        }


}