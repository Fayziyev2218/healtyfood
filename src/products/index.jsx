import React from "react";
import "./main.scss"
import { instance } from "../axios";
import { useQuery } from '@tanstack/react-query'
import { Link } from "react-router-dom";
// import { useMode } from "../../zustund";
import { useMode } from "../zustund";


export default function Products(){
    const theme = useMode((state) => state.mode);
    const changeTheme = useMode((state) => state.changeMode)


    const req =()=>{
        return instance.get("/products")
    }


        const info = useQuery({ queryKey: ['todos'], queryFn: req })
      console.log(info?.data?.data?.data);
    return(
        <>
        <div className={`allproducts ${theme}`}>
            <div className="container">
                <h2 className={`pro_h2 ${theme}`}>All Product</h2>

                <div className="products">
                    {info?.data?.data?.data?.map((e)=>{
                        return(
                            <Link className={`pro_link ${theme}`} to={`/products/${e.id}`} key={e.id}>
                              <div className={`pro_sing_link ${theme}`}>
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