
import React from "react"
import {Presentation,Details,Choose,Client,Contact } from "./components"
import  "./mtandao.css"
import CantacT from "./components/Cantact2";




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
            {/*<CantacT/>*/}



        </div>
    );
};
export default Mtandao;