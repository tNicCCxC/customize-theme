import {IMetadata, IPageStructure} from "../../../models/PageStructure";
import style from './EditComponent.module.scss';
import {ChangeEvent} from "react";


export default function EditComponent(props:{component:IPageStructure, setComponent:Function}){
    const { component,setComponent } = props
    let { data } = component;

    const editInputNormal = (e:ChangeEvent<HTMLInputElement>,meta:IMetadata) => {
        if(meta.type==='text'){
            data[meta.propName]=e.target.value;
            return;
        }
    }

    const rednerInput=(meta:IMetadata)=>{
        if(meta.type==="text" || meta.type==='array'){
            return <div>
                <label>{meta.text}</label><br/>
                <input onChange={(e)=> editInputNormal(e,meta)}/>
            </div>
        }
        return <div>es object fuck</div>
    }

    return <div className={style.container}>
        <h2>Modifica el bloque</h2>
        {
            component.metadata.map((meta,index)=>{
                return <div key={index} className={style.element}>
                    {rednerInput(meta)}
                </div>
            })
        }
        <div><button onClick={()=>{setComponent(data)}}>Aceptar</button></div>
    </div>
}