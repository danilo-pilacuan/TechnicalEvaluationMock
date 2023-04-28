import { FC } from "react";
import "./menu.scss"
import Dropdown from "../../atoms/dropdown/dropdown";
import Button from "../../atoms/button/button";
interface MenuProps{

}

const Menu:FC<MenuProps> = ({})=>{
    return <>
    <div className="menu">
    <Dropdown text="About Us" hasArrow={false} onClick={()=>{}}/>
    <Dropdown text="Nearshoring" hasArrow={true} onClick={()=>{}}/>
    <Dropdown text="Insurtech" hasArrow={true} onClick={()=>{}}/>
    <Dropdown text="Careers" hasArrow={false} onClick={()=>{}}/>
    <Button text="Contact Us" onClick={()=>{}} size="small"/>
    </div>
    </>
}

export default Menu;