import Home from "..";
// import Header from "../header";

function MyPost({post}:any){
    return (
        <>
        {/* <Header/> */}
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        
        </>
    )

}

export default MyPost;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {postId: '1'},
            },
            {
                params: {postId:'2'},
            },
            {
                params: {postId:'3'},
            },
        ],
        fallback: false,
    }
}


export async function getStaticProps(context:any) {
        const { params } = context
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        const data = await response.json()
        return {
            props: {
                post: data,
            },
        }
    }