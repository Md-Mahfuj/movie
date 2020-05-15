import React from "react";
import { Card } from 'antd';


const BlogPost=(props)=>{

    return(
        <div>
            <div className={"postTitle"}>
                <h1>Latest posts</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's<br/> standard dummy text ever since the 1500s, when an unkno</p>

            </div>

            <div className={"postCard"}>
                {
                    props.blogpost.map((item,i)=>

                        <div >
                            <Card style={{ width: 300 }}
                                  cover={<img alt="example" src={item.url} />}
                            >

                                <div className={"Date"}>
                                    <p>{item.date}</p>
                                    <p>{item.Writer}</p>

                                </div>
                                <h1>{item.title}</h1>

                                <p>{item.more}</p>
                            </Card>
                        </div>




                    )

                }

            </div>





        </div>
    );
};
export  default BlogPost ;