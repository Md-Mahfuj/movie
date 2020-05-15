

import React from "react";
import { Button } from 'antd';

const FooterT=()=>{

    return(
        <div>

            <div className={"footer1"}>


                <div className={"SubscribeText1"}>
                    <h1 className={"SubscribeText"}>Subscribe and join thousands like you!</h1>
                </div>

                <input placeholder="Vinay@business.com" className={"Subscribesarch"}/>
                <Button className={"SubscribeButton"}>Subscribe</Button>


            </div>


            <div className={"contactBlog"}>
                <div className={'contactBlog1'} >
                    <h3>CONTACTS</h3>
                    <h5>25 Ratna Park,<br/>
                        Don Bausch Road, India</h5>

                    <p>9080000000</p>
                    <p>info@myblog.com</p>

                </div>


                <div >
                    <h3>Popular</h3>

                    <h4>Free  Travel videos
                    </h4>
                    <h4>Maps
                    </h4>
                    <h4>Hotel contact book</h4>

                </div>




                <div className={'contactBlog2'}>
                    <Button type="primary" className={"ContactUsB"}>Contact Us</Button>
                    <Button type="primary">Follow Us</Button>
                </div>
            </div>

        </div>
    );
};

export default FooterT;