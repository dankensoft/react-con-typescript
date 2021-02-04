import { useForm } from '../hooks/useForm';

export const Formulario2 = () => {

    const {formulario, handleChange} = useForm({
        postal: '20001',
        ciudad: 'Chiquimula'
    });
    const {postal, ciudad} = formulario;
    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Postal:</label>
                <input type="text" className="form-control" value={postal} name="postal" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input type="text" className="form-control" value={ciudad} name="ciudad" onChange={handleChange}/>
            </div>
            <pre>{ JSON.stringify( formulario ) }</pre>
        </form>
    )
}