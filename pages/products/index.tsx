import Link from "next/link"
import Home from ".."


const ProductList = ({productId = 100}) => {
    

  return (
        <>
       <Home/>


        <h2>
         <Link href='/blog'>
            Blog
            </Link>
            </h2>
            <br/>
            <h2>
            <Link href='/products'>
            Products
            </Link>
            </h2><br/>
            <h2>
            <Link href='/'>
            Home
            </Link>
            </h2>

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
