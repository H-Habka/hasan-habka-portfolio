import React from "react";

const CustomButton = ({ title, reversed }) => {
    const reversedStyles = "bg-white text-two before:bg-two after:bg-two hover:text-white";
    const normalStyles = "bg-two text-white before:bg-white hover:text-two  after:bg-white";
    return (
        <button
            className={`${
                reversed ? reversedStyles : normalStyles
            } text-lg text-semibold m-2 px-4 py-2 border-2 border-two transition-all before:h-0 before:absolute duration-700 before:w-full relative before:left-0 before:top-0 before:-z-1 z-1 after:h-0 after:absolute after:w-full after:left-0 after:bottom-0 after:-z-1 before:transition-all before:duration-700 after:transition-all after:duration-700 hover:before:h-1/2 hover:after:h-1/2`}
        >
            <p>{title}</p>
        </button>
    );
};

export default CustomButton;
