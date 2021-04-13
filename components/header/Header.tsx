/** @jsx jsx */
/** @jsxRuntime classic */

import React from "react"
import { css, jsx } from '@emotion/react';
import {IHeader} from "./Interface";
import {Block} from "../block/block";
import style from './Header.module.scss';


export const Header = (props:IHeader) =>{
    const { IBlock,title,listNav,logoSrc, cssLogo} = props;
    return <Block {...IBlock} >
        <header className={style.disFlex}>
            <div className={style.disFlex}>
                <img src={logoSrc} alt={'logo'} css={cssLogo} />
                <h1 className={style.margin}>{title}</h1>
            </div>
            <div className={style.navStyle}>
                <nav className={style.disFlex}>
                    {listNav.map((nav,index)=>{
                        return <div key={index} className={style.nav}>{nav}</div>
                    })}
                </nav>
            </div>
        </header>
    </Block>
}