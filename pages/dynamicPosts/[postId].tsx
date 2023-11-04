import React, {useState} from "react";
import Home from "..";
import Loading from "../Loading";
// import Header from "../header";
import { useRouter } from "next/router";

function MyPost({post}:any){
    const router = useRouter();
    


    if(router.isFallback){
        console.log('router')
        return <h1>Loading...</h1>
    }
    return (
        <>
        {/* <Header/> */}
        {
            
            <>
                <h2>{post.id} {post.title}</h2>
                <p>{post.body}</p>
            </>
        }
       
        
        </>
    )

}

export default MyPost;

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await response.json()

    const paths = data.map((post:any)=>{
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
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
        // paths, 

        fallback: true,
    }
}


export async function getStaticProps(context:any) {
        const { params } = context
        console.log(params)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        const data = await response.json()
        return {
            props: {
                post: data,
            }
        }
    }