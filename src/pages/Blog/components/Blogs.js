import React from "react";
import "../Blog.css"

const Blogs = (props) => {
    return (
        <div >

            {
                props.blogs.map((item, i) =>

                          <div className={"blogs"}>
                              <div className={"r"}>
                                  <h4>{item.tag}</h4>
                                  <h1>{item.title}</h1>
                                  <p>{item.detalls}</p>
                              </div>

                              <div className={"blogsImg"} >
                                  <img src={item.url}/>
                              </div>
                          </div>


                )
            }
            <h1 className={"More"}>More</h1>

        </div>
    );
};
export default Blogs;