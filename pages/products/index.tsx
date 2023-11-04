import Link from "next/link"
import Home from ".."
// import Header from "../header"


const ProductList = ({productId = 100}) => {
    

  return (
        <>
       {/* <Header/> */}


        <h2>
            Product Page
            </h2>
            <br/>
           
           

            <h2>
         <Link href='/products/1'>
            Product 1
            </Link>
            </h2>
            <br/>
            <h2>
            <Link href='/products/2'>
            Product 2
            </Link>
            </h2><br/>
            <h2>
            <Link href={`/products/${productId}`}>
            Product3 {productId}
            </Link>
            </h2>






        </>
  )
}

export default ProductList
