import { useState } from "react";

const parameters = "{flyoutMenuOpen = false}"

const clickHandle = () => {
    
} 


const NavOptions = () =>{
    return (
        <nav className="hidden md:flex space-x-10">
            <div className="relative" onClick={clickHandle} >
                <button>

                </button>
            </div>
        </nav>
    )
}
export default NavOptions;