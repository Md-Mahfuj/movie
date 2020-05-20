
import React from "react"
import {Presentation,Details,Choose,Client,Contact } from "./components"
import  "./mtandao.css"




const Mtandao = () =>{
    return(

        <div>
            <div>
                <Presentation/>
            </div>


            <div className={"D"}>
                <Details/>

            </div>
            <div>
                <Choose/>
            </div>

            <div>
                <Client/>
            </div>

            <Contact/>


        </div>
    );
};
export default Mtandao;