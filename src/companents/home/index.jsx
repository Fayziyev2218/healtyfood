import React from "react";
import "./main.scss"
import Button from "../button";
import { Link, useNavigate } from "react-router-dom";
import { useMode } from "../../zustund";


export default function Home(){
    const nav = useNavigate()
    const theme = useMode((state) => state.mode);
    const changeTheme = useMode((state) => state.changeMode);
    return(
        <>
        <div  className={`home ${theme}`}>
            <div className="container">
                <div className="home_page">
                    <div className="home_text">
                        <h1  className={`${theme}`}>Just <span>Eat healthy</span> food to live a healthier life</h1>
                        <p className={`${theme}`}>Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future</p>
                        <Link to={"/products"}><Button matn={"Order now"}/></Link>
                    </div>

                    <div className="home_img">
                        <img src="/home.png"/>
                    </div>
                </div>

                <div className="home_page2">
                    <h2 className={`${theme}`}>Why Choose US?</h2>
                    <h3 className={`${theme}`}>Organic food is grown without the use of synthetic chemicals</h3>
                    <div className="home_page2_card">
                       <div className="home_cardd">
                       <img src="/home1.png"/>
                        <h3 className={`${theme}`}>Easy to order</h3>
                        <p className={`${theme}`}>foods include fresh produce, meats as well as processed</p>
                       </div>
                       <div className="home_cardd">
                       <img src="/home2.png"/>
                        <h3 className={`${theme}`}>Easy to order</h3>
                        <p className={`${theme}`}>foods include fresh produce, meats as well as processed</p>
                       </div>
                       <div className="home_cardd">
                       <img src="/home3.png"/>
                        <h3 className={`${theme}`}>Easy to order</h3>
                        <p className={`${theme}`}>foods include fresh produce, meats as well as processed</p>
                       </div>
                    </div>

                    <div className=" home_page2_card22">
                       <div className="home_cardd">
                        <h3 className={`home_h3 ${theme}`} >40+</h3>
                        <p className={`${theme}`} >Food Partners</p>
                       </div>
                       <div className="home_cardd">
                        <h3 className={`home_h3 ${theme}`}>459+</h3>
                        <p className={`${theme}`}>Trusted Clients</p>
                       </div>
                       <div className="home_cardd">
                        <h3 className={`home_h3 ${theme}`}>12k+</h3>
                        <p className={`${theme}`}>Order Online</p>
                       </div>
                    </div>
                </div>


                
            </div>
        </div>
        </>
    )
}