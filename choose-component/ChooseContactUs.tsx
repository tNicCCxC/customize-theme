import {ContactUs} from "../components/contact-us/ContactUs";


export default function chooseContactUs (data:any,index:number) {
    switch (index){
        case 0:
            return <ContactUs {...data} />
        case 1:
            return <ContactUs {...data} />
        default:
            return <div />
    }
}