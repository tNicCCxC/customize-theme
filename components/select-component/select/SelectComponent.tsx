import style from './SelectComponent.module.scss';
import {IPageStructure} from "../../../models/PageStructure";
import {Header} from "../../header/Header";
import {useState} from "react";
import {ContactUs} from "../../contact-us/ContactUs";
import {headersList} from "../../../components-default/Headers";
import {contactUsList} from "../../../components-default/ContactUs";
import {cardList} from "../../../components-default/Cards";

export function SelectComponent (props:{onSelectNewComponent:Function, onClose: Function}) {
    const { onSelectNewComponent, onClose} = props;
    const [category,setCategory] = useState("Headers");
    const list = ["Headers","Contactenos","Cards"];
    const headersComponents: IPageStructure[] = headersList;
    const contactUsComponents: IPageStructure[] = contactUsList;
    const cardsComponents: IPageStructure[] = cardList;

    const categorySelected = (category:string) =>{
        switch (category){
            case "Headers":
                return <div>
                    {headersComponents.map((header,index)=>{
                        return <div key={index} className={style.card} onClick={()=>onSelectNewComponent(header)}><button>{header.element}</button></div>
                    })}
                </div>
            case "Contactenos":
                return <div>
                    {
                        contactUsComponents.map((item,index)=>{
                            return <div key={index} className={style.card} onClick={()=> onSelectNewComponent(item)}><button>{item.element}</button></div>
                        })
                    }
                </div>
            case "Cards":
                return <div>
                    {
                        cardsComponents.map((item,index)=>{
                            return <div key={index} className={style.card} onClick={()=> onSelectNewComponent(item)}><button>{item.element}</button></div>
                        })
                    }
                </div>
            default:
                return <div />
        }

    }
    return <div className={style.selectComponent}>
        <div className={style.category}>
            <h5>Categoria</h5>
            <div className={style.list}>
                {
                    list.map((item,index)=>{
                        return <div key={index} className={style.item} ><button onClick={()=>setCategory(item) } className={style.color}>{item}</button></div>
                    })
                }
            </div>

        </div>
        <div className={style.line}>.</div>
        <div className={style.components}>
            <div className={style.listComponent}>
                <h5>Componentes</h5>
                <div>
                    {
                        categorySelected(category)
                    }
                </div>
            </div>
            <div  className={style.button}><button className={style.color} onClick={()=>onClose()}>X</button></div>
        </div>
    </div>
}