import Link from "next/link";
// import { useRouter } from "next/router";
const Header = ()=>{
    
    return (
        <>
        <h1></h1>
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
            <Link href='/dynamicPosts'>
            Dynamic Posts
            </Link>
            <br/>
            <Link href='/photos'>
            Photos
            </Link>
            <br/>
            
        {/* <button onClick={handleClick} >Products</button> */}
        </div>
        </div>
        
        </>
    )
}

export default Header;
