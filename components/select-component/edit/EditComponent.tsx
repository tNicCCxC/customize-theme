import {IPageStructure} from "../../../models/PageStructure";
import style from './EditComponent.module.scss';


export default function EditComponent(props:{component:IPageStructure, setComponent:Function}){
    const { component } = props
    console.log(component)
    return <div className={style.container}>
        <h2>Modifica el bloque</h2>
        {
            component.metadata.map((meta,index)=>{
                return <div key={index} className={style.element}>asds</div>
            })
        }
    </div>
}