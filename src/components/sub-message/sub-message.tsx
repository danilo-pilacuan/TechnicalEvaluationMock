import { FC } from "react";
import "./sub-message.scss"

interface SubMessageProps{
    text:string
}

const SubMessage:FC<SubMessageProps> = ({text})=>{
    return <>
    <div className="subMessage">
        {text}
    </div>
    </>
}

export default SubMessage;