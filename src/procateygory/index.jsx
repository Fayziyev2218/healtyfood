import React, { useEffect } from "react";
import "./main.scss"
import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { Link, useParams } from "react-router-dom";
import { useMode } from "../zustund";


export default function Productcateygory(){
    const theme = useMode((state) => state.mode);
    const changeTheme = useMode((state) => state.changeMode)
    const {id} = useParams()


    const req3 =()=>{
        return instance.get(`/products/category/${id}`)
    }

    //  const req3 =  useEffect(()=>{
    //            instance.get(`/products/category/${id}`)
    //       },[id])
    

        const info2 = useQuery({ queryKey: ['categg', 
    ], queryFn: req3 })
              console.log(info2?.data?.data?.data);

    return(
        <>
        <div className={`procateg ${theme}`}>
            <div className="container">
                <div className="procategory">
                {info2?.data?.data?.data?.map((e)=>{
                        return(
                            <Link className={`pro_link ${theme}`} to={`/products/${e.id}`} key={e.id}>
                              <div className={`pro_sing_link  ${theme}`}>
                                <div className="pro_img">
                              <img src={`http://3.138.204.20/upload/${e?.photo?.path}`}/>

                                </div>
                                <h2 className={`${theme}`}>{e.description_Uz}</h2>
                                <h3 className={`${theme}`}>Price:  {e.price}</h3>
                                <h4 className={`${theme}`}>{e.name_Uz}</h4>
                              </div>
                            </Link>
                        )
                    })}   

                </div>
            </div>
        </div>
        </>
    )
}