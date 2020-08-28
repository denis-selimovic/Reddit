import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Menu = ({ options }) => {

    const onChange = value => {
        console.log(value);
        options[value].callback();
    };

    const renderOptions = () => {
        Object.keys(options).forEach(key => {
            return (
                <Option value={key}>options[key].value</Option>
            );
        });
    };

    return (
        <Select onChange={onChange} style={{width: '120px'}} >
            {renderOptions()}
        </Select>
    );
};

export default Menu;
