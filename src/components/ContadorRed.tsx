import { useReducer } from "react";

const initialState = {
    contador: 0,
}

type ActionType = { type: 'Incrementar' } | { type: 'Decrementar' } | { type: 'Custom', payload: number };

const contadorReducer = ( state: typeof initialState, action: ActionType ) => {
    switch (action.type) {
        case 'Incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        
        case 'Decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }   

        case 'Custom':
            return {
                ...state,
                contador: action.payload
            } 

        default:
            return state;
    }
}
export const ContadorRed = () => {
    const [ contadorState, dispatch ] = useReducer(contadorReducer, initialState);
    return (
        <>
            <h2>Contador: {contadorState.contador}</h2>
            <button className="btn btn-outline-primary" onClick={ () => dispatch({ type: 'Incrementar' })}>
                +1
            </button>
            <button className="btn btn-outline-primary" onClick={ () => dispatch({ type: 'Decrementar' })}>
                -1
            </button>
            <button className="btn btn-outline-danger" onClick={ () => dispatch({ type: 'Custom', payload: 100 })}>
                100
            </button>
        </>
    )
}