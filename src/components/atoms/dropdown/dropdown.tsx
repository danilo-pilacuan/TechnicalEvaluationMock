import React from "react";
import { FC } from "react";
import "./dropdown.scss"

interface DropdownProps{
    text:string,
    hasArrow:boolean,
    onClick: () => void;
}

const Dropdown:FC<DropdownProps> = ({hasArrow=true,text="",onClick})=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
      };
    
    return <>
    <div className="dropdown">
      <div className="dropdown__label">
      {text}
      </div>
      {hasArrow && <div className="dropdown__arrow">
      <svg enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24"><polyline fill="none" points="21,8.5 12,17.5 3,8.5 " stroke="#000000" stroke-miterlimit="10" stroke-width="2"/></svg>
      </div>} 
    </div>
    </>
}

export default Dropdown;