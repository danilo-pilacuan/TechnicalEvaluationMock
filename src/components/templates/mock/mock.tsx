import React from "react";
import { FC } from "react";
import "./mock.scss"
import Navbar from "../../organisms/navbar/navbar";
import Message from "../../message/message";
import SubMessage from "../../sub-message/sub-message";
import Button from "../../atoms/button/button";

interface MockProps{

}

const Mock:FC<MockProps> = ({})=>{
    
    return <>
      <div className="mock">
      <Navbar/>
          <div className="mockContainer">
          <Message text="Unlock nearshore resources"/>
          <Message text="& insurtech capabilites"/>
          <SubMessage text="We deliver transformation"/>
          <Button text="Discover How >" onClick={()=>{}} size="big"/>

          </div>
      </div>

    </>
}

export default Mock;