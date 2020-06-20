import React, {useState} from "react"

import Data from "../assets/api/Data"
import Live_Now_List from "./Live_Now_List";
import ReactPlayer from "react-player";
import "../components/Live_Now.css"
import { Row, Col } from 'antd';



 const Live_Now=(props)=>{
     const [live,setLive]=useState(Data.Live_card)

    return(
        <div>






            <Row>
                <Col  className={"live-section1"}>col-8
                    <div>
                        <Live_Now_List live={live}/>
                    </div>

                </Col>
                <Col   className={"live-section2"}>col-8
                    <ReactPlayer
                        className={"p"}

                     height={451}
                     width={690}
                     url={"https://youtu.be/gslrSh_VWL4"}
                     controls={true}


                    />

                </Col>
                <Col   className={"live-section3"}>col-8





                    <div className={"input-question-section"}>
                        <input

                            placeholder={"Ask a question"}
                            className={"input-question"}
                        />

                        <button>submit</button>
                    </div>





                    

                </Col>
            </Row>




        </div>
    );

 };
export default  Live_Now;