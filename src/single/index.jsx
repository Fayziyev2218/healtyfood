import React from "react";
import "./main.scss"
import { Link, useParams } from "react-router-dom";


import { instance } from "../axios";
import { useQuery } from '@tanstack/react-query'

export default function Single(){
    const {id} = useParams()


    const req2 =()=>{
        return instance.get(`/products/${id}`)
    }


        const single = useQuery({ queryKey: ['single'], queryFn: req2 })
      console.log(single?.data?.data);

    return(
        <>
        <div className="allsingle">
        <div className="singli_link2">
                    <Link to={"/"}>Home</Link>    /   <Link to={"/category"}>Category</Link>
                </div>
            <div className="container">
              
                <div className="single">
                    <div className="single_img">
                    {/* <img src={single?.data?.data?.photo?.path}/> */}
                    <img src={`http://3.138.204.20/upload/${single?.data?.data?.photo?.path}`}/>

                    </div>
                    
                    <div className="single_text">
                    <h2>Product name:  {single?.data?.data?.name_Uz}</h2>
                    <h3>Size: {single?.data?.data?.size}</h3>
                    <h3>Gender: {single?.data?.data?.gender}</h3>
                    <h3><del>Pricd: {single?.data?.data?.discount}</del>   &nbsp; &nbsp; Sale: {single?.data?.data?.price}</h3>
                    <p>Color: {single?.data?.data?.color}</p>

                    </div>




                    {/* {info?.data?.data?.data?.map((e)=>{
                        return(
                            <Link to={`/products/${e.id}`} key={e.id}>
                                <img src={e.photo.path}/>
                                <p>{e.description_Uz}</p>
                                <p>{e.price}</p>
                                <p>{e.name_Uz}</p>
                            </Link>
                        )
                    })} */}

                </div>
            </div>
        </div>
        </>
    )
}