import React from "react";
import "./main.scss"
import { Link } from "react-router-dom";
import { useMode } from "../../zustund";


export default function Footer(){
    const theme = useMode((state) => state.mode);
    const changeTheme = useMode((state) => state.changeMode);
    return(
        <>
        <div className={`footer ${theme}`}>
            <div className={`container ${theme}`}>
                <ul>
                    <li>
                        <Link className={`footer_1 ${theme}` } to={"/"}>UI.desk</Link>
                    </li>
                    <li >
                        <Link  className={`${theme}`}>On formed merits hunted unable
                        <br/> merely by mr whence or. </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className={`footer_1 ${theme}` }to={"/"}>Home</Link>
                    </li>
                    <li >
                        <Link  className={`${theme}` }>Company </Link>
                    </li>
                    <li >
                        <Link className={`${theme}` } >News </Link>
                    </li>
                    <li >
                        <Link  className={`${theme}` }>Team </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link className={`footer_1 ${theme}`} to={"/about"}>About</Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>History   </Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>Service </Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>Pricing </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link className={`footer_1 ${theme}`} to={"/"}>Partner</Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>Business </Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>Plan </Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>Marketing </Link>
                    </li>
                </ul>


                <ul>
                    <li>
                        <Link className={`footer_1 ${theme}`} to={"/contact"}>Contact</Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>UI.desk </Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>(465)954-8487 </Link>
                    </li>
                    <li >
                        <Link className={`${theme}` }>Lahore, Pakistan </Link>
                    </li>
                </ul>
            </div>

            <div className="container2">
                <Link>© Copyright 2020 by ui.desk. All right reserved.</Link>
            </div>


        </div>
        </>
    )
}