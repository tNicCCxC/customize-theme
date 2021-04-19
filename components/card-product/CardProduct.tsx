import React from "react";
import EllipsisText from "react-ellipsis-text";

import style from './CardProduct.module.scss';
import {Products} from "../../Jsons/Products";
import {Block} from "../block/block";
import {ICardOne} from "./Interface";

export function CardProduct(props:{filename:string, type:string, description:string, price:number, title:string }){
    const {
        filename,
        type,
        description,
        price,
        title
    } = props;
    return <div className={style.cardProduct}>
        <div className={style.sectionDiv}>
            <img src={filename} alt={title}/>
        </div>
        <div className={style.sectionBody}>
            <h5>{title}</h5>
            <h6>{type}</h6>
            <EllipsisText
                text={description}
                length={200}
            />
            <p>
                <strong>${price}</strong>
            </p>
        </div>
    </div>
}


export default function WrapCardOne (props:ICardOne) {
    const products = Products;
    return <Block {...props.IBlock} >
        <div className={style.wrapCardOne}>
            <div className={style.flexDisplay}>
                {
                    products.map((product,index)=>{
                        return <div key={index} className={style.card}>
                            <CardProduct
                                filename={product.filename}
                                type={product.type}
                                description={product.description}
                                price={product.price}
                                title={product.title}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    </Block>
}