/** @jsx jsx */
/** @jsxRuntime classic */

import React from "react"
import { css, jsx } from '@emotion/react'

import {IBlock} from "./Interface";

export const Block: React.FC<IBlock> = ({children,cssArray}) => {
    return <>
        <div css={cssArray} >{children}</div>
    </>
}