import {useState} from "react";
import {IPageStructure} from "../models/PageStructure";

//styles
import style from '../styles/Index.module.scss';
import {SelectComponent} from "../components/select-component/select/SelectComponent";
import EditComponent from "../components/select-component/edit/EditComponent";
import {headersList} from "../components-default/Headers";
import {Header} from "../components/header/Header";
import {ContactUs} from "../components/contact-us/ContactUs";
import chooseHeader from "../choose-component/ChooseHeaders";


export default function Home() {


    const [indexAddElement,setIndexAddElement]=useState(-1)
    const [showSelectComponent, setShowSelectComponent] = useState(false);
    const [click, setClick] = useState(-1);
    const [clickedComponent, setClickedComponent] = useState<IPageStructure>(headersList[0])
    const [list, setList] = useState<IPageStructure[]>([...[headersList[0]]]);



    const setComponent=(data:any,type:string)=>{
        list[click].data=data;
        switch(type){
            case 'header':
                list[click].element=<Header {...data} />
                break;
            case 'contact-us':
                list[click].element=<ContactUs {...data} />
                break;
        }
        console.log(list)
        setList([...list]);
    }
    const onFocus = (index:number) => {
        if(index===click) {
            setClick(-1);
            setClickedComponent(headersList[0])
            return;
        }
        setClick(index);
        setClickedComponent(list[index]);
    }

    const undo = () => {
        list.splice(indexAddElement,1);
        setList([...list]);
    }

    const onSelectNewComponent=(component:IPageStructure)=>{
        let newComponent : IPageStructure = {
            index: component.index,
            type: component.type,
            data: component.data,
            metadata: component.metadata,
            element: <div />
        };
        switch (component.type) {
            case 'header':
                newComponent.element = chooseHeader(component.data,component.index);
                break;
            case 'contact-us':
                newComponent.element = chooseHeader(component.data,component.index);
                break;
        }
        console.log(component.type)
        list.splice(indexAddElement,0,newComponent);

        setList([...list]);
        setClick(indexAddElement)
        setShowSelectComponent(false)
    }
    const addElement = (index:number) => {
        setIndexAddElement(index+1);
        setClick(-1);
        setShowSelectComponent(true);
    }

    const closeAddElement = () =>{
        setShowSelectComponent(false)
    }

    return <>
        <header className={'undo'}> <button onClick={()=>undo()}>Undo</button> </header>
        <section id={'page-section'}>
            <div className={showSelectComponent ? style.selectComponent:style.displayNone}>
                <SelectComponent onClose={()=>closeAddElement()} onSelectNewComponent={(e)=>onSelectNewComponent(e)}/>
            </div>
            <div className={style.displayFlex}>
                <div className={click>-1? style.w70:style.w100}>
                    {
                        list.map((item,index)=>{
                            return <div key={index}>
                                <div onClick={()=>onFocus(index)} className={click===index?style.ElementClicked:''}>
                                    {item.element}
                                </div>
                                <div className={style.addElement} onClick={()=>addElement(index)}>
                                    <div className={style.circle}>+</div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className={click>-1?style.w30:style.displayNone}>
                    <EditComponent component={clickedComponent} setComponent={(e,type)=>{setComponent(e,type)}}/>
                </div>
            </div>
        </section>
    </>
}