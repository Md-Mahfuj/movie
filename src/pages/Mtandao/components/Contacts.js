import React from "react";

import "../mtandao.css"

import MImage from "../assets";
import {Row, Col, Divider} from 'antd';
import ic_fb from "../assets/ic_fb.png";
import ic_twitter from "../assets/ic_twitter.png";
import ic_instagram from "../assets/ic_instagram.png";
import ic_e_mail from "../assets/ic_e-mail.png";
import ic_molile from "../assets/ic_mobile.png";
import RegistrationForm from "./M_From";


// import RegistrationForm from "./M_From";


const Contact = () => {
    return (
        <div className={"ContactSection"}>

            <h1 className={"ContactTitle"}>Contacts Us</h1>
            <hr className={"ContactHr"}/>
            <img src={MImage.imge10} className={"Map"}/>

            <div className={"WaysConnect"}>

                {/*<div>*/}
                {/*    <h1 className={"ConnectH1"} >Ways to Connect</h1>*/}
                {/*    <h4 className={"ConnectH4"}>Call,email,send us Msg - whatever works for you<br/>*/}
                {/*        We'll be here.*/}
                {/*    </h4>*/}
                {/*</div>*/}

                {/*<div className={"RegistrationItem"} >*/}


                {/*    <div className={"RegistrationItem1"}>*/}
                {/*        <div className={"ConnectAndImg"}>*/}
                {/*            <img src={MImage.ic_contact} className={"ic_contact"}/>*/}
                {/*            <h5 className={"AreaTitle"}>+255 754 869 302  (24/Support !)</h5>*/}
                {/*        </div>*/}


                {/*        <div className={"ConnectAndImg"}>*/}
                {/*            <img src={MImage.ic_map} />*/}
                {/*            <h5 className={"AreaTitle"}> Datavision International<br/>*/}
                {/*                337 Garden Road, Mikocheni Area,<br/>*/}
                {/*                Dar es Salaam, Tanzania.*/}
                {/*            </h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*    <div className={"Registration"}>*/}
                {/*        <RegistrationForm/>*/}


                {/*    </div>*/}

                {/*</div>*/}


                {/*fhooter*/}

                <div className={"N"}>
                    <div className={"p"}>
                        <div className={"w"}>
                            <h1 className={"ConnectH1"} >Ways to Connect</h1>
                            <h4 className={"ConnectH4"}>Call,email,send us Msg - whatever works for you<br/>
                                We'll be here.
                            </h4>
                        </div>


                        <div className={"I"}>
                            <img src={MImage.ic_contact} className={"ic_contact"}/>
                            <h4 className={"AreaTitle"}>+255 754 869 302 (24/Support !)</h4>
                        </div>
                        <div className={"I"}>
                            <img src={MImage.ic_map} className={""}/>
                            <div>
                                <h4 className={"AreaTitle"}>Datavision International</h4>
                                <p className={"AreaTitle"}>337 Garden Road, Mikocheni Area,<br/>
                                    Dar es Salaam, Tanzania.
                                </p>
                            </div>

                        </div>

                    </div>

                        <div className={"Registration"}>
                            <RegistrationForm/>


                        </div>

                </div>


                <div className={"footer"} >


                    <Row>
                        <Col span={6}>
                            <div>
                                <img src={MImage.Logo_2020} className={"Logo_2020"} alt={"Logo_2020"}/>

                                <div className={"CellSection"}>
                                    <img src={MImage.ic_phone} alt={"ic_phone"} className={"CellIMg"}/>
                                    <div>
                                        <h4 className={"CellH4"}>phone</h4>
                                        <h6 className={"CellH6"}>+255 22 2701845/6</h6>
                                    </div>

                                </div>

                            </div>
                        </Col>
                        <Col span={6}>

                            <div className={"AboutSectionItem"}>
                                <div className={"AboutSection"}>
                                    <h3>About Us</h3>
                                    <h3>Contact</h3>
                                    <h3>Terms & Conditions</h3>

                                </div>
                                <div className={"CellSection1"}>
                                    <img src={MImage.ic_molile} alt={"ic_molile"}/>
                                    <div>
                                        <h4 className={"CellH2"}>Mobile</h4>
                                        <h6 className={"CellH2"}>+255 754 869 302</h6>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col span={6}>

                            <div>

                                <div className={"CantactItem"}>
                                    <div className={"CellSection2"}>
                                        <img src={MImage.ic_fb} alt={"ic_fb"} className={"CellIMg1"}/>

                                        <h4 className={"Facebook"}>Facebook</h4>
                                    </div>
                                    <div className={"CellSection2"}>
                                        <img src={MImage.ic_twitter} alt={"ic_twitter"} className={"CellIMg1"}/>

                                        <h4 className={"Facebook"}>Twitter</h4>
                                    </div>
                                    <div className={"CellSection2"}>
                                        <img src={MImage.ic_instagram} alt={"ic_instagram"} className={"CellIMg1"}/>

                                        <h4 className={"Facebook"}>Instagram</h4>
                                    </div>
                                </div>


                                <div>
                                    <div className={"CellSection1"}>
                                        <img src={MImage.ic_e_mail} alt={"ic_e_mail"} className={"CellIMg"}/>

                                        <div>
                                            <h4 className={"CellH"}>Email/Web</h4>
                                            <h4 className={"CellH"}>info@datavision.co.t</h4>
                                            <h4 className={"CellH"}>zwww.datavishion.co.tz</h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>

                                <h2>Subscribe to our newsletter</h2>
                                <input className={"newsletterInput"} placeholder={"Enter your email"}/>
                                <button className={"newsletterButton"}><img src={MImage.paper}/></button>

                                <div>
                                    <div className={"CellSection1"}>
                                        <img src={MImage.ic_location} alt={"ic_location"} className={"CellIMg"}/>

                                        <div>
                                            <h4 className={"CellH"}>Address</h4>
                                            <h4 className={"CellH"}>
                                                337 Garden Road, Mikocheni,<br/>
                                                Dar es Salaam.
                                            </h4>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>


                </div>


            </div>


        </div>
    );
};
export default Contact;