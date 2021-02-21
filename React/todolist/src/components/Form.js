import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    //value인풋의 내용 //onCreate클릭될 때 실행함수
    //onChange변경될 때 실행함수 //onKeyPress
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                add
            </div>
        </div>
    );
};

export default Form;
