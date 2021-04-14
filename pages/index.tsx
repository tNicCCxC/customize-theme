import {Header} from "../components/header/Header";
import {LinkedList} from "../utils/data-structure/LinkedListComponent";

export default function Home() {

    const click=(e:any)=>{
        console.log(e)
    }



    let lista = new LinkedList();

    lista.add(<Header
        listNav={['Hola','Adios','hambre']}
        IBlock={{cssArray:{color: 'darkorchid',backgroundColor: 'lightgray'},onFocus:click}}
        title={'Prueba de concepto'}
        logoSrc={'https://dogecoin.com/assets/img/doge.png'}
        cssLogo={{height: 100,width: 100}}/>);

    lista.add(<Header
        listNav={['Hola','Adios','hambre','esto']}
        IBlock={{cssArray:{color: 'darkorchid',backgroundColor: 'lightgray'},onFocus:click}}
        title={'Prueba de concepto'}
        logoSrc={'https://dogecoin.com/assets/img/doge.png'}
        cssLogo={{height: 100,width: 100}}/>);

    lista.add(<Header
        listNav={['Hola','Adios','hambre','prueba']}
        IBlock={{cssArray:{color: 'darkorchid',backgroundColor: 'lightgray'},onFocus:click}}
        title={'Prueba de concepto'}
        logoSrc={'https://dogecoin.com/assets/img/doge.png'}
        cssLogo={{height: 100,width: 100}}/>);



    lista.addToIndex(<Header
        listNav={['Hola','Adios','hambre','prueba','que hay g']}
        IBlock={{cssArray:{color: 'darkorchid',backgroundColor: 'lightgray'},onFocus:click}}
        title={'Prueba de concepto'}
        logoSrc={'https://dogecoin.com/assets/img/doge.png'}
        cssLogo={{height: 100,width: 100}}/>, 0);

    lista.addToIndex(<Header
        listNav={['Hola','Adios','hambre','prueba','que hay g','funciona 0']}
        IBlock={{cssArray:{color: 'darkorchid',backgroundColor: 'lightgray'},onFocus:click}}
        title={'Prueba de concepto'}
        logoSrc={'https://dogecoin.com/assets/img/doge.png'}
        cssLogo={{height: 100,width: 100}}/>, 0);

    lista.modify(<Header
        listNav={['jodase','tengo','hambre']}
        IBlock={{cssArray:{color: 'darkorchid',backgroundColor: '#D39704'},onFocus:click}}
        title={'Prueba de concepto'}
        logoSrc={'https://dogecoin.com/assets/img/doge.png'}
        cssLogo={{height: 100,width: 100}}/>,3)

    return <>
        <header className={'undo'}> <button>Undo</button> </header>
        <section id={'page-section'}>
            { lista.toArray().map((e,index)=>{
                return <div key={index}>{e}</div>
            }) }
        </section>
    </>
}