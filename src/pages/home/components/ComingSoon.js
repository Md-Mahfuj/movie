import React from "react";
import Image from "../assets"
import './CommingSoon.css'
import { Card } from 'antd';
const ComingSoon=(props)=>{
    return(
        <div >

            <div >


                {
                    props.newmovies.map((item,i)=>
                        <Card style={{ width: 300 }} hover

                              className={"ComingSoonCard"}


                        >


                            <div className={"ComingSoonItem"} >
                                <img src={Image.deserter} alt={"movie"}/>

                                <div className={"ComingSoonTitle"}>
                                    <h4 className={"ComingSoonTitle1"}>{item.title}</h4>
                                    <p className={"ComingSoonTitle2"}>{item.title1}</p>
                                    <h5 className={"ComingSoonTitle3"}>{item.date}</h5>
                                </div>



                            </div>


                        </Card>


                    )
                }






            </div>





        </div>
    );


};
export default ComingSoon;