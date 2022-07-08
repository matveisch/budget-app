import React, {Dispatch, SetStateAction, useState} from 'react';

import './Dropdown.css';
import arrow from '../../data/images/arrow-down-sign-to-navigate.png';

interface DropdownProps {
    placeholder: string;
    options: string[];
    currentCategory: string;
    setCurrentCategory: Dispatch<SetStateAction<string>>;
}

const Dropdown = (props: DropdownProps) => {
    const [dropdownToggle, setDropdownToggle] = useState(false);

    const optionClickHandler = (option: string) => {
        props.setCurrentCategory(option);
        setDropdownToggle(false);
    }

    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={() => setDropdownToggle(!dropdownToggle)}>
                {props.currentCategory.length > 0 ? props.currentCategory : props.placeholder}
                <img src={arrow} alt="" style={dropdownToggle ? {transform: 'rotate(180deg)'} : undefined}/>
            </div>
            <div className="dropdown__options-container"
                 style={dropdownToggle ? {display: 'flex'} : {display: 'none'}}>{props.options.map((option, index) => {
                return (
                    <p key={index} className="option" onClick={() => optionClickHandler(option)}>{option}</p>
                )
            })}</div>
        </div>
    );
};

export default Dropdown;