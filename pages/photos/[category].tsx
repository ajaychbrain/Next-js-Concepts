import React from "react";

const PhotoId = ({ photo }:any)=>{
    return (
        <>
        <div>
            <h1>Photo Id </h1>
       
        <br/>
       
                    <b>{photo.userId}</b>
                    <i>{photo.title}</i>
                    <p><img src={photo.image} width="52px" /></p>
                    <br/>
                    </div>
                    </>
    )
};

export default PhotoId;
export async function getServerSideProps(context:any){
    const {params, req, res, query} = context;
    const {category} = params;
    console.log(category,"csd")
    const response = await fetch(`https://fakestoreapi.com/products/${category}`);
    const data = await response.json();
    // console.log(data,"Data Here")
    
    return {
        props: {
            photo: data,
        },
    };
}