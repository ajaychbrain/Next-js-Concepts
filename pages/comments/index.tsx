// client side rendering 

import React, {useState} from "react"
const CommentsPage = ({data}:any)=> {
        const [comments, setComments] = useState([]);

    const fetchComments = async ()=>{
        // const response = await fetch(`/api/comments`)
        // const data = await response.json()
        // const {commentss} = data;
        setComments(data);
        
    }   

   

    // console.log(comments)

    return  (
        <>
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map((comment:any, id:number)=>{
                return(
                   
                    <div key={id}>
                    <h1>{comment.name}</h1>
                    </div>
                )
            })}
      

        </>
    )
}

export default CommentsPage;

// server-side rendering 


export async function getServerSideProps() {
    const response = await fetch(`http://localhost:3000/api/comments`)

        const data = await response.json()    
        console.log(data )
        const {commentss} = data;

        return {
            props: {
                data: commentss,
            }
        }

}