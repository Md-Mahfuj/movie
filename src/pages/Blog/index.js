import React from "react"
import {useState} from "react"
import {Hedear} from "./components/index"
import "./Blog.css"
import {Button} from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
import Union from ".//asstes/Union 3.png"
import Data2 from "./asstes/Data2";
import Blogs from "./components/Blogs";
import BlogPost from "./components/BlogPost";
import FooterT from "./components/Footer";



const Index = (props) => {

    const [blogs,setblogs]=useState(Data2.Blog);
    const [blogpost,setblogpost]=useState(Data2.post)


    return (
        <div>
            <Hedear/>
            <div className={"firstLayout"}>
                <div >
                    <h4 className={"Experience"}>My Experience Blog</h4>
                    <h1 className={"travelIdeas"}>My travel Ideas</h1>
                    <p>Far far away, behind the word mountains, far from the countries<br/>
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live <br/> in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</p>
                    <div>


                        <input placeholder={"Search Index"}/>
                        <Button className={"buttonS"}>Search</Button>

                    </div>

                </div>
                <img src={Union} className={"firstLayoutImg"}/>
            </div>



           <div className={"blogLayout"}>
               <Blogs blogs={blogs} />
           </div>
            <div>
                <BlogPost blogpost={blogpost}/>
            </div>


            <FooterT/>



        </div>


    );


};

export default Index;