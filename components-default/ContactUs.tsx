import {IPageStructure} from "../models/PageStructure";
import {ContactUs} from "../components/contact-us/ContactUs";

export const contactUsList:IPageStructure[] = [
    {
        type:'contact-us',
        index:0,
        element: <ContactUs
            IBlock={{cssArray:{}}}
            title={'Contactanos'}
            inputs={['Nombre', 'apellido', 'pregunta']}
            email={'tu-conejita-caliente@hot.com'} />,
        metadata:[
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
                type:"array",
                propName:"inputs",
                text:"Ingrese la lista separada por comas"
            },
            {
                type:"text",
                propName:"email",
                text:"Ingrese el email"
            },
        ],
        data:{
            IBlock:{
                cssArray:{
                    color: 'black',
                    backgroundColor: 'white'
                }
            },
            title:'Contactanos',
            inputs:['Nombre', 'apellido', 'pregunta'],
            email:'tu-conejita-caliente@hot.com'
        }

    }
]