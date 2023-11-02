import Link from "next/link";
import { useRouter } from "next/router";
const Home = ()=>{
   const router = useRouter();
   const handleClick = () => {
    console.log('Placing Your Order')
    router.push("/products");
   }
    
    return (
        <>
        <h1>Home Pagesda</h1>
        <div>
        <Link href='/blog'>
            Blog
            </Link><br/>
            <Link href='/products'>
            Products
            </Link>
            <Link href='/'>
            Home
            </Link>

        <button onClick={handleClick}>Products</button>
        </div>
        </>
    )
}

export default Home;
