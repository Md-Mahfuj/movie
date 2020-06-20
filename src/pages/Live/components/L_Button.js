import React from "react";


import { Select } from 'antd';

const { Option } = Select;



const L_Button = () =>{
    function handleChange(value) {
        console.log(value); // { key: "lucy", label: "Lucy (101)" }
    }
    return(
        <Select
            labelInValue
            defaultValue={{ key: 'lucy' }}
            style={{ width:88,background:"#D6EAF8" }}
            onChange={handleChange}
        >
            <Option value="jack">Class-1</Option>
            <Option value="lucy">Class-2</Option>
        </Select>

    );
};
export default  L_Button;