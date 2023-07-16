import React, { useEffect, useState } from "react";
import "./main.scss"
import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { Button, Space } from 'antd';
import { useMode } from "../zustund";




export default function Category(){
    const theme = useMode((state) => state.mode);
    const changeTheme = useMode((state) => state.changeMode)

    const req =()=>{
        return instance.get("/category")
    }


        const info2 = useQuery({ queryKey: ['categ'], queryFn: req })
    //   console.log(info2?.data?.data?.data);
    //   console.log(info2?.data?.data);


    //   const req2 =()=>{
    //     return instance.get("/products")
    // }


    //     const info = useQuery({ queryKey: ['todos'], queryFn: req2 })
    //   console.log(info?.data?.data?.data);


    
    return(
        <>
        <div className={`category ${theme}`}>
            <div className="container">
                <h1 className={`${theme}`}>Search in the category you want</h1>
                <div className="cate">
          {info2?.data?.data?.data?.map((e,i)=>{
            return (
                <div key={e.id}>
                   <Link className="cate_link" to={`/category/${e.id}`}> 
                   <Button>{e.name_Uz}</Button>

                   </Link>

                    {/* <p>{info?.data?.data?.data[i]?.gender}</p> */}
                </div>
            )
          })}

          
                

                </div>
            </div>

            <Outlet/>
        </div>
        </>
    )
}