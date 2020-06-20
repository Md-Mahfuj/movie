import React from "react";
import S_image from "../assets";


const S_home = () => {
    return (
        <div>
            <img src={S_image.home} className={"home-image"}/>

            <div className={"h"}>
                <div className={"logo-section"}>
                    <img src={S_image.logo} className={"logo"}/>
                    <h4 className={"logo-title"}>E-Shop</h4>
                </div>

                <lu>
                    <li><a>Products</a></li>
                    <li><a>Insipiration</a></li>
                    <li><a>Rooms</a></li>


                </lu>
                <div className={"Search-icon"}>
                    <img src={S_image.Search} className={"f"}/>
                    <img src={S_image.cart} className={"f"}/>
                    <img src={S_image.icon1} className={"f"}/>
                </div>


            </div>


        </div>
    );
};
export default S_home;