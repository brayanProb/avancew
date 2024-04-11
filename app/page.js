import estilos from "./page.module.css";
import Contenido from "./_Cliente/Contenido";
import pool from "@/_configuracion_db/db";
export default async function Home() {
  let datos={}
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM celularesBitel');
    const celulares = result.rows;
    client.release();
    dato=celulares
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return (
    <>
      <main className={estilos.main}>
      <div className={estilos.center}>
        <Contenido datos={datos}></Contenido>
      </div>
    </main>
    </>
  );
}
