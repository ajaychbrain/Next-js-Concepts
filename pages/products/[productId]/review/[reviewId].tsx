// import Home from "@/pages";
import { useRouter } from "next/router"
const Review = () => {

    const router = useRouter();
    console.log(router,"Hello There");
   const { productId, reviewId } = router.query
   

  return (
        <>
        {/* <Home/> */}
        <h1>Product Detail Page is {productId} and Review Page is {reviewId}</h1>
        
        </>
  )
}

export default Review
