import NavLogo from "./Nav-Logo";
import NavOptions from "./Nav-Options"

import { useState } from "react";


const Nav = () => {
    const [open, setOpen] = useState(false);
    const [flyer, setFlyer] = useState(false);
    const [flyerTwo, setFlyerTwo] = useState(false);

    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    {/*---------Secciones---------*/}
                    <NavLogo />
                    <NavOptions />
                </div>
            </div>
        </div>
    )
}

export default Nav;