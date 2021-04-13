/** @jsx jsx */
/** @jsxRuntime classic */

import React from "react"
import { css, jsx } from '@emotion/react'

import {IBlock} from "./Interface";

export const Block: React.FC<IBlock> = ({children,cssArray, onFocus}) => {
    return <>
        <div css={cssArray} onClick={(e)=>onFocus(e)}>{children}</div>
    </>
}