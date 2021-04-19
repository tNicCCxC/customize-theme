import {IPageStructure} from "../models/PageStructure";
import {Header} from "../components/header/Header";

export const headersList:IPageStructure[] = [
    {
        type:'header',
        index:0,
        element: <Header
            listNav={['nav1','nav2','nav3']}
            IBlock={{cssArray:{color: '#9932CC',backgroundColor: '#d3d3d3'}}}
            title={'titulo'}
            logoSrc={'https://dogecoin.com/assets/img/doge.png'}
            cssLogo={{height: 50,width: 50}}/>,
        metadata:[
            {
                type:"array",
                propName:"listNav",
                text:"Ingrese la lista separada por comas"
            },
            {
                type:"object",
                propName:"IBlock",
                props:[
                    {
                        name:"cssArray",
                        subProps:[
                            {
                                text:'Escriba el color',
                                name:'color'
                            },
                            {
                                text:'Escriba el color de fondo',
                                name:'width'
                            }
                        ]
                    }
                ],
            },
            {
                type:"text",
                propName:"title",
                text:"Ingrese el titulo"
            },
            {
                type:"text",
                propName:"logoSrc",
                text:"Ingrese la url del logo"
            },
            {
                type:"object",
                propName:"cssLogo",
                props:{
                    subProps:[
                        {
                            text:'Escriba el alto',
                            name:'height'
                        },
                        {
                            text:'Escriba el ancho',
                            name:'backgroundColor'
                        }
                    ]
                }
            },
        ],
        data:{
            listNav:['nav1','nav2','nav3'],
            IBlock:{
                cssArray:{
                    color: 'darkorchid',
                    backgroundColor: 'lightgray'
                }
            },
            title:'titulo',
            logoSrc:'https://dogecoin.com/assets/img/doge.png',
            cssLogo:{
                height: 50,
                width: 50
            }
        }
    }
]