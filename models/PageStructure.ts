export interface IPageStructure {
    index: number,
    element: JSX.Element,
    metadata: IMetadata[],
    data : any;
    type:string
}

export interface IMetadata {
    type:     'array'|'object'|'text';
    propName: string;
    text?:    string;
    props?:   Prop[] | PropsClass;
}

export interface Prop {
    name:     string;
    subProps: SubProp[];
}

export interface SubProp {
    text: string;
    name: string;
}

export interface PropsClass {
    subProps: SubProp[];
}