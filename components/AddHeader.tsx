
import { useState } from 'react';
import { AddContainer } from './Styles';



const AddHeader = ({ show, setAction, setData, data }: any) => {

    const [header, setHeader] = useState<any>({ title: '', logo: '', links: '' });

    const { title, logo, links } = header;
    const right = show ? '0' : '-400px';
    const top = data.length ? '108px' : '0';

    const handleChange = (e: any) => setHeader({ ...header, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !logo || !links) return false;;
        setData([...data, { ...header, links: links.split(',') }]);
        setHeader({ title: '', logo: '', links: '' });
        setAction('');
    };


    return (
        <AddContainer right={right} top={top}>
            <span className='close-button' onClick={() => setAction('')}>X</span>
            <h3 className='text-center'>Agregar header</h3>

            <div className='form-group'>
                <label className='text-center mb-5'>Titulo</label>
                <input name='title' type="text" onChange={handleChange} value={title} />
            </div>

            <div className='form-group'>
                <label className='text-center mb-5'>Logo</label>
                <input name='logo' type="text" onChange={handleChange} value={logo} />
            </div>

            <div className='form-group'>
                <label className='text-center mb-5'>Links</label>
                <input name='links' type="text" onChange={handleChange} value={links} />
            </div>
            <button className='send-button' onClick={handleSubmit}>Guardar</button>

        </AddContainer>
    );
}

export default AddHeader;