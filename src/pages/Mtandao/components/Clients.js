import React from "react";
import {useState} from "react"
import Data3 from "../assets/Data3";
import "./Clients.css"


const Client = (props) => {

    const [Client,setClient]=useState(Data3.Client)
    const [Client2,setClient2]=useState(Data3.Client2)
    const [Client3,setClient3]=useState(Data3.Client3)

    return (
        <div className={"clintSection"}>
           <h1 className={'ClientTitle'}>Clients Groups</h1>
            <hr className={"clientHr"}/>

            <div>
                <div    className={"ClientLogo"}>

                    {
                        Client.map((item,i)=>
                            <div>

                                <div>
                                    <img src={item.image}/>
                                    <h1 className={"LogoTitle"}>{item.title}</h1>
                                </div>



                            </div>
                        )
                    }
                </div>

                <div  className={"ClientLogo1"}>
                    {
                        Client2.map((item,i)=>
                            <div>

                                <div>
                                    <img src={item.image} className={"ClientLogo2"}/>
                                    <h1 className={"LogoTitle"}>{item.title} </h1>
                                </div>



                            </div>
                        )
                    }
                </div>
            </div>


            <div className={"getStarted"}>
                <div className={"getStartedText"}>
                    <h1 className={"getStartedText1"}>Ready to get started ?</h1>
                    <p className={"getStartedText1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <button className={"getStartedButton"}>Sign Up Here</button>
            </div>


            <div className={"Partnars"}>
                <h1 className={'ClientTitle'}>Our Partnars</h1>
                <hr className={"clientHr"}/>

                <div className={"PartnarLogo"}>
                    {
                        Client3.map((item,i)=>
                            <div>


                                    <img src={item.image} className={"ClientLogo2"}/>




                            </div>
                        )
                    }
                </div>
            </div>

        </div>


    );

};
export default Client;