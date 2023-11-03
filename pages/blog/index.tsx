import Link from "next/link"


const Blog = () => {
  return (
        <>
            <div>
        <div style={{display:'flex', justifyContent:'space-evenly', alignItems: 'center',minHeight:'52px',background:'black',color:'#fff'}}>
        <Link href='/'>
            Home
            </Link><br/>    
       
        <Link href='/blog'>
            Blog
            </Link><br/>
            <Link href='/products'>
            Products
            </Link><br/>
            
            <Link href='/posts'>
            Posts
            </Link>
            <br/>
        {/* <button onClick={handleClick} >Products</button> */}
        </div>
        </div>

        </>
  )
}

export default Blog
