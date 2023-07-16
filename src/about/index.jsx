import React from "react";
import "./main.scss"
import Button from "../companents/button";
import { Link } from "react-router-dom";
import { useMode } from "../zustund";

export default function About(){
    const theme = useMode((state) => state.mode);

    return(
        <>
        <div className={`about ${theme}`}>
            <div className="container">
                <div className="abouu">

                <div className="about_page">
                    <div className="home_text">
                        <h2 className={`${theme}`}>About US</h2>
                        <p className={`${theme}`}>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy
                             products as well as processed foods such as crackers, drinks, and frozen meals.</p>
                       <Link to={"/category"}> <Button matn={"Learn More"}/></Link>
                    </div>

                    <div className="home_img">
                        <img src="/about1.png"/>
                    </div>
                </div>

                <div className="about_page1">

                <div className="home_img">
                        <img src="/about.png"/>
                    </div>
                    <div className="home_text">
                        <h2 className={`${theme}`}>Fresh Vegetables Every Day</h2>
                        <p className={`${theme}`}>Healthy life as informed declared we enjoy the margaret. Joy horrible moreover man feelings own shy. Request
                             norland neither mistake for yet. Between the for morning assured country believe..</p>
                             <Link to={"/category"}> <Button matn={"Learn More"}/></Link>
                    </div>

                   
                </div>

                <div className="about_page">

                
    <div className="home_text">
        <h2 className={`${theme}`}>Cooked by the Best Chefs</h2>
        <p className={`${theme}`}>Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove 
            plenty regard you summer though. He preference connection astonished on of ye..</p>
             <Link to={"/category"}> <Button matn={"Learn More"}/></Link>
    </div>

    <div className="home_img">
                   <img src="/about2.png"/>
               </div>

   
</div>


                </div>
               
            </div>
        </div>
        </>
    )
}