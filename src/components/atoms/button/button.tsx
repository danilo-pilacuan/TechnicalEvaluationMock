import { FC } from "react";
import "./button.scss"

interface ButtonProps{
    text:string,
    type?: "primary"|"danger",
    size?: "small"|"big",
    onClick: () => void;
}

const Button:FC<ButtonProps> = ({text="",size="",type="primary",onClick})=>{
    return <>
    <button className={`button button--${type} button--${size}`} onClick={onClick}>{text}</button>
    </>
}

export default Button;