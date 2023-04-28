import { FC } from "react";
import "./logo.scss"
import proximaLogo from './../../../Proxima_Logo.png';

interface LogoProps{

}

const Logo:FC<LogoProps> = ({})=>{
    return <>
    <div className="logo">
        <img src={proximaLogo} alt="logo" className="logo__image"/>
        <div className="logo__label">PROXIMA</div>
    </div>
    </>
}

export default Logo;