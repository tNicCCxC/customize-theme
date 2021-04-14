import {IContactUs} from "./Interface";
import {Block} from "../block/block";
import React from "react";

export function ContactUs (props:IContactUs)  {
    const { IBlock,title,email,inputs } = props;
    return <Block {...IBlock} >
        <h2>{title}</h2>
        <form>
            {
                inputs.map((input,index)=>{
                    return <div key={index}>
                        <label>Ingrese {input}</label>
                        <input/>
                    </div>
                })
            }
        </form>
        <h5>Correo de contacto</h5> <strong>{email}</strong>
    </Block>
}