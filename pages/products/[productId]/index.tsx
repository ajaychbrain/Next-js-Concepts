import Home from "@/pages";
import Link from "next/link";
import { useRouter } from "next/router"
const ProductdDeail = () => {

    const router = useRouter();
    console.log(router,"Hello There");
   const productId = router.query.productId
   

  return (
        <>
        <Home/>
        <h1>Product Detail Page {productId}</h1>
        

        
        </>
  )
}

export default ProductdDeail
