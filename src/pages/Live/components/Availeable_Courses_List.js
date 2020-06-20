import React from "react";
import {Card, Tag} from "antd";



const Availeable_Courses = (props) =>{
    return(
        <div className={"available-courses"}>
            {


                props.available.map((item,i)=>

                <Card
                bordered={false}
                style={{ width: 210 }}
                hoverable
                className={"my-courses-item-card"}
                >
                <h2 className={"coaching-name"}>{item.coaching_name}</h2>
                <div>


                <div className={"my-courses-subject1"}>
                <Tag>{item.subject_title1}</Tag>
                <Tag>{item.subject_title2}</Tag>
                <Tag>{item.subject_title3}</Tag>
                </div>

                <div className={"my-courses-subject1"}>
                <Tag>{item.subject_title4}</Tag>
                <Tag>{item.subject_title5}</Tag>

                </div>
                <a className={"my-courses-item-more"} href="#">More</a>



                </div>
                </Card>
                )
            }

        </div>
    );
};
export default Availeable_Courses;