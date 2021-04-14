import {Header} from "../components/header/Header";
import {useState} from "react";
import {IPageStructure} from "../models/PageStructure";

//styles
import style from '../styles/Index.module.scss';
import {SelectComponent} from "../components/select-component/select/SelectComponent";


export default function Home() {


    const [indexAddElement,setIndexAddElement]=useState(-1)
    const [showSelectComponent, setShowSelectComponent] = useState(false);
    const [click, setClick] = useState(-1);
    const [list, setLista] = useState<IPageStructure[]>([{
        element: <Header
            listNav={['Hola','Adios','hambre']}
            IBlock={{cssArray:{color: 'darkorchid',backgroundColor: 'lightgray'}}}
            title={'Prueba de concepto'}
            logoSrc={'https://dogecoin.com/assets/img/doge.png'}
            cssLogo={{height: 100,width: 100}}/>
    }]);


    const onFocus = (index:number) => {

    }

    const undo = () => {
        list.splice(indexAddElement,1);
        setLista([...list]);
    }

    const onSelectNewComponent=(component:IPageStructure)=>{
        list.splice(indexAddElement,0,component);
        setLista([...list]);
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
        </section>
    </>
}