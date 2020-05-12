import React from "react";
import "./Trending.css"
const Trending=(props)=>{
    console.log("",props.trending);
    return(
        <div className={"Trendingimg"}>
            {
                props.trending.map((item,i)=>
                    // eslint-disable-next-line no-unused-expressions
                   <img  className={"trendingImageSize"} src={item.url}/>
                )
            }

        </div>
    );
};
export default Trending;
