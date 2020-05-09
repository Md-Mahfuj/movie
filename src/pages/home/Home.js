import React from "react";
import {useState} from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import {Row, Col, Divider} from 'antd';
import {Trending} from './components';
import Data from '../../api/Data';
import Image from "./assets";


const {Header, Content, Footer} = Layout;
// import {Icons}  from "../assets/home/Icons"

const Home = (props) => {

    const [trending, setTrending] = useState(Data.trending);

    return (
        <Layout>

            <div className={"haid"}>

                <img className={"img"}
                     src={"https://scontent.fdac25-1.fna.fbcdn.net/v/t1.0-9/s960x960/96085546_1194469644233660_6678780518735020032_o.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=Pdd_PEQDE74AX-dMtBJ&_nc_ht=scontent.fdac25-1.fna&_nc_tp=7&oh=33311882000e7111b3c07c236855705f&oe=5ED7FB3F"}/>

                <h1 className={"Logo"}>iVISION</h1>


                <nav className={"nav"}>


                    <ul>

                        <li className={'ms'}>Shows</li>
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
                        <button className={"watchsectionbutton"}>Watch Now</button>
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
                        <div>

                            <Trending
                                trending={trending}
                            />

                        </div>
                    </Col>
                    <Col className={"mk"}>
                        <div>
                            <h1>he</h1>
                            <h1>he</h1>
                            <h1>he</h1>
                        </div>
                    </Col>
                </Row>

            </Layout>


        </Layout>


    );
};
export default Home;
