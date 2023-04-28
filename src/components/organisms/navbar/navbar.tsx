import { FC } from "react";
import "./navbar.scss"

import Menu from "../../molecules/menu/menu";
import Logo from "../../atoms/logo/logo";

interface NavbarProps{

}

const Navbar:FC<NavbarProps> = ({})=>{
    return <>
    <div className="navbar">
        <Logo/>
        <Menu/>
    </div>
    </>
}

export default Navbar;