import {IBlock} from "../block/Interface";

export interface IContactUs {
    IBlock      :   IBlock,
    title       :   string,
    inputs      :   string[],
    email       :   string,
}