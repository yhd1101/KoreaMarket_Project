import React from 'react';
import {useNavigate} from "react-router-dom";

const GoogleLoginButton = ({ text, onClick, disabled, className, icon}) => {


    return (
        <button
            onClick={onClick}
            className={`flex max-h-[44px] items-center justify-center rounded-md transition-all ${
                className ?? ""
            }`}
            disabled={disabled}
            aria-label={text}
        >
            {icon && React.createElement(icon)}
            {text}
        </button>
    );
};

export default GoogleLoginButton;