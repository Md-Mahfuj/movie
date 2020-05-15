import React from "react";
import {Button} from "antd";
import "../Blog.css"


const  Hedear=()=>{
    return(
        <div className={"m"} >

            <h1 className={"LogoT"}>My Blog</h1>

            <nav className={"navT"}>

                <h2 className={"nav1"}>about</h2>
                <h2 className={'nav2'}>contact</h2>

                <h2 className={"nav3"}>travelling</h2>
                <Button className={"navButton"} type="primary">subscribe </Button>
            </nav>


        </div>

    );
};
export default Hedear;