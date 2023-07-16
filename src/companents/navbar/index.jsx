import React from "react";
import "./main.scss"
import { Link, NavLink } from "react-router-dom";

import { DownOutlined,MenuUnfoldOutlined,BgColorsOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


import { useMode } from "../../zustund";


const items = [
  {
    label:<NavLink to={"/"}>Home</NavLink>    ,
    key: '0',
  },
  {
    label: <NavLink to={"/about"}>About</NavLink>    ,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label:  <NavLink to={"/products"}>Allproduct</NavLink>,
    key: '3',
  },
  {
    label:  <NavLink to={"/category"}>Catigory</NavLink>,
    key: '3',
  },
  {
    label:  <NavLink to={"/contact "}>Contact</NavLink>,
    key: '4',
  },
  
  
];

export default function Navbar(){
  const theme = useMode((state) => state.mode);
const changeTheme = useMode((state) => state.changeMode);
    return(
        <>
        <div className={`navbar ${theme}`}>
            <div className="container">
              {/* <p onClick={changeTheme}>klik</p> */}
                <div className="nav">
                    <div className={`logo ${theme}`}>
                        <NavLink  className={`${theme}`} to={"/"}>UI.desk</NavLink>
                    </div>

                    <div className="nav_list">
                    <Dropdown className={`nav_down ${theme}`} 
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <MenuUnfoldOutlined />
        {/* <DownOutlined /> */}
      </Space>
    </a>
                      </Dropdown>
                      <BgColorsOutlined  className="bg_ligh_nav" onClick={()=>changeTheme()}/>
                        <ul className="nav_ul">
                            <li><NavLink className={`${theme}`} to={"/"}>Home</NavLink></li>
                            <li><NavLink className={`${theme}`} to={"/about"}>About</NavLink></li>
                            <li><NavLink className={`${theme}`} to={"/category"}>Category</NavLink></li>
                            <li><NavLink className={`${theme}`} to={"/products"}>Products</NavLink></li>
                            <li><NavLink className={`${theme}`} to={"/contact "}>Contact</NavLink></li>
                            <li className="bg_ligh" onClick={()=>changeTheme()}><BgColorsOutlined /></li>
                         
                        </ul>
                
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}