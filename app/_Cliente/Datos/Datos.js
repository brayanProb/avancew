"use client"
import estilos from "./datos.module.css"
import Link from "next/link"
import Image from "react-cool-img"
export default function Datos() {
    const ejemplo = [
        {
            "Id": 0,
            "Categoria": "Celulares",
            "Imagen1": "https://latienda.pe/19456-medium_default/51b1a6fb8ee7ba68c74309a53aad3f4c.jpg",
            "Imagen2": "",
            "Imagen3": "",
            "Imagen3D": "",
            "Nserie1": "989830334098983033409898303340",
            "Nserie2": "",
            "Precio": 250.20,
            "Marca": "Motorola 6G",
            "Ram": 8,
            "Almacenamiento": 500,
            "Bateria": 2500,
            "Camara": 100,
            "Pantalla": 6.82,
            "Unidades": 1,
            "Descripcion": "Que es buen celular",
        },
        {
            "Id": 1,
            "Categoria": "Celulares",
            "Imagen1": "https://latienda.pe/19456-medium_default/51b1a6fb8ee7ba68c74309a53aad3f4c.jpg",
            "Imagen2": "",
            "Imagen3": "",
            "Imagen3D": "",
            "Nserie1": "989830334098983033409898303340",
            "Nserie2": "",
            "Precio": 250.20,
            "Marca": "Motorola 6G",
            "Ram": 8,
            "Almacenamiento": 500,
            "Bateria": 2500,
            "Camara": 100,
            "Pantalla": 6.82,
            "Unidades": 1,
            "Descripcion": "Que es buen celular",
        }
    ]
    return (
        <div className={estilos.todo}>
            {ejemplo.map((a, b) => <div key={b} className={estilos.paralelo}>
                <div className={estilos.imagen}>
                    <Image src={a.Imagen1}></Image>
                    <div className={estilos.precio}>
                        <nav className={estilos.precioA}>Oferta</nav>
                        <p className={estilos.precioB}><ion-icon name="pricetags-outline"></ion-icon> S/.{a.Precio} </p>
                    </div>
                </div>
                <div className={estilos.caja}>
                    <div className={estilos.cajaA}>
                        <div className={estilos.ver}>
                            <Link href="/hola" className={estilos.ver_link}>Ver Articulo<ion-icon name="chevron-forward-outline">
                                </ion-icon><ion-icon name="chevron-forward-outline"></ion-icon>
                            </Link>
                        </div>
                        
                        <div className={estilos.cajaBitel}>
                            <div className={estilos.datos}>
                                <nav>{a.Marca}</nav>
                                <p>ALMTO: <strong>{a.Almacenamiento}GB</strong> </p>
                                <p>RAM: <strong>{a.Ram}GB</strong></p>
                                <p>CAMARA: <strong>{a.Camara} MP</strong></p>
                                <p>BATERIA: <strong>{a.Bateria} mAh</strong></p>
                                <p>PANTALLA: <strong>{a.Pantalla} Pulg</strong></p>
                            </div>
                            <nav className={estilos.logoBitel}>BITEL</nav>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}