// import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const Formulario = () => {
    /* const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    } */

    interface FormData {
        email: string;
        nombre: string;
        edad: number;
    }

    const {formulario, handleChange} = useForm<FormData>({
        email: 'danniels.magana@gmail.com',
        nombre: 'Danniels Castillo',
        edad: 33
    });
    const {email, nombre, edad} = formulario;
    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" value={email} name="email" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" value={nombre} name="nombre" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="text" className="form-control" value={edad} name="edad" onChange={handleChange}/>
            </div>
            <pre>{ JSON.stringify( formulario ) }</pre>
        </form>
    )
}