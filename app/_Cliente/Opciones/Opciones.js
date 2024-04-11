"use client"
import estilos from "./opciones.module.css"
import Link from "next/link"
import { useState } from "react"
export default function Opciones({ filtro }) {
    const [posicion,Fposicion]=useState("Celulares")
    const datos = [
        {
            "nombre": "Celulares",
            "url": "#"
            , "filtro": "Celulares"
        }, {
            "nombre": "Accesorios",
            "url": "#"
            , "filtro": "Accesorios"
        }, {
            "nombre": "Promociones",
            "url": "#"
            , "filtro": "Promociones"
        }
    ]
    return (
        <div className={estilos.todo}>
            <div className={estilos.lista}>
                <ul>
                    {datos.map((a, b) => <div key={b}>
                        {posicion === a.nombre ? <Link href={a.url}><li className={estilos.listaliB}>{a.nombre}</li></Link> : 
                        <Link href={a.url}><li onClick={()=>Fposicion(a.nombre)} className={estilos.listaliA}>{a.nombre}</li></Link>}
                    </div>)}
                </ul>
            </div>
        </div>
    )
}