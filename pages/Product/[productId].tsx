import { useRouter } from "next/router";

function Product({product}:any){
    const router = useRouter()
    if(router.isFallback){
        return <div>
            Loading...
        </div>
    }
    return (
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            {/* <h3></h3> */}
            
            <hr/>

        </div>
    )
}

export default Product

export async function getStaticProps(context:any) {
        const {params} = context
        const response = await fetch(`https://fakestoreapi.com/products${params.productId}`)
        const data = await response.json()
        return {
            props: {
                product: data
            }
        }
}
export async function getStaticPaths() {
        return {
            paths: [{
                params: {productId: '1'}
            }],
            fallback: true
        }
}