"use client"
import estilos from "./buscador.module.css"
export default function Buscador() {
    return (
        <>
            <input
                type="search"
                placeholder="Buscar producto..."
                className={estilos.Buscador}
            />
        </>
    )
}