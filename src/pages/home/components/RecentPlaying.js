import React from "react";
import  './RecentPlaying.css'
import Image from "../assets"


const RecentPlaying=(props)=>{
    return(

        <div >
            <h3 className={"RecentPlayingTitle"}>Recent Playing</h3>

            {
                props.recentplay.map((item,i)=>
                    <div className={"RecentPlayingItem"}>
                        <div className={"recent"}>

                            <img className={"RecentMovieImg"} src={item.url}/>

                            <div className={"RecentMovieTitle"}>
                                <h2 className={"RecentMovieTitle1"}>{item.title} </h2>
                                <p className={"RecentMovieTitle2"}>{item.date} </p>
                            </div>

                        </div>

                        <div>
                            <h4>{item.timeZone}</h4>
                            <p>{item.time}</p>

                        </div>

                    </div>


                )
            }




        </div>
    );
};
export default RecentPlaying;