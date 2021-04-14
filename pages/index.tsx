import {Header} from "../components/header/Header";
import {useState} from "react";
import {IPageStructure} from "../models/PageStructure";

//styles
import style from '../styles/Index.module.scss';
import {ContactUs} from "../components/contact-us/ContactUs";


export default function Home() {


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
        console.log(index)
        setClick(index)
    }

    const undo = () => {

    }

    const addElement = (index:number) => {
        setClick(-1)
        list.splice(index+1,0,{
            element: <Header
                listNav={['Hola','Adios','hambre','example']}
                IBlock={{cssArray:{color: 'darkorchid',backgroundColor: '#9ADA22'}}}
                title={'Prueba de concepto'}
                logoSrc={'https://dogecoin.com/assets/img/doge.png'}
                cssLogo={{height: 100,width: 100}}/>
        });
        list.splice(index+1,0,{
            element: <ContactUs IBlock={{cssArray:{}}} title={'Contactanos'} inputs={['Nombre', 'apellido', 'pregunta']} email={'tu-conejita-caliente@hot.com'} />
        })
        setLista([...list]);
    }

    return <>
        <header className={'undo'}> <button onClick={()=>undo()}>Undo</button> </header>
        <section id={'page-section'}>
            {
                list.map((item,index)=>{
                    console.log(click+'==='+index)
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