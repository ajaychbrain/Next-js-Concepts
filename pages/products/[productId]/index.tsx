import Link from "next/link";
import { useRouter } from "next/router"
const ProductdDeail = () => {

    const router = useRouter();
    console.log(router,"Hello There");
   const productId = router.query.productId
   

  return (
        <>
        <h1>Product Detail Page {productId}</h1>
        <Link href='/blog'>
            Blog
            </Link><br/>
            <Link href='/products'>
            Products
            </Link>
            <Link href='/'>
            Home
            </Link>

        
        </>
  )
}

export default ProductdDeail
