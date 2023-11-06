// client side rendering 

import React, {useState} from "react"
const PostCommentsPage = ({data}:any)=> {
        const [comments, setComments] = useState('');
        const [showcomment, setShowComment] = useState([]);

    const SubmitComments = async ()=>{
        console.log(comments)
        const response = await fetch(`/api/comments`, {
            method:'POST',
            body: JSON.stringify({comments}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data, "Hello wowo");
        setComments('');
        setShowComment(data); 
        
    }   

   

    // console.log(comments)

    return  (
        <>  
        <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'33px'}}>
            <div>
            <h1>Adding Comments</h1><br/>
        <input type="text" value={comments} onChange={e => setComments(e.target.value)} style={{background:'black', color:'#fff', height:'42px'  }} placeholder="Enter Comments"/><br/><br/>
        <button onClick={SubmitComments} style={{background:'green', borderRadius:'12px', height:'47px'}}>Submit Comments</button>
        </div>
        <div>
            <h1>Comment Data</h1>
                    <div>
                
                    <div>Comments</div>
                   
                    <div>Action</div>
                    </div>
            {
                showcomment.map((item:any)=>{
                    return(
                        <>
                       <div>
                        {item.name}
                        </div>
                            <div>
                            <button style={{background:'yellow'}}>Edit</button>
                            <button style={{background:'red'}}>Delete</button>
                            </div>
                        </>
                    )
                })
            }

            </div>
        </div>
      

        </>
    )
}

export default PostCommentsPage;

// server-side rendering 


// export async function getServerSideProps() {
//     const response = await fetch(`http://localhost:3000/api/comments`)

//         const data = await response.json()    
//         console.log(data )
//         const {commentss} = data;

//         return {
//             props: {
//                 data: commentss,
//             }
//         }

// }