import { useState } from 'react';
import Header from '../components/Header';
import AddHeader from '../components/AddHeader';
import { GeneralContainer } from '../components/Styles';
import { header } from '../data';


const Test = () => {

    const [data, setData] = useState([header]);
    const [action, setAction] = useState('');
    const show = action === 'create';
    const deleteHeader = () => {
        setAction('delete')
        const newData = [...data];
        setData(newData.slice(0, newData.length - 1))
    };

    return (
        <GeneralContainer>
            <div className='flex mb-10'>
                <button className='btn' onClick={deleteHeader}>Eliminar</button>
                <button className='btn' onClick={() => setAction('create')}>Crear</button>
            </div>
            {data.map((header: any, index: number) => (
                <Header key={`header-${index}`} data={header} />
            ))}
            <AddHeader show={show} setAction={setAction} setData={setData} data={data} />
        </GeneralContainer>
    );
}

export default Test;