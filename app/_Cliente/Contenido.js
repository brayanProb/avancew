"use client"
import Buscador from "./Buscador/Buscador";
import Opciones from "./Opciones/Opciones";
import Datos from "./Datos/Datos";
import { useState, useEffect } from "react";
import estilos from "./contenido.module.css"
import Image from "react-cool-img"
export default function Contenido({ datos }) {
    const filtro={}
    console.log(datos);
    return (
        <div className={estilos.todo}>
            <div>
                <Opciones></Opciones>
                <div className={estilos.promo}>
                    <div className={estilos.cuerda}></div>
                    <Image src="/promocion.jpeg"></Image>
                </div>
            </div>
            <div>
                <div>
                    <Buscador></Buscador>
                </div>
                <div>
                    <Datos></Datos>
                    
                </div>
            </div>
        </div>
    )
}