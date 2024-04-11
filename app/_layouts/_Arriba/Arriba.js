"use client"
import estilos from "./Arriba.module.css"
import Image from "react-cool-img"
import Link from "next/link"
export default function Arriba() {
    return (
        <div id="Arriba">
            <div className={estilos.todo}>
                <div className={estilos.imagen}>
                    <Image src="/logo.png" alt="mi imagen" />
                </div>
                <div className={estilos.anuncio}>
                    <Link href="/">
                        <Image src="/anuncio.jpg" alt="mi imagen" />
                    </Link>
                </div>
                <div className={estilos.logos}>
                    <Link href="" target="_blank" className={estilos.facebook}>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link>
                    <Link href="" target="_blank" className={estilos.whatsapp}>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    </Link>
                </div>
            </div>
        </div>
    )
}