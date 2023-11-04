function ProductMainList ({products}:any)
{
    return (
        <>
        <h1>List of Products Page</h1>
        
        {
            products.map((product:any, id:number)=>{
                return(
                    <>
                    <div key={id}>
                    <h2>
                        {product.id} {product.title} {product.price}
                    </h2>
                    <hr/>
                </div>

                    </>
                )
            })
        }
        </>
    )
}
export default ProductMainList

export async function getStaticProps() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();

    return {
        props: {
            products: data
        }
    }

}