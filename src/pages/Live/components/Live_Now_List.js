import React from "react"

import { Card } from 'antd';


const Live_Now_List=(props)=>{


    return(
        <div>

            {
               props.live.map((item,i)=>
                   <Card bordered={false} style={{ width:210 }}

                       className={"live-now-card"}
                   >



                       <div className={"live-time"}>
                           <p>  {item.time}</p>
                           <p>{item.type}</p>
                       </div>
                       <p> <span className="dot"></span>{item.subject}</p>
                       <p> <span className="dot"></span>{item.chapter}</p>
                       <p> <span className="dot"></span>{item.topics}</p>
                   </Card>
               )
            }

        </div>
    );

};
export default  Live_Now_List;