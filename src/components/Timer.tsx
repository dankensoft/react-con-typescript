import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos: number
}

export const Timer = ( {milisegundos}: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);

    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {

        // Si se cumple el ref.current entonces ejecutará el clearInterval()
        ref.current && clearInterval(ref.current);
        // console.log('useEffect');
        ref.current = setInterval( () => setSegundos( seg => seg + 1), milisegundos);
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}