import React from "react"
import MImage from '../assets'
import {Button} from "antd";
import "./Details.css"


const Details = () => {
    return (
        <div  >
            <h1 className={"SMSTitle"}>What is SMS</h1>
            <hr className={"Hr"}/>
            <p className={"SMSp"}>SMS Mtandao is an online Bulk SMS platform used to send<br/>
                text messages from any internet connectedPC/Notebookto <br/>
                over 500 networks in over 150 countries worldwide, anytime.
            </p>
            <div className={"WhatSMS"}>
                <div>
                    <div className={"SMSDetails"}>
                        <img src={MImage.RightSymbol} className={"RightSymbol"}/>
                        <p className={"SMSDetailsP"}>SMS Mtandao provides a reliable and affordable way<br/>
                            to push your messages to your contacts.
                        </p>
                    </div>
                    <div className={"SMSDetails"}>
                        <img src={MImage.RightSymbol} className={"RightSymbol"}/>
                        <p className={"SMSDetailsP"}>SMS Mtandao as a powerful SMS tool supports both<br/>
                            one-to-one and bulk messages sending to thousands<br/>
                            in a more efficient manner
                        </p>
                    </div>
                    <div className={"SMSDetails"}>
                        <img src={MImage.RightSymbol} className={"RightSymbol"}/>
                        <p className={"SMSDetailsP"}>SMS Mtandao will add value to your interaction<br/>
                            approach, while save costs, and save time compared<br/>
                            to the traditional approach to send bulk messages.<br/>
                            Purchase SMS credits online here and start ‘texting’<br/>
                            your customers, patients, students and anyone with<br/>
                            whom you need to stay in contact
                        </p>
                    </div>

                </div>

                 <img src={MImage.Man} className={"Man"}/>
            </div>


            <div className={"Try"}>
                <img src={MImage.Try} className={"TryImg"}/>
                <div className={"TryItem"}>
                    <h1 style={{color:"#383784"}}>Try it now !</h1>
                    <p  style={{color:"#383784"}}>Get notified about company updates, news and blog posts.<br/>
                        We hate spam
                    </p>
                    <input type={"Email"} placeholder={"email"} className={"Email"}  />
                    <Button className={"GetButton"}>Get Started</Button>
                    <p  style={{color:"#383784"}}>Easy setup . Check out Terms of Use.</p>

                </div>

            </div>

        </div>
    );

};

export default Details;