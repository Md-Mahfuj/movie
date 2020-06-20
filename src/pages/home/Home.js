import React from "react";
import {useState} from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import {Row, Col, Divider} from 'antd';
import {Trending} from './components';
import Data from '../../api/Data';
import Image from "./assets";
import "./Home.css"
// import "../../App.css"
import "./components/RecentPlaying.css"
import "./components/CommingSoon.css"
import "./components/Trending.css"
import ComingSoon from "./components/ComingSoon";
import RecentPlaying from "./components/RecentPlaying";
import {Link} from "react-router-dom";
import Mtandao from "../Mtandao";


const {Header, Content, Footer} = Layout;
// import {Icons}  from "../assets/home/Icons"

const Home = (props) => {

    const [trending, setTrending] = useState(Data.trending);
    const [newmovies, setnewmovies] = useState(Data.newmovies);
    const [recentplay, setrecentplay] = useState(Data.recentplay)

    return (
        <Layout>

            <div className={"haid"}>

                <img className={"img"}
                     src={Image.homepc}/>

                <h1 className={"Logo"}>iVISION</h1>


                <nav className={"nav"}>


                    <ul>

                        <li className={'ms'}> Shows </li>
                        {/*<Link to={Mtandao}>Shows</Link>*/}

                        <li className={'ms'}>Movies</li>
                        <li className={'ms'}>Movies</li>

                        <li className={'ms'}>Live Tv</li>
                        <li className={'ms'}>Genres</li>
                        <li className={'ms'}>Songs</li>



                    </ul>


                </nav>

                <div className={"watchsection"}>
                    <div className={"watchsectionbar"}>
                        <h2 id={"premiere"}>Premiere now</h2>
                        <h2 id={"wonder"}>Wonder Woman 1984</h2>
                        <h3 id={"Action"}>Action</h3>
                        <button className={"watchsectionbutton"}> <a href={"https://www.facebook.com/md.mahfuj.1272010"}>Watch Now</a></button>
                    </div>

                    <div className={"watchsectionimg"}>
                        <img className={"watchsectionimg1"}
                             src={Image.movie1}/>
                        <img className={"watchsectionimg1"}
                             src={Image.car}/>
                        <img className={"watchsectionimg1"}
                             src={Image.movie1}/>

                    </div>
                </div>

            </div>


            <Layout className={"Layout2"}>

                <div className={"trendingbar"}>
                    <h3 className={"Trending"}>Trending</h3>
                    <div className={"ComingSoon"}>
                        <h3 className={"comingitem"}>More></h3>
                        <h3 className={"comingitem"}>Coming Soon</h3>
                        <h3 id={"More"}>More></h3>
                    </div>
                </div>
                <Row>
                    <Col className={"md"}>
                        <div className={"trendingMargin"}>

                            <Trending
                                trending={trending}
                            />

                        </div>
                        <Row>
                            <Col className={"RecentPlaying"}>
                                <div>
                                    <RecentPlaying recentplay={recentplay}/>

                                </div>
                            </Col>


                            <Col className={"RecentShow"}>

                                <div className={"RecentShowTitle"}>
                                    <h3 className={"RecentTitle"}>Recent Show</h3>
                                    <h3 className={"RecentTitle2"}>More</h3>
                                </div>

                               <img  className={"RecentShowImg"} src={Image.recentshow}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={"mk"}>
                        <div>
                            <ComingSoon newmovies={newmovies}/>

                        </div>
                    </Col>
                </Row>

            </Layout>


        </Layout>


    );
};
export default Home;
