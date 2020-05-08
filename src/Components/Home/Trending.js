import React from "react";
import adastra from "../../Assets/Trending/adastra.png";
import joker from "../../Assets/Trending/joker.png";
import totoro from "../../Assets/Trending/totoro.png";





const Trending=(props)=>{
    return(

        <div className={"Trendingimg"}>


            <img className={"TrendingList"} src={adastra}/>
            <img className={"TrendingList"} src={joker}/>
            <img className={"TrendingList"} src={totoro}/>

            {/*{*/}
            {/*    props.Trending.map((item,i)=>*/}
            {/*        // eslint-disable-next-line no-unused-expressions*/}
            {/*       <img src={ item.Trending}/>*/}
            {/*    )*/}
            {/*}*/}



        </div>
    );
};
export default Trending;