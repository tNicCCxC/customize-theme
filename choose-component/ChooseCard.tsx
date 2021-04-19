import WrapCardOne from "../components/card-product/CardProduct";


export default function chooseCard (data:any,index:number) {
    switch (index){
        case 0:
            return <WrapCardOne {...data} />
        case 1:
            return <WrapCardOne {...data} />
        default:
            return <div />
    }
}