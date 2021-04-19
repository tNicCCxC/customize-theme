import {Header} from "../components/header/Header";

export default function chooseHeader (data:any, index:number) {
    console.log(data,index)
    switch (index){
        case 0:
            return <Header {...data}/>
        case 1:
            return <Header {...data}/>
        default:
            return null;
    }
}