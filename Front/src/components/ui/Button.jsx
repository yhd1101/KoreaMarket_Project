import React from "react";




const Button = ({ text, onClick, disabled, className, icon }) => {
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

export default Button;