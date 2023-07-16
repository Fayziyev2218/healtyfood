import React from "react";
import "./main.scss"

export default function Button({matn}){
    return(
        <>
        <div className="button">
        <button>{matn}</button>

        </div>
        </>
    )
}