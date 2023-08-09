import { useEffect } from "react"

type Botaoprops = {
    titulo: string;
    cor?: string;
}

export default function Butao(props: Botaoprops){


    return <button 
    style={{
        backgroundColor: props.cor ?? "green"
    }}
    
    >
        {props.titulo}
    </button>
}

