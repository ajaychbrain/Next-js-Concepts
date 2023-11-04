import Link from "next/link";
import React from "react";

const Photos = ({photos}: any) => {
    return (
        <div>
            {
                photos.map((photo: any, id:number)=>{
                    return (
                        <Link href={`/photos/${photo.id}`}>
                        <div key={id}>
                            <p>{photo.id}</p>
                            <p>{photo.category}</p>
                            <p><img src={photo.image} width="52px" /></p>
                            <p>{photo.price}</p>
                        </div>
                        </Link>
                    )
                })
            }
            {/* <h2>List of Products:</h2>
            <table align="center" style={{border:'1px solid' }}>
                <thead>
                <tr>
                    <th>Sr.No</th>
                <th>Product Category</th>
               <th>Product Image </th>
                <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
            {
                photos.map((photo: any, id:number)=>{
                    return (
                        <Link href={`/photos/${photo.id}`}>
                        <tr key={id}>
                            <td>{photo.id}</td>
                            <td>{photo.category}</td>
                            <td><img src={photo.image} width="52px" /></td>
                            <td>{photo.price}</td>
                        </tr>
                        </Link>
                    )
                })
            }
            </tbody>
            
            </table> */}
        </div>
    )
}
export default Photos;

export async function getServerSideProps() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    // console.log(data, "Here Data");
    return {
        props: {
            photos: data.slice(0,50),
            
        },
    }
}