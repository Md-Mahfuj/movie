import React from "react"
import {useState,useEffect} from "react"
import axios from "axios";

import "./Live.css"
import Data from "../Live/assets/api/Data"
import { List, Avatar } from 'antd';




import { L_Button,My_Courses,Availeable_Courses,Live_Now} from "./components/index"






const Live = (props) =>{

    const [courses,setCourses]=useState(Data.Courses);
    const [available,setAvailable]=useState(Data.available);


    const [blogs, setBlogs] = useState([]);

    function getBlogData() {
        const client=axios.get("http://127.0.0.1:5000/courseDetails/1")
            .then(function(response){
                console.log('getBlogData',response.data);
                setBlogs(response.data);


            });
    }


    useEffect(() => {
        getBlogData();
    }, []);





    return(
        <div>
            <div className={"nav-live"}>
                <lu>
                    <li className={"class-routine1"}>
                        <span className="dot"></span>
                        <a>Live Courses <L_Button/></a>
                    </li>
                    <li className={"class-routine2"}><a> Class Routine</a> </li>
                    <li className={"class-routine1"}> <a>Class Room</a></li>
                </lu>
            </div>
            <div>
                <h1 className={"my-courses-title"}>My courses</h1>
                <My_Courses courses={courses} />
            </div>


            <div className={"my-available-courses"}>
                <h1 className={"my-courses-title"}>Availeable Courses</h1>

                <Availeable_Courses available={available} />
            </div>

           <div>
               <Live_Now/>
           </div>




            <div >

                <h1> my name is a amahfuj</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={Data.available}
                    renderItem={item => (
                        <List.Item>

                            {item.coaching_name}

                        </List.Item>
                    )}
                />





            </div>



        </div>
    );

};
export default Live;