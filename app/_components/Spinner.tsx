import React from "react";
import { SpinnerProps } from "../_lib/definitions";

const Spinner: React.FC<SpinnerProps> = ({ size = "4rem", fixed = false }) => {
    return (
        <div className={`${fixed ? "fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur flex items-center justify-center z-[999]" : "flex items-center justify-center"}`}>
            <svg id="loader" width={size} viewBox="25 25 50 50" strokeWidth="2">
                <circle cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
        </div>
    );
};

export default Spinner;
