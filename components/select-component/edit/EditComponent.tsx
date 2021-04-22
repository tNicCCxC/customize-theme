import {IMetadata, IPageStructure} from "../../../models/PageStructure";
import style from './EditComponent.module.scss';
import {ChangeEvent, useState} from "react";
import { SketchPicker } from 'react-color';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

//storage
import {storage} from "../../../utils/Firebase";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


export default function EditComponent(props:{component:IPageStructure, setComponent:Function}){

    const [files, setFiles] = useState([])
    const [url, setUrl] = useState<string>('');

    const { component,setComponent } = props
    let { data } = component;
    const [cssBlock, setCssBlock] = useState(component.data.IBlock.cssArray);

    const server = {
        process: (fieldName, file, metadata, load, error, progress, abort) => {

            const task = storage.ref('images/' + file.name).put(file, {
                contentType: 'image/jpeg',
            });
            task.on(

                "state_changed",
                snapshot => {
                    progress(true,snapshot.bytesTransferred, snapshot.totalBytes)
                },
                error => console.log(error),
                ()=>{
                    storage
                        .ref('images')
                        .child(file.name)
                        .getDownloadURL()
                        .then(res => {
                            setUrl(res);
                            data.logoSrc=res;
                        })
                },
            );
        },
        load: url
    };

    const editInputNormal = (e:ChangeEvent<HTMLInputElement>,meta:IMetadata) => {
        if(meta.type==='text'){
            data[meta.propName]=e.target.value;
        }
        if(meta.type==='array'){
            data[meta.propName]=e.target.value.split(',');
        }
    }

    const editArray =(nameArray:string,prop:string,value:any)=>{
        if(prop==='height') value = Number(value);
        data[nameArray][prop] = value;
        data[nameArray]['width'] = 'auto';
    }


    const onChangeColor=( key:string , color:string) =>{
        cssBlock[key] = color;
        setCssBlock(cssBlock);
        data.IBlock.cssArray = cssBlock;
    }
    const rednerInput=(meta:IMetadata)=>{
        if(meta.type==="text" || meta.type==='array'){
            if(meta.text.includes('url')){
                return <div>
                    <label>{meta.text}</label><br/>
                    <FilePond
                        onaddfilestart={(e)=> {
                            console.log(e);

                        }}
                        allowBrowse={true}
                        allowReplace={true}
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={false}
                        server={server}
                        name={`files${Math.random()}`}
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                </div>
            }else{
                return <div>
                    <label>{meta.text}</label><br/>
                    <input onChange={(e)=> editInputNormal(e,meta)}/>
                </div>
            }
        }
        if(meta.type === 'object'){
            const {propName} = meta;
            return <div>
                {"subProps" in meta.props ? meta.props.subProps.map((item, index) => {
                    return <div key={index}>
                        <label>{item.text}</label><br/>
                        <input onChange={(e)=> editArray(propName,item.name,e.target.value)}/>
                    </div>
                }) : null}
            </div>
        }
        return <></>
    }

    return <div className={style.container}>

        <h2>Modifica el bloque</h2>
        {
            component.metadata.map((meta,index)=>{
                return <div key={index} className={style.element}>
                    {rednerInput(meta)}
                </div>
            })
        }
        <div>
            <label>Modifica Colores</label>
            <div>
                <label>Seleccione color de fondo</label>
                <SketchPicker color={cssBlock.backgroundColor} onChangeComplete={(e)=>onChangeColor('backgroundColor',e.hex)}/>
            </div>
            <div>
                <label>Seleccione color de la letra</label>
                <SketchPicker color={cssBlock.color} onChangeComplete={(e)=>onChangeColor('color',e.hex)}/>
            </div>
        </div>
        <div><button onClick={()=>{
            setFiles([]);
            setComponent(data,component.type)}}>Aceptar</button></div>
    </div>
}