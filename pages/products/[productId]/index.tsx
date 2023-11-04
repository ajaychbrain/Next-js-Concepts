import Home from "@/pages";
// import Header from "@/pages/header";
import Link from "next/link";
import { useRouter } from "next/router"
const ProductdDeail = () => {

    const router = useRouter();
    console.log(router,"Hello There");
   const productId = router.query.productId
   

  return (
        <>
        {/* <Header/> */}
        <h1>Product Detail Page {productId}</h1>
        

        
        </>
  )
}

export default ProductdDeail
