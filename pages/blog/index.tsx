import Link from "next/link"


const Blog = () => {
  return (
        <>
            <h1>Blog Page</h1>
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

export default Blog
